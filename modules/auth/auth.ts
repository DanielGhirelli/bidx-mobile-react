import * as SecureStore from "expo-secure-store";
import UserCompanyService from "../user_company/service/UserCompanyService";
import { IUserCompany, iUserCompanyFromJson } from "../user_company/model/IUserCompany";
import { IOAuth, iOAuthFromJson } from "./model/IOAuth";
import OAuthService from "./service/OAuthService";

class Auth {
  // validateCredentials: validate received credentials on HTTP Client
  async validateCredentials(body: Record<string, string>): Promise<boolean> {
    const response = await OAuthService.getOAuthToken(body);

    if (response.status === 200 || response.status === 201) {
      const oAuth: IOAuth = iOAuthFromJson(await response.json());
      await this.storeToken(oAuth.token);
      return true;
    }

    return false;
  }

  // storeToken: securely stores token using SecureStore
  async storeToken(token: string): Promise<void> {
    await SecureStore.setItemAsync("token", token, {
      keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });

    await this.loadUserCompany();
  }

  // loadUserCompany: fetch user company details
  async loadUserCompany(): Promise<IUserCompany> {
    const responseCompany = await UserCompanyService.getUserCompany();
    const userCompany: IUserCompany = await responseCompany.json();

    await SecureStore.setItemAsync("userCompany", JSON.stringify(userCompany), {
      keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });

    return userCompany;
  }

  // getUserCompany: retrieve stored user company data
  async getUserCompany(): Promise<IUserCompany | null> {
    const userCompanyString = await SecureStore.getItemAsync("userCompany");
    if (!userCompanyString) return null;

    const userCompany: IUserCompany = iUserCompanyFromJson(userCompanyString);
    return userCompany;
  }

  // hasValidToken: validate if stored token is valid and return token
  async hasValidToken(): Promise<string | null> {
    const token = await SecureStore.getItemAsync("token");
    return token;
  }

  // isUserSwitched: validate if user is switched and return previous token
  async isUserSwitched(): Promise<string | null> {
    const prevToken = await SecureStore.getItemAsync("prevToken");
    return prevToken;
  }

  // signOut: remove stored token and user data
  async signOut(): Promise<void> {
    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("prevToken");
    await SecureStore.deleteItemAsync("userCompany");
  }
}

export default new Auth();
