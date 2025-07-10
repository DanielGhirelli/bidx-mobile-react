import { Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { useThemeKey } from "@/hooks/useThemeKey";

type TabBarButtonProps = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  label: string;
  icon: any;
};

const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  label,
  icon,
}: TabBarButtonProps) => {
  const theme = useThemeKey();
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
    const top = interpolate(scale.value, [0, 1], [0, 9]);

    return {
      transform: [{ scale: scaleValue }],
      top: top,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity,
    };
  });

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarItem}
    >
      <Animated.View style={animedIconStyle}>{icon}</Animated.View>
      <Animated.Text className={''}
        style={[
          {
            color: isFocused
              ? theme.find("primary")
              : theme.find("buttonInactive"),
            fontSize: 12
          },
          animatedTextStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarItem: {
    marginTop: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
