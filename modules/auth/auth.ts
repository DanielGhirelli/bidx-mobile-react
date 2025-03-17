import * as SecureStore from 'expo-secure-store';
import UserCompanyService from '../user_company/service/UserCompanyService';
import { IUserCompany } from '../user_company/model/IUserCompany';
import { IOAuth, iOAuthFromJson } from "./model/IOAuth";
import OAuthService from './service/OAuthService';
import GoogleService from './service/GoogleService';

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
    await SecureStore.setItemAsync('token', token, {
      keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });

    await this.loadUserCompany();
  }

  // loadUserCompany: fetch user company details
  async loadUserCompany(): Promise<IUserCompany> {
    const responseCompany = await UserCompanyService.getUserCompany();
    const userCompany: IUserCompany = await responseCompany.json();

    await SecureStore.setItemAsync(
      'userCompany',
      JSON.stringify(userCompany),
      { keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY }
    );

    return userCompany;
  }

  // hasValidToken: validate if stored token is valid
  async hasValidToken(): Promise<boolean> {
    const token = await SecureStore.getItemAsync('token');
    return !!token;
  }

  // isUserSwitched: validate if user is switched or not
  async isUserSwitched(): Promise<boolean> {
    const prevToken = await SecureStore.getItemAsync('prevToken');
    return !!prevToken;
  }

  // signOut: remove stored token and user data
  async signOut(): Promise<void> {
    await SecureStore.deleteItemAsync('token');
    await SecureStore.deleteItemAsync('prevToken');
    await SecureStore.deleteItemAsync('userCompany');
  }

  // // signInWithGoogle: handle sign-in with Google
  // async signInWithGoogle(): Promise<boolean> {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const googleUser = await GoogleSignin.signIn();

  //     if (googleUser) {
  //       const user = googleUser.data?.user;

  //       // Submit data to API
  //       const response = await GoogleService.authGoogleSignIn({
  //         google_id: user?.id,
  //         user_data: {
  //           email: user?.email,
  //           given_name: user?.givenName || '',
  //           family_name: user?.familyName || '',
  //         },
  //       });

  //       if (response.status === 200 || response.status === 201) {
  //         const oAuth: IOAuth = iOAuthFromJson(await response.json());
  //         await this.storeToken(oAuth.token);
  //         return true;
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Google Sign-In Error:', error);
  //   }

  //   return false;
  // }
}

export default new Auth();
