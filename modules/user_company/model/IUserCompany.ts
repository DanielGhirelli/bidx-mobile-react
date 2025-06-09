import { ICompany, iCompanyFromJson } from "../../company/model/ICompany";
import { IUser, iUserFromJson } from "../../user/model/IUser";
import {
  IPreferredCurrency,
  iPreferredCurrencyFromJson,
} from "../../preferred_currency/model/IPreferredCurrency";

export interface IUserCompany {
  company?: ICompany;
  user?: IUser;
  preferredCurrency?: IPreferredCurrency;
}

// Convert JSON string to IUserCompany object
export const iUserCompanyFromJson = (jsonString: string): IUserCompany => {
  const jsonData = JSON.parse(jsonString);

  return {
    company: jsonData.company ? iCompanyFromJson(jsonData.company) : undefined,
    user: jsonData.user ? iUserFromJson(jsonData.user) : undefined,
    preferredCurrency: jsonData.preferred_currency
      ? iPreferredCurrencyFromJson(jsonData.preferred_currency)
      : undefined,
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
