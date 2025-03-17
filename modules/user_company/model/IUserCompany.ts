import { ICompany } from '../../company/model/ICompany';
import { IUser } from '../../user/model/IUser';
import { IPreferredCurrency } from '../../preferred_currency/model/IPreferredCurrency';

export interface IUserCompany {
  company?: ICompany;
  user?: IUser;
  preferredCurrency?: IPreferredCurrency;
}

// Convert JSON string to IUserCompany object
export const iUserCompanyFromJson = (jsonString: string): IUserCompany => {
  const jsonData = JSON.parse(jsonString);

  return {
    company: jsonData.company ? jsonData.company as ICompany : undefined,
    user: jsonData.user ? jsonData.user as IUser : undefined,
    preferredCurrency: jsonData.preferred_currency ? jsonData.preferred_currency as IPreferredCurrency : undefined,
  };
};

// Convert IUserCompany object to JSON string
export const iUserCompanyToJson = (data: IUserCompany): string => {
  return JSON.stringify({
    company: data.company || null,
    user: data.user || null,
    preferred_currency: data.preferredCurrency || null,
  });
};
