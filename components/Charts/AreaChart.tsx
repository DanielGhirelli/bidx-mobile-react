import { useThemeKey } from "@/hooks/useThemeKey";
import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";

export default function AreaChart() {
  const theme = useThemeKey();
  const screenWidth = Dimensions.get("window").width;

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
      <LineChart
        areaChart
        data={ptData}
        height={130}
        width={screenWidth / 1.3}
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
          pointerLabelComponent: (
            items: { date: string; value: number }[],
            _secondaryItems: any
          ) => {
            return (
              <View
                style={{
                  width: 140,
                }}
              >
                <View
                  style={{
                    padding: 5,
                    borderRadius: 6,
                    backgroundColor: theme.find("background"),
                  }}
                >
                  <Text className="font-source-sans-extrabold text-text-secondary text-sm mb-1">
                    {items[0].date}
                  </Text>
                  <View className="flex-1 h-[0.4px] bg-gray-400 mb-1" />
                  <View className="flex-row justify-between items-center">
                    <Text className="font-source-sans text-text-secondary text-sm">
                      Cost:
                    </Text>
                    <Text
                      className="font-source-sans text-text-primary text-sm"
                      style={{ color: "rgba(227, 197, 63, 1.0)" }}
                    >
                      ${items[0].value}.0
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
