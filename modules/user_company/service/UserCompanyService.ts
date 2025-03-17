import { ApiUrls } from '../../../constants/apiUrls';
import AuthenticatedHttpClient from '../../../services/AuthenticatedHttpClient';

class UserCompanyService {
  async getUserCompany(): Promise<Response> {
    return AuthenticatedHttpClient.get(ApiUrls.GET_USER_COMPANY);
  }
}

export default new UserCompanyService();
