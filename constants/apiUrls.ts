export const ApiUrls = {
    KPI_DATA: '/mobile/kpi',
    REFRESH_AMAZON_DATA: '/mobile/refreshAmazonData',
  
    AUTH_GOOGLE: '/mobile/auth/google',
  
    GET_USER_COMPANY: '/mobile/user/company',
    GET_USER_SWITCHABLE_GROUPS: '/mobile/user/switchableGroups',
    GET_USER_SWITCH: '/mobile/user/switch',
    USER_REGISTER: '/mobile/user/register',
    USER_NOTIFICATION: '/mobile/user/notifications',
    USER_REGISTER_DEVICE: '/mobile/user/registerDevice',
  
    GET_COMPANY_SWITCHABLE_GROUPS: '/mobile/company/switchableGroups',
    GET_COMPANY_RULE_LOGS: '/mobile/company/ruleLog',
    GET_COMPANY_RULE_LOGS_CAMPAIGN: '/mobile/company/ruleLog/campaign',
    GET_COMPANY_RULE_LOGS_DETAILED: '/mobile/company/ruleLog/detailed',
  
    GET_BILLING: '/mobile/billing',
  } as const;
  