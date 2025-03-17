import { ApiUrls } from '../../../constants/apiUrls';
import ApiClient from '../../../services/apiClient';

class UserCompanyService {
  async getUserCompany(): Promise<Response> {
    return ApiClient.get(ApiUrls.GET_USER_COMPANY);
  }
}

export default new UserCompanyService();
