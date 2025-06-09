import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { format, subDays } from "date-fns";

import i18n from "@/config/i18n";
import { KpiData } from "@/modules/kpi/model/KpiData";
import AreaChart from "@/components/Charts/AreaChart";
import Kpi from "../../../../modules/kpi/kpi";

export default function ClicksCard() {
  const startDate = format(subDays(new Date(), 30), "yyyyMMdd");
  const endDate = format(subDays(new Date(), 1), "yyyyMMdd");
  const [daily, setDailyData] = useState<KpiData | null>(null);
  const [light, setLightData] = useState<KpiData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(null);
      setLightData(null);

      const baseBody = {
        groupBy: "REPORT_DATE",
        kpi: ["KPI_CLICKS"],
        startDate,
        endDate,
      };

      const dailyResult = await Kpi.loadKpiData({
        ...baseBody,
        timeUnit: "_DAILY_",
      });
      setDailyData(dailyResult?.[0] ?? null);

      const lightResult = await Kpi.loadKpiData({
        ...baseBody,
        timeUnit: "_LIGHT_",
      });
      setLightData(lightResult?.[0] ?? null);
    };

    fetchData();
  }, []);

  return (
    <View>
      <View className="bg-card-background mt-10 rounded-xl p-3">
        <View className="p-3">
          <Text className="font-source-sans-semibold text-text-primary text-lg">
            {i18n.t("home.cards.general.cost.title")}
          </Text>

          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            visible={daily !== null}
            style={{
              height: 30,
              marginTop: 8,
              marginBottom: 8,
              borderRadius: 4,
            }}
          >
            <Text className="font-source-sans-semibold text-text-secondary text-2xl">
              {daily?.sum ?? "0"}
            </Text>
          </ShimmerPlaceholder>
        </View>

        {daily !== null ? (
          <AreaChart
            data={daily.chartData}
            tooltip={{
              type: "currency",
              kpi: i18n.t("home.cards.general.cost.tooltip"),
            }}
          />
        ) : (
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={{ height: 100, borderRadius: 8, width: "100%" }}
          />
        )}
      </View>
    </View>
  );
}
