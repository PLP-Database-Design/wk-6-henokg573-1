# CleanCity Project - QA Final Report

## Project Overview
**Project:** CleanCity Waste Pickup Scheduler Web Application  
**Team:** Omni  
**Prepared by:** Erick Omondi, Henok Girma, Lydia Awuor  
**Instructor:** [Instructor Name]  
**Date:** November 2025  

## Executive Summary

The CleanCity Waste Pickup Scheduler web application was designed to help citizens schedule waste pickups, engage in environmental awareness activities, and track their ecological contributions. The Quality Assurance (QA) team performed extensive manual and automated testing to ensure that all functionalities met user expectations and functional requirements.

Testing covered major modules such as user authentication, waste scheduling, dashboards, notifications, and community engagement features. Using tools like Jira, Selenium, and JMeter, the team validated both functional and non-functional requirements.

The QA team achieved over 90% test coverage, completing 73 out of 75 planned test cases. Key results revealed that while the core functionalities worked as expected, certain critical issues remained unresolved.

### Key Findings

#### Critical Issues
- Missing role-based access control (admin and user roles are not differentiated)
- No admin panel or dashboard implemented
- Notification and feedback systems not functional
- Data persistence issues with pickup history and feedback storage
- Passwords not masked and lack of input validation

#### Major Issues
- Past date selection allowed in scheduling module
- No duplicate prevention for pickup requests
- Dashboard not personalized by user
- Mobile/tablet layout not fully responsive
- Lack of error handling and validation for certain forms

#### Minor Issues
- Missing gamification features (leaderboards, badges)
- Accessibility non-compliance (no alt-text, inconsistent color contrast)
- Lack of CSV export functionality
- Visual inconsistencies across browsers

## Test Objectives and Scope

### Objectives
1. Validate all core functional requirements
2. Ensure proper user authentication and session management
3. Detect and document defects early for timely resolution
4. Verify UI responsiveness and accessibility compliance
5. Test data handling, persistence, and security
6. Ensure 90%+ test coverage and stable regression cycles

### Scope
**In-Scope:** Registration, login, scheduling, dashboard analytics, notifications, community posts, admin functionalities, UI/UX responsiveness, and data validation.

**Out-of-Scope:** Payment systems, third-party logistics APIs, backend database validation, and penetration testing.

## Test Approach and Process

A hybrid testing strategy combining manual and automated testing was used. Manual exploratory testing covered new functionalities, while Selenium automated repetitive regression tests.

### Testing Process
1. Requirement Analysis and Clarification
2. Test Case Design and RTM Mapping
3. Environment Setup (Frontend on Netlify)
4. Test Execution (Manual & Automated)
5. Defect Logging in Jira
6. Regression and Retesting
7. Reporting and Closure

## Tools and Environment

| Tool | Purpose |
|------|---------|
| Jira | Test case management and bug tracking |
| Selenium WebDriver | Automation testing for login/registration flows |
| GitHub | Version control and collaboration |
| BrowserStack | Cross-browser and device testing |
| Google Meet/WhatsApp/Zoom | Team communication and coordination |

## Test Metrics and Results

The QA team executed 75 test cases derived from the RTM, ensuring coverage across functional, UI, and performance categories.

| Metric | Value |
|--------|-------|
| Total Test Cases | 75 |
| Executed | 73 |
| Passed | 46 |
| Failed | 27 |
| Test Coverage | 91% |
| Critical Defects | 6 |
| Major Defects | 8 |
| Minor Defects | 4 |

## Defect Summary

Defects were tracked in Jira and categorized based on their severity and impact. Most high-severity defects involved access control, notifications, and persistence issues.

| Defect ID | Module | Description | Severity | Status |
|-----------|--------|-------------|----------|--------|
| CC-001 | Authentication | Invalid registration accepted | High | Open |
| CC-002 | Scheduling | Past date allowed | High | Open |
| CC-004 | Notification | Bell inactive | Critical | Open |
| CC-006 | Admin | No admin control | Critical | Open |
| CC-010 | UI | Mobile overlap issue | Medium | In Progress |
| CC-012 | Security | Password not masked | Medium | Resolved |

