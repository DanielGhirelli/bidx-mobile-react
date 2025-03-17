import AuthenticatedHttpClient from '../../../services/AuthenticatedHttpClient';

class OAuthService {
  async getOAuthToken(body: Record<string, string>): Promise<Response> {
    return AuthenticatedHttpClient.getOAuthToken(body);
  }
}

export default new OAuthService();
