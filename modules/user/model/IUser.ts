export interface IUser {
    id?: number;
    companyId?: number;
    admin?: number;
    email?: string;
    userRole?: string;
    userLocationId?: number;
    enableSov?: number;
    setupDone?: number;
    productpicker?: boolean;
    amcDashboard?: number;
    newsletter?: number;
    preferredLanguage?: string;
    preferredDateFormat?: string;
  }
  
  // Convert JSON object to IUser
  export const iUserFromJson = (json: any): IUser => ({
    id: json.id ?? undefined,
    companyId: json.company_id ?? undefined,
    admin: json.admin ?? undefined,
    email: json.email ?? undefined,
    userRole: json.user_role ?? undefined,
    userLocationId: json.user_location_id ?? undefined,
    enableSov: json.enable_sov ?? undefined,
    setupDone: json.setup_done ?? undefined,
    productpicker: json.productpicker ?? undefined,
    amcDashboard: json.amc_dashboard ?? undefined,
    newsletter: json.newsletter ?? undefined,
    preferredLanguage: json.preferred_language ?? undefined,
    preferredDateFormat: json.preferred_date_format ?? undefined,
  });
  
  // Convert IUser to JSON object
  export const iUserToJson = (user: IUser): any => ({
    id: user.id ?? null,
    company_id: user.companyId ?? null,
    admin: user.admin ?? null,
    email: user.email ?? null,
    user_role: user.userRole ?? null,
    user_location_id: user.userLocationId ?? null,
    enable_sov: user.enableSov ?? null,
    setup_done: user.setupDone ?? null,
    productpicker: user.productpicker ?? null,
    amc_dashboard: user.amcDashboard ?? null,
    newsletter: user.newsletter ?? null,
    preferred_language: user.preferredLanguage ?? null,
    preferred_date_format: user.preferredDateFormat ?? null,
  });
  