import { View, StyleSheet, LayoutChangeEvent } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { useThemeKey } from "@/hooks/useThemeKey";
import TabBarButton from "./TabBarButton";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const theme = useThemeKey();
  const styles = getStyles(theme);
  const tabPositionX = useSharedValue(0);

  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });

  const buttonWidth = dimensions.width / state.routes.length;

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  useEffect(() => {
    tabPositionX.value = withTiming(buttonWidth * state.index, {
      duration: 350,
      easing: Easing.inOut(Easing.ease),
    });
  }, [state.index, buttonWidth]);

  return (
    <View onLayout={onTabbarLayout} style={styles.tabbar}>
      <Animated.View
        style={[
          animatedStyle,
          {
            position: "absolute",
            backgroundColor: theme.find("buttonBackground"),
            borderRadius: 30,
            marginHorizontal: 12,
            height: 45,
            width: buttonWidth - 25,
            top: 8,
          },
        ]}
      />

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            label={options.title ?? ""}
            icon={
              options.tabBarIcon
                ? options.tabBarIcon({
                    color: isFocused
                      ? theme.find("primary")
                      : theme.find("buttonInactive"),
                    size: 20,
                    focused: isFocused,
                  })
                : undefined
            }
          />
        );
      })}
    </View>
  );
}

const getStyles = (theme: any) =>
  StyleSheet.create({
    tabbar: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: theme.find("background"),
      paddingVertical: 10,
      paddingBottom: 30,
      shadowColor: theme.find("primary"),
      shadowOpacity: 0.4,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 1 },
      elevation: 1,
    },
  });
