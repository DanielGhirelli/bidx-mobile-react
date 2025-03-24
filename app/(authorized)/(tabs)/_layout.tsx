import { Tabs } from "expo-router";
import { ReactNode } from "react";
import { TabBar } from "@/components/TabBar/TabBar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function TabLayout(): ReactNode {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesomeIcon
              icon={[focused ? "fas" : "far", "house"]}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesomeIcon
              icon={[focused ? "fas" : "far", "chart-simple"]}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="management"
        options={{
          title: "Management",
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesomeIcon
              icon={[focused ? "fas" : "far", "user-gear"]}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesomeIcon
              icon={[focused ? "fas" : "far", "house"]}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
