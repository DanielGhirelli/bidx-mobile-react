import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AreaChart from "@/components/Charts/AreaChart";
import i18n from "@/config/i18n";
import { IKpi } from "@/modules/kpi/model/IKpi";
import Kpi from "../../../../modules/kpi/kpi";

export default function GeneralCards() {
  const [kpiData, setKpiData] = useState<IKpi | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const body = {
        metric: "general",
        dateRange: "last30days",
      };
      const result = await Kpi.loadKpiData(body);
    };

    fetchData();
  }, []);

  const ptData = [
    { value: 160, date: "1 Apr 2022" },
    { value: 180, date: "2 Apr 2022" },
  ];

  return (
    <View>
      <View className="bg-card-background mt-10 rounded-xl">
        <Text className="font-source-sans-semibold text-text-primary text-lg pt-5 pl-6">
          {i18n.t("home.cards.general.cost.title")}
        </Text>
        <Text className="font-source-sans-semibold text-text-secondary text-2xl pt-2 pl-6 mb-1">
          9.499,93
        </Text>
        <AreaChart
          data={ptData}
          tooltip={{
            type: "currency",
            kpi: i18n.t("home.cards.general.cost.tooltip"),
          }}
        />
      </View>

      <View className="bg-card-background mt-5 rounded-xl">
        <Text className="font-source-sans-semibold text-text-primary text-lg pt-5 pl-6">
          {i18n.t("home.cards.general.impressions.title")}
        </Text>
        <Text className="font-source-sans-semibold text-text-secondary text-2xl pt-2 pl-6 mb-1">
          9.499,93€
        </Text>
        <AreaChart
          data={ptData}
          tooltip={{
            type: "number",
            kpi: i18n.t("home.cards.general.impressions.tooltip"),
          }}
        />
      </View>

      <View className="bg-card-background mt-5 rounded-xl">
        <Text className="font-source-sans-semibold text-text-primary text-lg pt-5 pl-6">
          {i18n.t("home.cards.general.clicks.title")}
        </Text>
        <Text className="font-source-sans-semibold text-text-secondary text-2xl pt-2 pl-6 mb-1">
          9.499,93€
        </Text>
        <AreaChart
          data={ptData}
          tooltip={{
            type: "number",
            kpi: i18n.t("home.cards.general.clicks.tooltip"),
          }}
        />
      </View>
    </View>
  );
}