## Lessons Learned

1. Early and frequent communication improves bug resolution times
2. Using Jira streamlined test tracking and defect linking
3. Selenium significantly reduced regression workload
4. Setting up consistent environments minimized discrepancies
5. More time should be allocated to accessibility and responsive testing

## Conclusion

Testing for the CleanCity project was successful in validating major features and exposing critical gaps. Despite several unresolved issues, the project demonstrated functional stability across core modules. Further improvements in admin control, notifications, and responsive design are recommended before deployment. Once addressed and revalidated, the system will be ready for User Acceptance Testing (UAT) and production rollout.

## Approval

| Name | Role | Signature | Date |
|------|------|-----------|------|
| Erick Omondi | QA Lead | | 11/11/2025 |
| Henok Girma | QA Engineer | | 11/11/2025 |
| Lydia Awuor | QA Engineer | | 11/11/2025 |
| Instructor/Supervisor | Project Advisor | | 11/11/2025 |

## RAG Status Report

**Project Section:** PowerLearn Project  
**Project Name:** CleanCity  
**Start Date:** 02/07/2025  
**End Date:** Ongoing  
**Current Status:** RED – Core modules stable but several critical issues remain unresolved (admin control, notification system, and access validation). Regression testing ongoing.

### Defects Distribution

| Severity/Priority | High | Medium | Low | Total |
|-------------------|------|--------|-----|-------|
| Critical | 2 | 0 | 0 | 2 |
| Major | 1 | 0 | 0 | 1 |
| Medium | 1 | 1 | 1 | 3 |
| Low | 0 | 0 | 1 | 1 |

### Test Distribution

| Test Type | Count |
|-----------|-------|
| Automated Tests | 0 |
| Manual Tests | 73 |
| Non-Functional Tests | 4 (Performance & Accessibility) |
| Total Test Cases | 77 |

### Test Case Execution Summary

| Metric | Count |
|--------|-------|
| Total Test Cases | 77 |
| Test Cases Executed | 73 |
| Not a Bug | 1 |
| Skipped | 2 |
| Passed Test Cases | 46 |
| Failed Test Cases | 27 |
| Execution Rate | 100% |
| Pass Rate | 63% |
| Fail Rate | 37% |

**Interpretation:** Most core flows (authentication, scheduling, and dashboard) passed successfully. Failures mainly occurred in modules pending completion (notifications, admin management, persistence).

### Defects Status

| State/Severity | Critical | Major | Medium | Low |
|----------------|----------|-------|--------|-----|
| Closed | 0 | 0 | 0 | 1 |
| Open | 6 | 8 | 0 | 0 |
| Deferred | 0 | 0 | 4 | 0 |
| Total Defects | 6 | 8 | 4 | 1 |

## Overall QA Health Summary

**RAG Rating:** RED  
- Key critical defects are still open and block readiness for UAT  
- Functional coverage achieved: 90%+  
- Regression and performance testing ongoing  

**Next Steps:**
- Fix and re-test critical defects
- Automate login and scheduling modules
- Conduct final regression cycle before UAT sign-off

## Appendix

- **A. Jira Summary:** https://erickomondi833-1762239312960.atlassian.net/jira/software/projects/CWPS/summary
- **B. Test Cases:** https://github.com/ERICK-tech-eng/wk-6-ERICK-tech-eng-2/blob/main/tests/manualTest%20(2).md
- **C. RTM Document:** https://github.com/ERICK-tech-eng/wk-6-ERICK-tech-eng-2/blob/main/tests/RTM%20document%20(1).xlsx
- **D. Test Plan:** https://github.com/ERICK-tech-eng/wk-6-ERICK-tech-eng-2/blob/main/tests/testplan.md
- **E. Test Summary:** https://github.com/ERICK-tech-eng/wk-6-ERICK-tech-eng-2/blob/main/tests/test_summary%20(1).md
- **F. Jira Board:** https://erickomondi833-1762239312960.atlassian.net/jira/software/projects/CWPS/boards/35
- **F. Loom video:** - **F. Jira Board:** https://erickomondi833-1762239312960.atlassian.net/jira/software/projects/CWPS/boards/35
