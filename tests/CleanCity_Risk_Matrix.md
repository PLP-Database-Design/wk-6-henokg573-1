# Risk Matrix -- CleanCity Project

### Prepared By

-   **Erick Omondi**
-   **Henok Girma**
-   **Lydia Awuor**

------------------------------------------------------------------------

## Risk Matrix

  --------------------------------------------------------------------------------------
  Risk ID      Risk Description Likelihood   Impact   Risk Level    Mitigation / Action
                                                      (RAG)         Plan
  ------------ ---------------- ------------ -------- ------------- --------------------
  CC-RSK-001   Failure of Admin High         High     High          Prioritize admin
               Dashboard                                            module development;
               functionality                                        retest after
               due to                                               integration; assign
               incomplete                                           senior QA for
               implementation                                       validation.

  CC-RSK-002   Notification     High         High     High          Create mock
               bell not                                             notification service
               functional (no                                       for interim testing;
               user alerts or                                       escalate to dev team
               task updates)                                        for urgent fix.

  CC-RSK-003   Inconsistent     Medium       High     Medium        Use shared
               environment                                          environment configs
               setup across                                         in GitHub;
               team members                                         standardize test
                                                                    data and browsers.

  CC-RSK-004   Data not         Medium       High     Medium        Validate data
               persisting due                                       structure and
               to localStorage                                      implement backup
               overwrites                                           persistence for user
                                                                    data.

  CC-RSK-005   Responsive UI    High         Medium   Medium        Conduct additional
               issues on mobile                                     responsive testing
               and tablet views                                     via BrowserStack;
                                                                    log all display
                                                                    inconsistencies.

  CC-RSK-006   Form validation  Medium       Medium   Moderate      Strengthen front-end
               bypasses                                             validation; perform
               allowing invalid                                     negative testing on
               entries                                              all forms.

  CC-RSK-007   Limited          Medium       Medium   Moderate      Expand Selenium
               automation                                           automation to
               coverage (only                                       include scheduling
               login &                                              and dashboard
               registration)                                        modules.

  CC-RSK-008   Delayed bug      Medium       Medium   Moderate      Implement fixed
               resolution due                                       daily syncs; assign
               to team                                              QA lead for triage
               coordination                                         tracking in Jira.
               gaps                                                 

  CC-RSK-009   Accessibility    Low          Medium   Low           Conduct
               non-compliance                                       accessibility audits
               (contrast,                                           with Lighthouse and
               alt-text, ARIA                                       fix per WCAG 2.1 AA.
               labels)                                              

  CC-RSK-010   Time overrun     Medium       Medium   Moderate      Adjust sprint
               risk due to                                          timelines;
               retesting cycles                                     parallelize
               and tool setup                                       regression testing
               delays                                               with defect fixing.
  --------------------------------------------------------------------------------------
