# 🧪 CleanCity – Test Plan

**Project Name:** CleanCity – Waste Pickup Scheduler  
**Document ID:** CleanCity-TEST PLAN  
**Date:** 04/11/2025  
**Prepared by:** Erick Omondi, Henok Girma, Lydia Awuor  

---

## 📌 Introduction
This Test Plan defines the testing strategy for validating the CleanCity waste management web application. It ensures the application meets functional and non-functional requirements, works across devices and browsers, and delivers an intuitive user experience.

---

## ✅ Objectives & Tasks

### **Objectives**
- Verify core functionalities work as expected
- Detect defects early and ensure timely fixes
- Validate performance, UI/UX, and usability
- Confirm security and access control mechanisms
- Ensure cross-browser and cross-platform compatibility
- Provide complete test coverage (manual + automation)

### **Tasks**
- Requirement review and clarifications
- Test case creation and review
- Test environment setup
- Execution of manual and automation tests
- Defect logging and reporting
- Regression testing
- Test documentation and closure

---

## 🧭 Scope

### **In-Scope**
- User authentication: registration, login, password validations
- Waste pickup scheduling and management
- Dashboard analytics & gamification features
- Content management (blogs, awareness section, quizzes)
- Community & admin features
- UI responsiveness and accessibility
- Data validation (localStorage handling)
- Performance & load responsiveness

### **Out of Scope**
- Third-party logistics integrations
- Penetration testing
- Backend/Database validation
- Payment processing

---

## 🧩 Test Items
- Authentication System
- Waste Management
- Dashboard & Analytics
- Content Management
- Community Features
- User Interface
- Administrative Functions
- Data & Security
- Error Handling
- Performance & Compatibility
- Notifications

---

## 🔍 Features to Be Tested

| Feature | Description |
|---------|-------------|
| Authentication | Registration, Login, Logout, Password change, Role-based access |
| Waste Management | Pickup scheduling flow, history, status updates |
| Dashboard & Analytics | Leaderboards, environmental impact metrics, gamification |
| Content Management | Blogs, eco tips, awareness content, quizzes |
| Community Features | User profiles, uploading, comments, likes |
| User Interface | Responsiveness, accessibility, navigation |
| Admin Functions (Backend) | User management, content moderation |
| Data & Security | Input validation, localStorage data handling |
| Performance & Compatibility | Browser/device compatibility, load times |
| Error Handling | Network recovery, validation messages |
| Notifications | Notification bell, email/alerts |

---

## 🚫 Features Not to Be Tested
- Live support
- Third-party integration
- Penetration testing
- Backend validation

---

## 🔐 Entry & Exit Criteria

### **Entry Criteria**
- User stories approved
- Test environment ready
- Test data prepared
- Test cases reviewed

### **Exit Criteria**
- Critical defects fixed and verified
- 100% functional requirement coverage
- 90% test case pass rate
- Regression testing completed
- Test summary approved

---

## 🧪 Test Strategy

- **Functional Testing**
- **Unit Testing** (Jest)
- **Smoke Testing**
- **Regression Testing**
- **Usability & Accessibility Testing (WCAG2.1 AA)**
- **UI Responsiveness Testing**
- **Integration Testing**
- **Performance Testing**
- **Security Testing**
- **Cross-Browser Testing**

---

## 📄 Test Deliverables
- Test Plan
- Test Cases / Test Scripts
- Defect Reports
- Weekly Status Reports
- Test Summary Report
- Requirement Traceability Matrix (RTM)
- Final Test Sign-off

---

## 🛠️ Tools

| Category | Tools |
|----------|-------|
| Test Management | Jira |
| Automation | Selenium, PyTest |
| Unit Testing | Jest |
| Performance | JMeter |
| Bug Tracking | Jira / GitHub issues |
| Documentation | Markdown (GitHub), Word (PDF export) |
| Accessibility | Lighthouse, ScreenReader |
| Browser Testing | BrowserStack / Manual |

---

## ⚙️ Environmental Needs
- **Hosting:** Netlify (Frontend)
- **Devices:** MacBook, Windows PC, iPhone, Samsung
- **Browsers:** Chrome, Edge, Firefox, Safari
- **Test Data:** Provided by instructors
- **Storage:** Browser localStorage (cleared per test cycle)

---

## 🧾 Sample Test Risks

| Risk ID | Description | Likelihood | Impact | Mitigation |
|---------|-------------|------------|---------|------------|
| CC-LOGIN-001 | Valid login failure | Medium | High | Authentication handling |
| CC-SCH-001 | Scheduling past dates | High | High | Date picker validation |
| CC-P-008 | Data loss during testing | Medium | Medium | Logging + backup |
| CC-ACC-005 | Environment instability | Medium | High | Regular checks |
| CC-VALID-006 | Invalid email accepted | Low | High | Form + backend validation |

---

## 🐞 Defect Lifecycle

`Open → Triage → In Progress → Ready for Retest → Closed → Reopened (if persists)`

---

## 📡 Communication Strategy

| Stakeholder | Role | Channel | Frequency |
|-------------|------|----------|-----------|
| QA Group | Test Execution | Standup meetings | Bi-weekly |
| QA Group | Issue follow-up | Jira, Email, WhatsApp, Google Meet | Bi-weekly |
| QA Lead | Progress presentation | Weekly review | Weekly |
| Instructors | Progress evaluation | Weekly meetings | Weekly |

---

## 🗓️ Test Schedule

| Phase | Start | End | Duration |
|--------|--------|------|----------|
| Requirement Analysis | June 27 | June 29 | 3 days |
| Test Design | June 30 | July 4 | 4 days |
| Smoke Test | July 1 | July 15 | Daily |
| Test Execution | July 5 | July 10 | 7 days |
| Regression Testing | July 10 | July 13 | 4 days |
| UAT | July 13 | July 15 | 2 days |
| Test Closure | July 16 | — | 1 day |

---

## 👥 Responsibilities

| Team Member | Role | Responsibility |
|-------------|------|----------------|
| QA Lead | Supervisor | Oversight |
| QA Engineers | Testing team | Design test cases, execute, log bugs |
| Instructors | Supervisors | Review, approvals, problem resolution |

---

## 📊 Metrics
- Test coverage (target: 90%+)
- Test pass/fail rate
- Bug trends (by severity)
- Time to fix defects
- Average page response time

---

> ✅ This README ensures any contributor or stakeholder understands the testing approach, scope, and expectations.

