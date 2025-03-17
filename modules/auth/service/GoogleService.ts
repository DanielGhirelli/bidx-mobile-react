import { ApiUrls } from '../../../constants/apiUrls';
import ApiClient from '../../../services/apiClient';

class GoogleService {
  async authGoogleSignIn(body: Record<string, any>): Promise<Response> {
    return ApiClient.post(ApiUrls.AUTH_GOOGLE, body);
  }
}

export default new GoogleService();
