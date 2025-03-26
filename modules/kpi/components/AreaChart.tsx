import React, { useMemo } from "react";
import {
  Text as SKText,
  useFont,
  vec,
  RoundedRect,
  LinearGradient,
  Circle,
} from "@shopify/react-native-skia";
import {
  useDerivedValue,
  useSharedValue,
  useAnimatedReaction,
  type SharedValue,
} from "react-native-reanimated";
import { Area, CartesianChart, Line, useChartPressState } from "victory-native";
import { View } from "react-native";

const TOOLTIP_WIDTH = 140;
const TOOLTIP_HEIGHT = 60;
const TOOLTIP_PADDING = 10;

export default function AreaChart() {
  const chartData = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        day: i,
        highTmp: 40 + 30 * Math.random(),
        date: `2023-03-${(i + 1).toString().padStart(2, "0")}`,
      })),
    []
  );

  const font = useFont(
    require("../../../assets/fonts/SourceSans3-Bold.ttf"),
    18
  );

  const { state, isActive } = useChartPressState({ x: 0, y: { highTmp: 0 } });

  const value = useSharedValue("");
  const dateLabel = useSharedValue("");

  useAnimatedReaction(
    () => {
      const xVal = Math.round(state.x.position.value);
      return chartData.find((item) => item.day === xVal);
    },
    (selectedDatum) => {
      if (selectedDatum) {
        value.value = selectedDatum.highTmp.toFixed(2) + " €";
        dateLabel.value = `Date: ${selectedDatum.date}`;
      } else {
        value.value = "";
        dateLabel.value = "";
      }
    },
    [chartData]
  );

  if (!font) return null; // Optional: avoid rendering until font loads

  return (
    <View style={{ flex: 1 }}>
      <CartesianChart
        data={chartData}
        xKey="day"
        yKeys={["highTmp"]}
        domainPadding={{ top: 30 }}
        chartPressState={state}
      >
        {({ points, chartBounds }) => {
          const tooltip = isActive && (
            <>
              <Circle
                cx={state.x.position}
                cy={state.y.highTmp.position}
                r={6}
                color="white"
              />
              <TooltipBox
                x={state.x.position}
                y={state.y.highTmp.position}
                value={value}
                dateLabel={dateLabel}
                font={font}
                chartWidth={chartBounds.right}
              />
            </>
          );

          return (
            <>
              <Line
                points={points.highTmp}
                color="lightgreen"
                strokeWidth={3}
                animate={{ type: "timing", duration: 500 }}
              />
              <Area
                points={points.highTmp}
                y0={chartBounds.bottom}
                animate={{ type: "timing", duration: 500 }}
              >
                <LinearGradient
                  start={vec(chartBounds.bottom, 200)}
                  end={vec(chartBounds.bottom, chartBounds.bottom)}
                  colors={["green", "#90ee9050"]}
                />
              </Area>
              {tooltip}
            </>
          );
        }}
      </CartesianChart>
    </View>
  );
}

function TooltipBox({
  x,
  y,
  value,
  dateLabel,
  font,
  chartWidth,
}: {
  x: SharedValue<number>;
  y: SharedValue<number>;
  value: SharedValue<string>;
  dateLabel: SharedValue<string>;
  font: ReturnType<typeof useFont>;
  chartWidth: number;
}) {
  const adjustedX = useDerivedValue(() => {
    const rawX = x.value - TOOLTIP_WIDTH / 2;
    const maxX = chartWidth - TOOLTIP_WIDTH - 4;
    return Math.max(4, Math.min(rawX, maxX));
  }, [x]);

  const rectY = useDerivedValue(() => {
    return Math.max(4, y.value - TOOLTIP_HEIGHT - 20);
  }, [y]);

  const textX = useDerivedValue(
    () => adjustedX.value + TOOLTIP_PADDING,
    [adjustedX]
  );
  const dateY = useDerivedValue(() => rectY.value + 20, [rectY]);
  const valueY = useDerivedValue(() => rectY.value + 40, [rectY]);

  const dateText = useDerivedValue(
    () => dateLabel.value || "Loading...",
    [dateLabel]
  );
  const valueText = useDerivedValue(
    () => `Cost: ${value.value || "--"}`,
    [value]
  );

  return (
    <>
      <RoundedRect
        x={adjustedX}
        y={rectY}
        width={TOOLTIP_WIDTH}
        height={TOOLTIP_HEIGHT}
        r={10}
        color="black"
        opacity={0.8}
      />
      <SKText x={textX} y={dateY} text={dateText} font={font} color="white" />
      <SKText x={textX} y={valueY} text={valueText} font={font} color="white" />
    </>
  );
}
