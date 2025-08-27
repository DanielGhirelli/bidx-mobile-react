import { ApiUrls } from "@/constants/apiUrls";
import ApiClient from "../../../services/apiClient";

class UserService {
  async registerDevice(body: Record<string, string>): Promise<Response> {
    return ApiClient.post(ApiUrls.USER_REGISTER_DEVICE, body);
  }
}

export default new UserService();
