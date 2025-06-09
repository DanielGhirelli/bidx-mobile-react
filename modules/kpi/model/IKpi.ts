export interface IChart {
  xAxis?: string;
  value?: number;
}

export const iChartFromJson = (json: any): IChart => {
  return {
    xAxis: json.xAxis,
    value: json.value,
  };
};

export interface IKpi {
  kPI?: string;
  unity?: string;
  unitySymbol?: string;
  numType?: string;
  aggr?: string;
  sum?: number;
  avg?: number;
  source?: string;
  chart?: IChart[];
}

export const iKpiFromJson = (json: any): IKpi => {
  return {
    kPI: json.KPI,
    unity: json.unity,
    unitySymbol: json.unity_symbol,
    numType: json.num_type,
    aggr: json.aggr,
    sum: json.sum,
    avg: json.avg,
    source: json.source,
    chart: Array.isArray(json.data)
      ? json.data.map((item: any) => iChartFromJson(item))
      : undefined,
  };
};
