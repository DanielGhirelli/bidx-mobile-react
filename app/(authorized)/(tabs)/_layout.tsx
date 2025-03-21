import { Tabs } from "expo-router";
import { ReactNode } from "react";
import { useThemeKey } from "@/hooks/useThemeKey";
import TabItem from "@/components/TabItem"; // Import the new component

export default function TabLayout(): ReactNode {
  const theme = useThemeKey();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarIconStyle: { display: "none" },
        tabBarStyle: {
          height: 80, // Adjusted height
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ focused }) => (
            <TabItem
              focused={focused}
              label="Home"
              icon="home"
              backgroundColor={theme.find("bottomBarSecondaryShadow")}
            />
          ),
          tabBarIcon: () => null,
        }}
      />

      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarLabel: ({ focused }) => (
            <TabItem
              focused={focused}
              label="Dashboard"
              icon="speedometer"
              backgroundColor={theme.find("bottomBarSecondaryShadow")}
            />
          ),
          tabBarIcon: () => null,
        }}
      />

      <Tabs.Screen
        name="management"
        options={{
          tabBarLabel: ({ focused }) => (
            <TabItem
              focused={focused}
              label="Management"
              icon="speedometer"
              backgroundColor={theme.find("bottomBarSecondaryShadow")}
            />
          ),
          tabBarIcon: () => null,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused }) => (
            <TabItem
              focused={focused}
              label="Profile"
              icon="speedometer"
              backgroundColor={theme.find("bottomBarSecondaryShadow")}
            />
          ),
          tabBarIcon: () => null,
        }}
      />
    </Tabs>
  );
}
