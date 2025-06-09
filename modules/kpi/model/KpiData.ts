import { ChartData } from "../../core/model/ChartData";

export class KpiData {
  private _kPI: string;
  private _sum: number;
  private _avg: number;
  private _chartData: ChartData[];

  constructor(kPI: string, sum: number, avg: number, chartData: ChartData[]) {
    this._kPI = kPI;
    this._sum = sum;
    this._avg = avg;
    this._chartData = chartData;
  }

  get kPI(): string {
    return this._kPI;
  }

  set kPI(value: string) {
    this._kPI = value;
  }

  get sum(): number {
    return this._sum;
  }

  set sum(value: number) {
    this._sum = value;
  }

  get avg(): number {
    return this._avg;
  }

  set avg(value: number) {
    this._avg = value;
  }

  get chartData(): ChartData[] {
    return this._chartData;
  }

  set chartData(value: ChartData[]) {
    this._chartData = value;
  }
}
