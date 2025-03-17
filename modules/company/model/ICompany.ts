export interface ICompany {
    id?: number;
    companyname?: string;
    logos?: string;
    agencyDashboard?: number;
    scheduleBeta?: number;
    isUs?: number;
    newDashboard?: number;
    articleCode?: number;
    sovKeywordQuota?: number;
  }
  
  // Convert JSON object to ICompany
  export const iCompanyFromJson = (json: any): ICompany => ({
    id: json.id ?? undefined,
    companyname: json.companyname ?? undefined,
    logos: json.logos ?? undefined,
    agencyDashboard: json.agency_dashboard ?? undefined,
    scheduleBeta: json.schedule_beta ?? undefined,
    isUs: json.is_us ?? undefined,
    newDashboard: json.new_dashboard ?? undefined,
    articleCode: json.article_code ?? undefined,
    sovKeywordQuota: json.sov_keyword_quota ?? undefined,
  });
  
  // Convert ICompany to JSON object
  export const iCompanyToJson = (company: ICompany): any => ({
    id: company.id ?? null,
    companyname: company.companyname ?? null,
    logos: company.logos ?? null,
    agency_dashboard: company.agencyDashboard ?? null,
    schedule_beta: company.scheduleBeta ?? null,
    is_us: company.isUs ?? null,
    new_dashboard: company.newDashboard ?? null,
    article_code: company.articleCode ?? null,
    sov_keyword_quota: company.sovKeywordQuota ?? null,
  });
  