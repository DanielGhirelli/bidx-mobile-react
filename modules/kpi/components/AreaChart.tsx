import React, { useState } from "react";
import {
  Canvas,
  Text as SKText,
  useFont,
  vec,
  RoundedRect,
  LinearGradient,
  Circle,
} from "@shopify/react-native-skia";
import { useDerivedValue, type SharedValue } from "react-native-reanimated";
import { Area, CartesianChart, Line, useChartPressState } from "victory-native";
import { View } from "react-native";

export default function AreaChartExample() {
  const DATA = Array.from({ length: 31 }, (_, i) => ({
    day: i,
    highTmp: 40 + 30 * Math.random(),
    date: `2025-03-${(i + 1).toString().padStart(2, "0")}`,
  }));

  const chartFont = useFont(
    require("../../../assets/fonts/SourceSans3-Bold.ttf"),
    30
  );

  const smallFont = useFont(
    require("../../../assets/fonts/SourceSans3-Bold.ttf"),
    18
  );

  const { state, isActive } = useChartPressState({ x: 0, y: { highTmp: 0 } });
  const [chartData] = useState(DATA);

  const selectedDatum = useDerivedValue(() => {
    const xVal = Math.round(state.x.position.value);
    return chartData.find((item) => item.day === xVal);
  }, [state]);

  const value = useDerivedValue(() => {
    return selectedDatum.value
      ? selectedDatum.value.highTmp.toFixed(2) + " €"
      : "";
  }, [selectedDatum]);

  const dateLabel = useDerivedValue(() => {
    return selectedDatum.value ? `Date: ${selectedDatum.value.date}` : "";
  }, [selectedDatum]);

  return (
    <View style={{ flex: 1 }}>
      <CartesianChart
        data={chartData}
        xKey="day"
        yKeys={["highTmp"]}
        domainPadding={{ top: 30 }}
        chartPressState={state}
      >
        {({ points, chartBounds }) => (
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

            {isActive ? (
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
                  font={smallFont}
                  chartWidth={chartBounds.right}
                />
              </>
            ) : null}
          </>
        )}
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
  const width = 140;
  const height = 60;
  const padding = 10;

  const adjustedX = useDerivedValue(() => {
    const rawX = x.value - width / 2;
    const maxX = chartWidth - width - 4;
    return Math.max(4, Math.min(rawX, maxX));
  }, [x]);

  const rectY = useDerivedValue(() => {
    const rawY = y.value - height - 20;
    return Math.max(4, rawY); // prevent clipping at the top
  }, [y]);

  const textX = useDerivedValue(() => adjustedX.value + padding, [adjustedX]);

  const dateY = useDerivedValue(() => rectY.value + 20, [rectY]);
  const valueY = useDerivedValue(() => rectY.value + 40, [rectY]);

  const dateText = useDerivedValue(() => dateLabel.value, [dateLabel]);
  const valueText = useDerivedValue(() => `Cost: ${value.value}`, [value]);

  return (
    <>
      <RoundedRect
        x={adjustedX}
        y={rectY}
        width={width}
        height={height}
        r={10}
        color="black"
        opacity={0.8}
      />
      {font && (
        <>
          <SKText
            x={textX}
            y={dateY}
            text={dateText}
            font={font}
            color="white"
          />
          <SKText
            x={textX}
            y={valueY}
            text={valueText}
            font={font}
            color="white"
          />
        </>
      )}
    </>
  );
}
