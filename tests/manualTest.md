# 📋 Requirements Traceability Matrix (RTM) – CleanCity Waste Management

This document outlines the functional and non-functional requirements for the CleanCity waste management system, along with their corresponding test cases, status, and remarks.

---

## 🧪 Test Case Summary

| Requirement ID | Main Feature | Sub-Feature | Description | Test Case ID | Status | Remarks | Priority | Test Type | Expected Result | Actual Result | Defect ID | Tester | Test Date |
|----------------|--------------|-------------|-------------|---------------|---------|---------|----------|------------|-----------------|---------------|-----------|--------|-----------|
| FR-001 | User registration fields | Complete Registration | Register user with all valid fields | TC-REG-001 | Completed | Should accept international formats | High | Functional | User registered successfully | User can register but doesn't show any notification of successful registration | | Henok | 2025-11-10 |
| FR-002 | Registration validation | Invalid Data Validation | Register with invalid email/password | TC-REG-002 | Completed | Should show specific error messages | High | Validation | Appropriate error messages shown | No validation for name and password fields | | Henok | 2025-11-10 |
| FR-003 | Account creation | Successful Registration | Complete registration with valid data | TC-REG-003 | Completed | Should create user in localStorage | High | Functional | Account created, redirect to login | Redirects to dashboard instead of login | | Henok | 2025-11-10 |
| FR-004 | User login | Valid Credentials | Login with correct email/password | TC-LOGIN-001 | Completed | Should create session | High | Functional | Login successful, session created | Login works correctly | | Henok | 2025-11-10 |
| FR-005 | Login validation | Invalid Credentials | Login with wrong email/password | TC-LOGIN-002 | Completed | Should show error messages | High | Security | "Invalid credentials" error | No proper credential validation | | Henok | 2025-11-10 |
| FR-006 | Maintain session | Session Persistence | Refresh browser after login | TC-SESSION-001 | Completed | User should remain logged in | High | Functional | Session persists after refresh | Session persists correctly | | Henok | 2025-11-10 |
| FR-007 | Redirect after login | Protected Access | Access restricted pages redirect to login | TC-REDIRECT-001 | Completed | Should remember intended URL | High | Security | Redirect to login with return URL | Redirects to login correctly | | Henok | 2025-11-10 |
| FR-008 | Logout | Session Clear | Click logout clears session | TC-LOGOUT-001 | Completed | Should remove user data | High | Security | Session cleared, redirect to login | Redirects to homepage instead of login | | Henok | 2025-11-10 |
| FR-010 | Role-based access | Admin Restriction | Non-admin cannot access admin panel | TC-ROLE-001 | Completed | Should redirect unauthorized | High | Security | Redirect to unauthorized page | No role-based access control | | Henok | 2025-11-10 |
| FR-012 | Schedule pickup | Valid Submission | Submit pickup with required fields | TC-PICKUP-001 | Completed | Should create request in localStorage | High | Functional | Pickup request created successfully | Only email validated; past dates allowed | | Henok | 2025-11-10 |
| FR-013 | Pickup date validation | 24-Hour Advance | Schedule within 24 hours shows error | TC-PICKUP-002 | Completed | Minimum advance requirement | High | Validation | Error: "24 hours advance required" | No error shown; past dates allowed | | Henok | 2025-11-10 |
| FR-014 | Display time slots | Time Selection | User can select available time slots | TC-PICKUP-003 | Completed | Should show booked slots as unavailable | Medium | Functional | Time slot selected and confirmed | No available slots shown | | Henok | 2025-11-10 |
| FR-015 | Prevent duplicate pickup | Same Date Prevention | Cannot schedule same date twice | TC-PICKUP-004 | Completed | Should check existing requests | High | Validation | Error: "Pickup already scheduled" | No local storage; duplicates allowed | | Henok | 2025-11-10 |
| FR-016 | View pickup history | Request History | User sees all past pickup requests | TC-HISTORY-001 | Completed | Should show in chronological order | High | Functional | All requests displayed in history | No requests saved or displayed | | Henok | 2025-11-10 |
| FR-017 | Cancel pending requests | Cancel Function | User can cancel pending requests | TC-CANCEL-001 | Completed | Should update status to "Cancelled" | High | Functional | Status updated to "Cancelled" | Users cannot see requests to cancel | | Henok | 2025-11-10 |
| FR-019 | Display request status | Status Visibility | All requests show current status | TC-STATUS-001 | Completed | Statuses: Pending, Confirmed, Completed, Cancelled | Medium | UI | Status column shows current status | No status shown; all zero | | Henok | 2025-11-10 |
| FR-020 | Real-time updates | Status Update | Admin changing status updates user view | TC-REALTIME-001 | Completed | Should reflect changes without refresh | High | Functional | User view updates automatically | No admin panel or dashboard | | Henok | 2025-11-10 |
| FR-021 | Notifications for status | Status Notification | User notified when status changes | TC-NOTIFY-001 | Completed | Notification bell shows unread count | Medium | Functional | Notification appears, bell shows count | No notifications | | Henok | 2025-11-10 |
| FR-022 | Feedback after pickup | Feedback Submission | User can submit feedback after completion | TC-FEEDBACK-001 | Completed | Should store feedback with request ID | Medium | Functional | Feedback stored with request ID | Feedback not stored locally | | Henok | 2025-11-10 |
| FR-023 | Dashboard overview | Dashboard Display | User sees personalized dashboard | TC-DASH-001 | Completed | Should show user-specific data | High | Functional | Personalized dashboard displayed | Dashboard same for all users | | Henok | 2025-11-10 |
| FR-025 | Visual charts | Chart Accuracy | Charts show accurate data | TC-CHARTS-001 | Completed | Should match actual request data | Medium | Functional | Chart data matches stored data | No charts or admin controls | | Henok | 2025-11-10 |
| FR-028 | Export CSV | Data Export | User can export data to CSV | TC-EXPORT-001 | Completed | Should include all user requests | Medium | Functional | CSV file generated with user data | No export feature | | Henok | 2025-11-10 |
| FR-029 | Badges for achievements | First Pickup Badge | User gets badge after first pickup | TC-BADGES-001 | Completed | Should award "First Timer" badge | Low | Functional | "First Timer" badge awarded | No badges or pickups tracked | | Henok | 2025-11-10 |
| FR-036 | Rotating eco tips | Tip Rotation | Eco tips rotate every 5 seconds | TC-TIPS-001 | Completed | Should cycle through predefined tips | Low | UI | Tips rotate every 5 seconds | Rotates but not every 5 seconds | | Henok | 2025-11-10 |
| FR-037 | Interactive quizzes | Quiz Functionality | User can take environmental quizzes | TC-QUIZ-001 | Completed | Should validate answers and provide score | Low | Functional | Score calculated and displayed | Scores calculated and stored locally | | Henok | 2025-11-10 |
| FR-039 | Infographics display | Graphic Rendering | Infographics display correctly | TC-INFO-001 | Completed | Should be responsive on all devices | Low | UI | Graphics render properly | Not fully responsive; content hidden | | Henok | 2025-11-10 |
| FR-040 | Action buttons | Button Functionality | Action buttons link to correct features | TC-BUTTONS-001 | Completed | Should navigate to appropriate pages | Medium | Functional | Correct pages/features accessed | All buttons work correctly | | Henok | 2025-11-10 |
| FR-041 | Create community post | Post Creation | User can create community posts | TC-POSTS-001 | Completed | Should require title and content | Medium | Functional | Post created successfully | Posts created and saved locally | | Henok | 2025-11-10 |
| FR-042 | Like/comment posts | Interaction Features | Users can like and comment on posts | TC-INTERACT-001 | Completed | Should update counts instantly | Low | Functional | Like count increases, comment added | Likes and comments saved locally | | Henok | 2025-11-10 |
| FR-045 | Edit user profile | Profile Update | User can edit profile information | TC-PROFILE-001 | Completed | Should validate updated information | Medium | Functional | Profile updated successfully | Updates not persisted after logout | | Henok | 2025-11-10 |
| FR-046 | View achievements | Achievement Display | User can view earned achievements | TC-ACHIEVE-001 | Completed | Should show badges and dates | Low | UI | Earned achievements displayed | No achievements displayed | | Henok | 2025-11-10 |
| FR-047 | Upload profile picture | Image Upload | User can upload profile picture | TC-AVATAR-001 | Completed | Should support common formats | Low | Functional | Image uploaded successfully | Cannot upload profile picture | | Henok | 2025-11-10 |
| FR-048 | Show stats & impact | Personal Statistics | User sees environmental impact | TC-STATS-001 | Completed | Should include totals and averages | Low | UI | Personal impact statistics shown | Same page for all users | | Henok | 2025-11-10 |
| FR-049 | Follow members | Follow Functionality | Users can follow other members | TC-FOLLOW-001 | Completed | Should update follower counts | Low | Functional | Follow count increases | No follow feature | | Henok | 2025-11-10 |
| FR-050 | News feed | Feed Content | News feed shows community activity | TC-NEWS-001 | Completed | Should include posts, achievements, tips | Low | UI | Mixed content types displayed | Mixed content available and filtered | | Henok | 2025-11-10 |
| FR-053 | Admin view all pickups | Request Overview | Admin sees all system requests | TC-ADMIN-001 | Completed | Should show paginated list | High | Functional | All system requests displayed | No admin controls | | Henok | 2025-11-10 |
| FR-054 | Admin approve/reject | Status Modification | Admin can change request status | TC-ADMIN-002 | Completed | Should update immediately in all views | High | Functional | Status updated across all views | No admin controls | | Henok | 2025-11-10 |
| FR-055 | Admin assign date/time | Schedule Modification | Admin can reassign pickup dates/times | TC-ADMIN-003 | Completed | Should respect 24-hour minimum rule | High | Functional | New date/time assigned | No admin controls | | Henok | 2025-11-10 |
| FR-056 | Admin filter/search | Request Filtering | Admin can filter requests | TC-ADMIN-004 | Completed | Multiple filter combinations should work | Medium | Functional | Requests filtered correctly | No admin controls | | Henok | 2025-11-10 |
| FR-057 | Admin view users | User Management | Admin can view all users | TC-ADMIN-005 | Completed | Should show user activity and status | Medium | Functional | All users displayed with activity | No admin controls | | Henok | 2025-11-10 |
| FR-058 | Admin change roles | Role Management | Admin can change user roles | TC-ADMIN-006 | Completed | Should require confirmation | High | Security | Role change requires confirmation | No admin controls | | Henok | 2025-11-10 |
| FR-059 | Admin suspend/delete | Account Management | Admin can suspend/delete accounts | TC-ADMIN-007 | Completed | Suspended users cannot login | High | Security | User cannot login while suspended | No admin controls | | Henok | 2025-11-10 |
| FR-060 | User activity reports | Report Generation | Admin can generate reports | TC-REPORTS-001 | Completed | Should include date range selection | Medium | Functional | Report with date range created | No admin controls | | Henok | 2025-11-10 |
| FR-061 | Moderate posts/comments | Content Moderation | Admin can moderate content | TC-MOD-001 | Completed | Should have approve/reject options | Medium | Security | Approve/reject options available | No admin controls | | Henok | 2025-11-10 |
| FR-062 | Delete content | Content Removal | Admin can delete inappropriate content | TC-DELETE-001 | Completed | Should remove from all views | Medium | Security | Content removed from all feeds | No admin controls | | Henok | 2025-11-10 |
| FR-063 | Flag/report content | Reporting System | Users can flag inappropriate content | TC-REPORT-001 | Completed | Should require reason for reporting | Medium | Security | Reporting requires reason selection | Reporting available via feedback form | | Henok | 2025-11-10 |
| FR-064 | Create announcements | Announcement Creation | Admin can create announcements | TC-ANNOUNCE-001 | Completed | Should support rich text formatting | Low | Functional | Announcement created with formatting | No admin controls | | Henok | 2025-11-10 |
| FR-065 | Notification bell | Notification System | Bell shows unread count | TC-NOTIF-001 | Completed | Should update in real-time | Medium | UI | Bell icon shows unread count | No notifications | | Henok | 2025-11-10 |
| FR-066 | Notification for updates | Status Notifications | Users notified of status changes | TC-NOTIF-002 | Completed | Should include request details | Medium | Functional | Notification with details appears | No notifications | | Henok | 2025-11-10 |
| FR-067 | Mark notifications read | Read Status | Users can mark as read | TC-NOTIF-003 | Completed | Should update unread count | Medium | Functional | Unread count decreases | No notifications | | Henok | 2025-11-10 |
| FR-069 | Responsive design | Mobile Layout | Works on mobile devices | TC-RESP-001 | Completed | Should adapt layout for small screens | High | UI | Layout adapts for mobile | Not responsive | | Henok | 2025-11-10 |
| FR-073 | Alt text for images | Accessibility | All images have descriptive alt text | TC-ACCESS-001 | Completed | Should work with screen readers | Medium | Accessibility | All images have alt text | No images available | | Henok | 2025-11-10 |
| FR-078 | Data in localStorage | Data Persistence | User data persists | TC-STORAGE-001 | Completed | Should survive browser restarts | High | Functional | User data persists | Data persists after restart | | Henok | 2025-11-10 |
| FR-084 | Page load performance | Loading Time | Pages load within 3 seconds | TC-PERF-001 | Completed | Should optimize performance | High | Performance | Pages load within 3 seconds | Pages load quickly | | Henok | 2025-11-10 |
| FR-012 | Schedule pickup | Waste Type Selection | Select from available waste types | TC-PICKUP-005 | Completed | Options: General, Recyclable, Organic, Hazardous | Medium | Functional | Waste type selected and stored | Waste types not saved locally | | Henok | 2025-11-10 |
| FR-012 | Schedule pickup | Location Input | Enter location with suggestions | TC-PICKUP-006 | Completed | Should suggest nearby areas | Medium | UI | Suggests "Nairobi" and matches | Location suggestions work | | Henok | 2025-11-10 |
| FR-018 | Modify pickups | Edit Restrictions | Cannot modify within 24 hours | TC-EDIT-001 | Completed | Clear time restriction message | Medium | Functional | Edit button disabled with message | Not displayed to user | | Henok | 2025-11-10 |
| FR-026 | Community leaderboards | Ranking Accuracy | Leaderboard rankings correct | TC-LEADER-001 | Completed | Should calculate scores properly | Low | Functional | Rankings reflect actual impact | No leaderboard | | Henok | 2025-11-10 |
| FR-027 | Trends over time | Monthly Statistics | Show monthly pickup trends | TC-TRENDS-001 | Completed | Chart should group data by month | Low | Functional | Monthly data grouped correctly | No such feature | | Henok | 2025-11-10 |
| FR-030 | Points & levels | Level Progression | User levels up based on points | TC-POINTS-001 | Completed | Should show current level and progress | Low | UI | Level updates, progress bar shows | No such feature | | Henok | 2025-11-10 |
| FR-038 | Quiz scoring | Score Tracking | Quiz scores saved to profile | TC-QUIZ-002 | Completed | Should update user's quiz history | Low | Functional | Score saved to user profile | Scores disappear after refresh | | Henok | 2025-11-10 |
| FR-043 | Chronological display | Feed Ordering | Posts display newest first | TC-FEED-001 | Completed | Newest posts should appear first | Low | UI | Newest posts at top of feed | Newest posts appear first | | Henok | 2025-11-10 |
| FR-044 | Share tips | Tip Moderation | Tips require admin approval | TC-SHARE-001 | Completed | Admin approval for new tips | Medium | Security | Tip requires admin approval | No admin controls | | Henok | 2025-11-10 |
| FR-051 | Share achievements | Social Sharing | Support sharing to platforms | TC-SHARE-ACH-001 | Completed | Twitter, Facebook, WhatsApp options | Low | Functional | Social platform sharing initiated | No share feature | | Henok | 2025-11-10 |
| FR-052 | Community challenges | Challenge Participation | Users can join challenges | TC-CHALLENGE-001 | Completed | Should track individual progress | Low | Functional | Participation tracked and displayed | No challenge feature | | Henok | 2025-11-10 |
| FR-068 | Notification history | History Access | Users can view notification history | TC-NOTIF-004 | Completed | Should show all past notifications | Low | Functional | All past notifications displayed | No notifications | | Henok | 2025-11-10 |
| FR-069 | Responsive design | Tablet Layout | Works on tablet devices | TC-RESP-002 | Completed | Should use intermediate breakpoints | High | UI | Layout adapts for tablet | Partially responsive; navbar misaligned | | Henok | 2025-11-10 |
| FR-084 | Page load performance | Initial Load | App loads quickly | TC-PERF-002 | Completed | Should use lazy loading | High | Performance | App loads quickly with optimization | App loads quickly | | Henok | 2025-11-10 |
| FR-078 | Data in localStorage | Data Integrity | Data remains consistent | TC-STORAGE-002 | In Progress | Should handle corrupted data | High | Security | System handles corruption gracefully | Not tested | | Henok |  |
| FR-024 | Environmental metrics | CO2 Savings | Show CO2 savings from recycling | TC-METRICS-001 | In Progress  | Should calculate based on waste type | Low | Functional | CO2 savings calculated and displayed | Not implemented | |  |  |

---

## 📊 Summary Statistics

- **Total Test Cases**: 75
- **Completed**: 73
- **Not Completed**: 2
- **High Priority**: 28
- **Medium Priority**: 21
- **Low Priority**: 26

---

## 📌 Key Issues Identified

### 🚨 Critical Issues:
- No admin controls or dashboard implemented
- No role-based access control
- Pickup requests not saved to localStorage
- No notification system
- Data persistence issues across sessions

### ⚠️ Major Issues:
- No validation for pickup dates (past dates allowed)
- No duplicate prevention for pickups
- Dashboard not personalized per user
- Responsive design issues on mobile/tablet

### 🔧 Functional Gaps:
- Missing export CSV feature
- No achievement/badge system
- No leaderboard or statistics
- Limited form validations

---

## 👤 Tester Information
- **Tester**: Henok Girma
- **Last Test Date**: 2025-11-10
- **Environment**: Local development

---

*Document generated from RTM testing results*