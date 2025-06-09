import { IKpi, iKpiFromJson } from "./model/IKpi";
import { KpiData } from "./model/KpiData";
import { ChartData } from "../core/model/ChartData";
import KpiService from "./service/KpiService";

class Kpi {
  async loadKpiData(body: Record<string, any>): Promise<KpiData[] | null> {
    const kpiDataList: KpiData[] = [];
    const response = await KpiService.fetchKpiData(body);
    
    if (response.status === 200 || response.status === 201) {
      const json = await response.json();

      for (const item of json.data) {
        const kpi: IKpi = iKpiFromJson(item);

        const chartData: ChartData[] =
          kpi.chart?.map((element) => ({
            label: element.xAxis,
            value: element.value,
          })) || [];

        const kpiData = new KpiData(
          kpi.kPI ?? "",
          kpi.sum ?? 0,
          kpi.avg ?? 0,
          chartData
        );

        kpiDataList.push(kpiData);
      }

      return kpiDataList;
    }

    return null;
  }
}

export default new Kpi();
