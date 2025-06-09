import { ApiUrls } from "@/constants/apiUrls";
import ApiClient from "../../../services/apiClient";

class KpiService {
  async fetchKpiData(body: Record<string, string>): Promise<Response> {
    return ApiClient.post(ApiUrls.KPI_DATA, body);
  }
}

export default new KpiService();
