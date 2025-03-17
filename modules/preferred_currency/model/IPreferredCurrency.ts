export interface IPreferredCurrency {
    id?: number;
    code?: string;
    exchangeRate?: number;
    symbol?: string;
    locale?: string;
  }
  
  // Convert JSON object to IPreferredCurrency
  export const iPreferredCurrencyFromJson = (json: any): IPreferredCurrency => ({
    id: json.id ?? undefined,
    code: json.code ?? undefined,
    exchangeRate: json.exchange_rate ?? undefined,
    symbol: json.symbol ?? undefined,
    locale: json.locale ?? undefined,
  });
  
  // Convert IPreferredCurrency to JSON object
  export const iPreferredCurrencyToJson = (currency: IPreferredCurrency): any => ({
    id: currency.id ?? null,
    code: currency.code ?? null,
    exchange_rate: currency.exchangeRate ?? null,
    symbol: currency.symbol ?? null,
    locale: currency.locale ?? null,
  });
  