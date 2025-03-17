import { ApiUrls } from '../../../constants/apiUrls';
import AuthenticatedHttpClient from '../../../services/AuthenticatedHttpClient';

class GoogleService {
  async authGoogleSignIn(body: Record<string, any>): Promise<Response> {
    return AuthenticatedHttpClient.post(ApiUrls.AUTH_GOOGLE, body);
  }
}

export default new GoogleService();
