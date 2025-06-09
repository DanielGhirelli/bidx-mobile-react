import { IKpi, iKpiFromJson } from "./model/IKpi";
import KpiService from "./service/KpiService";

class Kpi {
  async loadKpiData(body: Record<string, string>): Promise<boolean> {
    const response = await KpiService.fetchKpiData(body);

    if (response.status === 200 || response.status === 201) {
      const kpi: IKpi = iKpiFromJson(await response.json());

      return false;
    }

    return false;
  }
}

export default new Kpi();
