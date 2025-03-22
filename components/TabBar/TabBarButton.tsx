import { Pressable, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type TabBarButtonProps = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
  color: string;
  label: string;
};

const icon: Record<string, ({ color }: { color: string }) => JSX.Element> = {
  index: ({ color }) => <Feather name="home" size={24} color={color} />,
  dashboard: ({ color }) => <Feather name="compass" size={24} color={color} />,
  profile: ({ color }) => <Feather name="user" size={24} color={color} />,
};

const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  label,
}: TabBarButtonProps) => {
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
      <Animated.View style={animedIconStyle}>
        {icon[routeName]?.({
          color: isFocused ? "#FFF" : "#222",
        })}
      </Animated.View>
      <Animated.Text
        style={[{ color: isFocused ? "#673ab7" : "#222" }, animatedTextStyle]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
