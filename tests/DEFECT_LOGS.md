# CleanCity Project -- Defect Log Report

### Prepared By

-   **Erick Omondi**\
-   **Lydia Awuor**\
-   **Henok Girma**

------------------------------------------------------------------------

## Defect Log Table

  ----------------------------------------------------------------------------------------------------------------
  Defect ID    Module / Feature  Description of    Severity   Status     Detected   Date Logged  Remarks / Fix
                                 Defect                                  By                      Notes
  ------------ ----------------- ----------------- ---------- ---------- ---------- ------------ -----------------
  CC-DEF-001   Admin Dashboard   Admin panel not   Critical   Open       Lydia      11/14/2025   Core backend
                                 implemented;                            Awuor                   incomplete;
                                 cannot view,                                                    blocker for admin
                                 filter, or update                                               module.
                                 pickups.                                                        

  CC-DEF-002   Notification      Notifications not Critical   Open       Henok      11/14/2025   WebSocket not
               System            appearing; no                           Girma                   configured;
                                 bell icon update.                                               requires async
                                                                                                 handler.

  CC-DEF-003   Pickup Scheduling Allows scheduling High       Deferred   Henok      11/14/2025   Validation
                                 past dates.                             Girma                   missing in date
                                                                                                 picker.

  CC-DEF-004   Role-based Access Non-admins can    High       In         Henok      11/14/2025   Role check
                                 access /admin                Progress   Girma                   missing in
                                 routes.                                                         middleware.

  CC-DEF-005   Login Validation  Accepts any       High       Closed     Erick      11/15/2025   Fixed --- added
                                 password if email                       Omondi                  regex and
                                 is valid.                                                       password length
                                                                                                 validation.

  CC-DEF-006   Registration      Name field        Medium     Open       Henok      11/15/2025   Input pattern
               Validation        accepts numbers                         Girma                   validation
                                 and symbols.                                                    missing.

  CC-DEF-007   Data Persistence  Data clears after Medium     Deferred   Erick      11/15/2025   LocalStorage keys
                                 logout.                                 Omondi                  not persistent;
                                                                                                 fix pending.

  CC-DEF-008   Feedback          Feedback not      Medium     In         Henok      11/15/2025   Request ID join
               Submission        linked with                  Progress   Girma                   missing.
                                 request ID.                                                     

  CC-DEF-009   Pickup History    No history        High       Open       Henok      11/15/2025   Retrieval
                                 displayed after                         Girma                   function not
                                 multiple                                                        bound to
                                 requests.                                                       localStorage.

  CC-DEF-010   Charts Display    Analytics charts  Medium     Closed     Erick      11/15/2025   Added missing
                                 not loading.                            Omondi                  Chart.js import.

  CC-DEF-011   UI Responsiveness Navbar overlaps   Medium     Deferred   Lydia      11/15/2025   CSS breakpoint
                                 text on tablet.                         Awuor                   missing.

  CC-DEF-012   UI Responsiveness Cards overflow on Major      Deferred   Lydia      11/15/2025   To be fixed in
                                 mobile devices.                         Awuor                   next sprint.

  CC-DEF-013   Duplicate         Allows same       High       Open       Henok      11/15/2025   No duplicate
               Scheduling        date/time twice.                        Girma                   prevention check.

  CC-DEF-014   CO₂ Metrics       CO₂ savings not   Low        Deferred   Erick      11/15/2025   Module under
                                 calculated.                             Omondi                  construction.

  CC-DEF-015   Leaderboard       No leaderboard    Low        Deferred   Lydia      11/15/2025   Placeholder only;
                                 shown.                                  Awuor                   logic missing.

  CC-DEF-016   Badges            No achievements   Low        Deferred   Erick      11/16/2025   Feature not
                                 displayed.                              Omondi                  implemented yet.

  CC-DEF-017   Quiz Module       Quiz score not    Medium     Closed     Henok      11/16/2025   Fixed with
                                 persisting after                        Girma                   localStorage
                                 refresh.                                                        binding.

  CC-DEF-018   Dashboard         All users share   High       Open       Lydia      11/16/2025   Personalization
               Personalization   same dashboard                          Awuor                   variable missing.
                                 view.                                                           

  CC-DEF-019   Form Validation   Feedback and      Medium     In         Henok      11/16/2025   Needs required
                                 report issue                 Progress   Girma                   field validation.
                                 forms accept                                                    
                                 blank text.                                                     

  CC-DEF-020   Accessibility     Missing alt text  Low        Closed     Lydia      11/16/2025   Added descriptive
                                 for images.                             Awuor                   tags.

  CC-DEF-021   Performance       Homepage loads    Medium     Deferred   Erick      11/16/2025   Optimization
                                 slow on mobile                          Omondi                  pending.
                                 data.                                                           

  CC-DEF-022   Logout            Logout redirects  Medium     Closed     Henok      11/16/2025   Fixed with new
               Redirection       to homepage                             Girma                   route handler.
                                 instead of login.                                               

  CC-DEF-023   Scheduling Slot   No available      Medium     Open       Henok      11/16/2025   Backend endpoint
               Display           slots shown for                         Girma                   not responding.
                                 pickups.                                                        

  CC-DEF-024   CSV Export        Export feature    Medium     Deferred   Erick      11/16/2025   Function not
                                 missing entirely.                       Omondi                  implemented.

  CC-DEF-025   Announcement      Admin             Critical   Open       Lydia      11/16/2025   Admin role
                                 announcement page                       Awuor                   controls missing.
                                 non-functional.                                                 
  ----------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## Remarks

-   Multiple **critical defects** remain unresolved (Admin Dashboard,
    Notification System, Announcement Page).\
-   Deferred issues will be reviewed in the next sprint.\
-   All closed defects have been verified during the latest regression
    testing cycle.
