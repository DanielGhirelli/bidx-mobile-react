import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const screenWidth = Dimensions.get("window").width;

export default function AreaChart() {
  const ptData = [
    { value: 160, date: "1 Apr 2022" },
    { value: 180, date: "2 Apr 2022" },
    { value: 190, date: "3 Apr 2022" },
    { value: 180, date: "4 Apr 2022" },
    { value: 140, date: "5 Apr 2022" },
    { value: 145, date: "6 Apr 2022" },
    { value: 160, date: "7 Apr 2022" },
    { value: 200, date: "8 Apr 2022" },
    { value: 220, date: "9 Apr 2022" },
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
        height={100}
        adjustToWidth
        hideDataPoints
        color="rgba(228, 198, 69, 1.0)"
        thickness={2}
        startFillColor="rgba(227, 197, 63, 1.0)"
        endFillColor="rgba(227, 197, 63, 1.0)"
        startOpacity={0.4}
        endOpacity={0.05}
        initialSpacing={0}
        endSpacing={0}
        hideAxesAndRules={true}
        pointerConfig={{
          pointerStripHeight: 100,
          pointerStripColor: "lightgray",
          pointerStripWidth: 2,
          pointerColor: "lightgray",
          radius: 6,
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          autoAdjustPointerLabelPosition: true,
          pointerLabelComponent: (items: { date: string; value: number }[]) => {
            return (
              <View
                style={{
                  height: 100,
                  width: 100,
                  justifyContent: "center",
                  marginTop: -90,
                  marginLeft: 0,
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 6,
                    borderRadius: 16,
                    backgroundColor: "white",
                  }}
                >
                  <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                    {items[0].date}
                  </Text>
                  <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                    {"$" + items[0].value + ".0"}
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
    </View>
  );
}
