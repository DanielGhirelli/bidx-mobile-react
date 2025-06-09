export class ChartData {
  label?: string;
  value?: number;

  // options: show data in a specific order
  order?: number;
  // options: custom label to be shown (instead xAxis)
  customLabel?: string;
  // options: custom tooltip title (instead xAxis)
  tooltipTitle?: string;

  constructor(
    label?: string,
    value?: number,
    options?: {
      order?: number;
      customLabel?: string;
      tooltipTitle?: string;
    }
  ) {
    this.label = label;
    this.value = value;
    this.order = options?.order;
    this.customLabel = options?.customLabel;
    this.tooltipTitle = options?.tooltipTitle;
  }
}
