import ApiClient from '../../../services/apiClient';

class OAuthService {
  async getOAuthToken(body: Record<string, string>): Promise<Response> {
    return ApiClient.getOAuthToken(body);
  }
}

export default new OAuthService();
