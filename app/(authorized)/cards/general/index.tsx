import React from "react";
import { View, Text } from "react-native";
import AreaChart from "@/components/Charts/AreaChart";
import i18n from "@/config/i18n";

export default function GeneralCards() {
  const ptData = [
    { value: 160, date: "1 Apr 2022" },
    { value: 180, date: "2 Apr 2022" },
    { value: 190, date: "3 Apr 2022" },
    { value: 180, date: "4 Apr 2022" },
    { value: 140, date: "5 Apr 2022" },
    { value: 145, date: "6 Apr 2022" },
    { value: 0, date: "7 Apr 2022" },
    { value: 0, date: "8 Apr 2022" },
    { value: 0, date: "9 Apr 2022" },
    { value: 280, date: "11 Apr 2022" },
    { value: 260, date: "12 Apr 2022" },
    { value: 340, date: "13 Apr 2022" },
    { value: 385, date: "14 Apr 2022" },
    { value: 280, date: "15 Apr 2022" },
    { value: 390, date: "16 Apr 2022" },
    { value: 370, date: "17 Apr 2022" },
    { value: 285, date: "18 Apr 2022" },
    { value: 295, date: "19 Apr 2022" },
    { value: 280, date: "21 Apr 2022" },
    { value: 295, date: "22 Apr 2022" },
    { value: 260, date: "23 Apr 2022" },
    { value: 255, date: "24 Apr 2022" },
    { value: 190, date: "25 Apr 2022" },
    { value: 220, date: "26 Apr 2022" },
    { value: 205, date: "27 Apr 2022" },
    { value: 230, date: "28 Apr 2022" },
    { value: 210, date: "29 Apr 2022" },
    { value: 240, date: "1 May 2022" },
    { value: 250, date: "2 May 2022" },
    { value: 280, date: "3 May 2022" },
  ];

  return (
    <View>
      <View className="bg-card-background mt-10 rounded-xl">
        <Text className="font-source-sans-semibold text-text-primary text-lg pt-5 pl-6">
          {i18n.t("home.cards.general.cost.title")}
        </Text>
        <Text className="font-source-sans-semibold text-text-secondary text-2xl pt-2 pl-6 mb-1">
          9.499,93€
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
