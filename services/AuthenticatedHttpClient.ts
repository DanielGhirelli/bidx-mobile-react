import * as Keychain from 'react-native-keychain';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL ?? '';
const AUTH_URL = process.env.EXPO_PUBLIC_AUTH_URL ?? '';

class AuthenticatedHttpClient {
  // Get Token from Secure Storage
  async getToken(): Promise<string | null> {
    const credentials = await Keychain.getGenericPassword();
    return credentials ? credentials.password : null;
  }

  // GET Request with Authorization
  async get(url: string) {
    const token = await this.getToken();
    const fullUrl = `${API_BASE_URL}${url}`;

    try {
      const response = await fetch(fullUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return await response.json();
    } catch (error) {
      console.error('Error in GET request', error);
      throw error;
    }
  }

  // POST Request with Authorization
  async post(url: string, body: Record<string, any>) {
    const token = await this.getToken();
    const fullUrl = `${API_BASE_URL}${url}`;

    try {
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      return await response.json();
    } catch (error) {
      console.error('Error in POST request', error);
      throw error;
    }
  }

  // OAuth Token Method (Non-Authenticated)
  async getOAuthToken(body: Record<string, string>) {
    try {
      const response = await fetch(AUTH_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      return await response.json();
    } catch (error) {
      console.error('Error in OAuth request', error);
      throw error;
    }
  }
}

export default new AuthenticatedHttpClient();
