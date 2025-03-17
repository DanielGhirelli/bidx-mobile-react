import * as Keychain from 'react-native-keychain';
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

  // storeToken: securely stores token using Keychain
  async storeToken(token: string): Promise<void> {
    await Keychain.setGenericPassword('authToken', token, {
      service: 'bidxAuthToken',
    });

    await this.loadUserCompany();
  }

  // loadUserCompany: fetch user company details
  async loadUserCompany(): Promise<IUserCompany> {
    const responseCompany = await UserCompanyService.getUserCompany();
    const userCompany: IUserCompany = await responseCompany.json();

    await Keychain.setGenericPassword(
      'userCompany',
      JSON.stringify(userCompany),
      { service: 'bidxUserCompany' }
    );

    return userCompany;
  }

  // hasValidToken: validate if stored token is valid
  async hasValidToken(): Promise<boolean> {
    const credentials = await Keychain.getGenericPassword({
      service: 'bidxAuthToken',
    });

    return credentials !== false;
  }

  // isUserSwitched: validate if user is switched or not
  async isUserSwitched(): Promise<boolean> {
    const credentials = await Keychain.getGenericPassword({
      service: 'bidxPrevToken',
    });

    return credentials !== false;
  }

  // signOut: remove stored token and user data
  async signOut(): Promise<void> {
    await Keychain.resetGenericPassword({ service: 'bidxAuthToken' });
    await Keychain.resetGenericPassword({ service: 'bidxPrevToken' });
    await Keychain.resetGenericPassword({ service: 'bidxUserCompany' });
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
