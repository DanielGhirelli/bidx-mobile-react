import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface TabItemProps {
  focused: boolean;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  backgroundColor: string;
}

export default function TabItem({
  focused,
  label,
  icon,
  backgroundColor,
}: TabItemProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: focused ? backgroundColor : "transparent",
        borderRadius: 20,
        paddingHorizontal: label ? Math.max(12, label.length * 2) : 12,
        paddingVertical: 10,
      }}
    >
      <Ionicons
        name={
          focused ? icon : (`${icon}-outline` as keyof typeof Ionicons.glyphMap)
        }
        size={18}
        color={focused ? "#000" : "#888"}
        style={{ marginRight: 6 }}
      />
    </View>
  );
}
