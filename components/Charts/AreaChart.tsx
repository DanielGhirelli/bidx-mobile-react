import { useThemeKey } from "@/hooks/useThemeKey";
import { ChartData } from "@/modules/core/model/ChartData";
import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";

type AreaChartProps = {
  tooltip: { type: string; kpi: string };
  data: ChartData[];
};

export default function AreaChart({ tooltip, data }: AreaChartProps) {
  const theme = useThemeKey();
  const screenWidth = Dimensions.get("window").width;
  const yOffset = Math.min(...data.map((d) => d.value ?? 0)) * 0.95;

  return (
    <View>
      <LineChart
        areaChart
        data={data}
        height={95}
        width={screenWidth / 1.2}
        adjustToWidth
        hideDataPoints
        color="rgba(228, 198, 69, 1.0)"
        startFillColor="rgba(227, 197, 63, 1.0)"
        endFillColor="rgba(227, 197, 63, 1.0)"
        startOpacity={0.4}
        endOpacity={0.05}
        thickness={2}
        initialSpacing={0}
        endSpacing={0}
        hideAxesAndRules={true}
        hideYAxisText={true}
        yAxisOffset={yOffset}
        xAxisLabelTextStyle={{
          color: "transparent",
        }}
        pointerConfig={{
          pointerStripColor: "black",
          pointerStripWidth: 1,
          pointerLabelWidth: 140 + 11,
          pointerLabelHeight: 100,
          autoAdjustPointerLabelPosition: true,
          pointerComponent: () => (
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 7,
                backgroundColor: "rgba(227, 197, 63, 1.0)",
                borderWidth: 2,
                borderColor: "white",
              }}
            />
          ),
          pointerLabelComponent: (items: any) => {
            const point = items[0];

            return (
              <View style={{ width: 140 }}>
                <View
                  style={{
                    padding: 5,
                    borderRadius: 6,
                    backgroundColor: theme.find("background"),
                  }}
                >
                  <Text className="font-source-sans-extrabold text-text-secondary text-sm mb-1">
                    {point.tooltipTitle ?? point.label}
                  </Text>
                  <View className="flex-1 h-[0.4px] bg-gray-400 mb-1" />
                  <View className="flex-row justify-between items-center">
                    <Text className="font-source-sans text-text-secondary text-sm">
                      {tooltip.kpi}:
                    </Text>
                    <Text
                      className="font-source-sans text-text-primary text-sm"
                      style={{ color: "rgba(227, 197, 63, 1.0)" }}
                    >
                      ${point.value}.0
                    </Text>
                  </View>
                </View>
              </View>
            );
          },
        }}
      />
    </View>
  );
}
