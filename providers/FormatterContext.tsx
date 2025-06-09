import React, { createContext, useContext, useEffect, useState } from "react";
import { parse, format as formatDateFns } from "date-fns";
import { enUS, de } from "date-fns/locale";
import Auth from "@/modules/auth/auth";

type CurrencyConfig = {
  locale: string;
  code: string;
};

type FormatterContextType = {
  prefDate: string | null;
  prefCurrency: CurrencyConfig | null;
  formatCurrency: (
    amount: number,
    options?: {
      minDigits?: number;
      maxDigits?: number;
    }
  ) => string;
  formatNumber: (
    amount: number,
    options?: {
      minDigits?: number;
      maxDigits?: number;
    }
  ) => string;
  formatDate: (
    date: string,
    datePattern: string,
    options?: {
      pattern?: { en: string; de: string };
      localeOverride?: "en" | "de";
    }
  ) => string;
};

const FormatterContext = createContext<FormatterContextType | null>(null);

export const FormatterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [prefDate, setPrefDate] = useState<string | null>(null);
  const [prefCurrency, setPrefCurrency] = useState<CurrencyConfig | null>(null);

  useEffect(() => {
    const loadCurrency = async () => {
      const userCompany = await Auth.getUserCompany();
      if (userCompany?.preferredCurrency) {
        setPrefCurrency({
          locale: userCompany.preferredCurrency.locale ?? "en",
          code: userCompany.preferredCurrency.code ?? "USD",
        });
      }

      if (userCompany?.user?.preferredDateFormat) {
        setPrefDate(userCompany?.user?.preferredDateFormat);
      }
    };

    loadCurrency();
  }, []);

  const formatCurrency = (
    amount: number,
    options?: {
      minDigits?: number;
      maxDigits?: number;
    }
  ): string => {
    if (!prefCurrency) return amount.toString();

    return new Intl.NumberFormat(prefCurrency.locale, {
      style: "currency",
      currency: prefCurrency.code,
      currencyDisplay: "symbol",
      minimumFractionDigits: options?.minDigits ?? 2,
      maximumFractionDigits: options?.maxDigits ?? 2,
    }).format(amount);
  };

  const formatNumber = (
    amount: number,
    options?: {
      minDigits?: number;
      maxDigits?: number;
    }
  ): string => {
    const locale = prefCurrency?.locale ?? "en";
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: options?.minDigits ?? 0,
      maximumFractionDigits: options?.maxDigits ?? 2,
    }).format(amount);
  };

  const formatDate = (
    dateString: string,
    datePattern: string,
    options?: {
      pattern?: {
        en: string;
        de: string;
      };
      localeOverride?: "en" | "de";
    }
  ): string => {
    if (!dateString || !datePattern) return dateString;

    const date = parse(dateString, datePattern, new Date());

    const isDE = (prefDate === "DD.MM.YYYY");
    const locale = isDE ? de : enUS;

    const pattern = options?.pattern
      ? isDE
        ? options.pattern.de
        : options.pattern.en
      : isDE
        ? "dd.MM.yyyy"
        : "MM/dd/yyyy";

    return formatDateFns(date, pattern, { locale });
  };

  return (
    <FormatterContext.Provider
      value={{
        prefCurrency,
        prefDate,
        formatCurrency,
        formatNumber,
        formatDate,
      }}
    >
      {children}
    </FormatterContext.Provider>
  );
};

export const useFormatter = () => {
  const context = useContext(FormatterContext);
  if (!context) {
    throw new Error("useFormatter must be used within a FormatterProvider");
  }
  return context;
};
