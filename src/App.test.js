import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Wrapper component for routing
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter });
};

describe("CleanCity App Component", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Mock localStorage data
    localStorage.getItem.mockImplementation((key) => {
      if (key === "pickupRequests") {
        return JSON.stringify([
          {
            id: "REQ001",
            location: "Nairobi",
            wasteType: "General",
            date: "2024-01-15",
            status: "pending",
          },
          {
            id: "REQ002",
            location: "Kisumu",
            wasteType: "Recyclable",
            date: "2024-01-16",
            status: "completed",
          },
        ]);
      }
      if (key === "feedbackSubmissions") {
        return JSON.stringify([
          {
            id: "FB001",
            requestId: "REQ001",
            message: "Missed pickup",
            date: "2024-01-15",
          },
        ]);
      }
      return null;
    });
  });

  // Test 1: App renders without crashing
  test("renders CleanCity app without crashing", () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/CleanCity/i)).toBeInTheDocument();
  });

  // Test 2: Navigation between pages works correctly
  test("navigates to different pages", async () => {
    renderWithRouter(<App />);

    // Check if home page is initially rendered
    expect(screen.getByText(/Waste Pickup Scheduler/i)).toBeInTheDocument();

    // Navigate to Dashboard
    fireEvent.click(screen.getByText(/Dashboard/i));
    await waitFor(() => {
      expect(screen.getByText(/Pickup Requests/i)).toBeInTheDocument();
    });

    // Navigate to Feedback
    fireEvent.click(screen.getByText(/Feedback/i));
    await waitFor(() => {
      expect(screen.getByText(/Report Missed Pickup/i)).toBeInTheDocument();
    });

    // Navigate to Awareness
    fireEvent.click(screen.getByText(/Awareness/i));
    await waitFor(() => {
      expect(
        screen.getByText(/Waste Management Awareness/i)
      ).toBeInTheDocument();
    });
  });

  // Test 3: LocalStorage integration for data persistence
  test("loads data from localStorage on initial render", () => {
    renderWithRouter(<App />);

    // Navigate to dashboard to see the data
    fireEvent.click(screen.getByText(/Dashboard/i));

    expect(localStorage.getItem).toHaveBeenCalledWith("pickupRequests");
    expect(screen.getByText("REQ001")).toBeInTheDocument();
    expect(screen.getByText("REQ002")).toBeInTheDocument();
  });

  // Test 4: Form submission creates new pickup request
  test("submits new pickup request form", async () => {
    renderWithRouter(<App />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/location/i), {
      target: { value: "Mombasa" },
    });

    fireEvent.change(screen.getByLabelText(/waste type/i), {
      target: { value: "Recyclable" },
    });

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2024-01-20" },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/Schedule Pickup/i));

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        "pickupRequests",
        expect.stringContaining("Mombasa")
      );
    });
  });

  // Test 5: Filter functionality in dashboard
  test("filters pickup requests by location", async () => {
    renderWithRouter(<App />, { route: "/dashboard" });

    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText("REQ001")).toBeInTheDocument();
    });

    // Apply location filter
    fireEvent.change(screen.getByLabelText(/filter by location/i), {
      target: { value: "Nairobi" },
    });

    // Check if filtering works (this might reveal the intentional bug)
    const nairobiRequests = screen.queryAllByText("Nairobi");
    expect(nairobiRequests.length).toBeGreaterThan(0);
  });

  // Test 6: Status update in admin panel
  test("updates request status in admin panel", async () => {
    renderWithRouter(<App />, { route: "/admin" });

    // Find and click status update button
    const updateButton = screen.getByText(/Mark as Scheduled/i);
    fireEvent.click(updateButton);

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        "pickupRequests",
        expect.stringContaining("scheduled")
      );
    });
  });

  // Test 7: Feedback submission
  test("submits feedback for missed pickup", async () => {
    renderWithRouter(<App />, { route: "/feedback" });

    // Fill feedback form
    fireEvent.change(screen.getByLabelText(/request id/i), {
      target: { value: "REQ001" },
    });

    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Pickup was missed on scheduled date" },
    });

    // Submit feedback
    fireEvent.click(screen.getByText(/Submit Feedback/i));

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        "feedbackSubmissions",
        expect.stringContaining("Pickup was missed")
      );
    });
  });

  // Test 8: Responsive design elements
  test("renders responsive navigation", () => {
    renderWithRouter(<App />);

    // Check if navigation elements are present
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Feedback/i)).toBeInTheDocument();
    expect(screen.getByText(/Awareness/i)).toBeInTheDocument();
  });

  // Test 9: Error handling for invalid form submissions
  test("handles form validation errors", async () => {
    renderWithRouter(<App />);

    // Try to submit empty form
    fireEvent.click(screen.getByText(/Schedule Pickup/i));

    await waitFor(() => {
      // Check for validation errors (this might reveal intentional flaws)
      const errorMessages = screen.queryAllByText(/required/i);
      expect(errorMessages.length).toBeGreaterThan(0);
    });
  });

  // Test 10: Accessibility testing for images
  test("checks for image alt text in awareness page", async () => {
    renderWithRouter(<App />, { route: "/awareness" });

    // Check images for alt text (this should reveal the accessibility bug)
    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
    });
  });
});

// Additional integration tests
describe("App Integration Tests", () => {
  test("complete user flow: request → dashboard → feedback", async () => {
    renderWithRouter(<App />);

    // Step 1: Create a pickup request
    fireEvent.change(screen.getByLabelText(/location/i), {
      target: { value: "Eldoret" },
    });
    fireEvent.change(screen.getByLabelText(/waste type/i), {
      target: { value: "General" },
    });
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2024-01-25" },
    });
    fireEvent.click(screen.getByText(/Schedule Pickup/i));

    // Step 2: Navigate to dashboard to verify request
    fireEvent.click(screen.getByText(/Dashboard/i));
    await waitFor(() => {
      expect(screen.getByText("Eldoret")).toBeInTheDocument();
    });

    // Step 3: Navigate to feedback and submit
    fireEvent.click(screen.getByText(/Feedback/i));
    fireEvent.change(screen.getByLabelText(/request id/i), {
      target: { value: "REQ001" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Test feedback message" },
    });
    fireEvent.click(screen.getByText(/Submit Feedback/i));

    await waitFor(() => {
      expect(
        screen.getByText(/thank you for your feedback/i)
      ).toBeInTheDocument();
    });
  });
});
