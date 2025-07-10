import React from "react";
import { Tabs } from "expo-router";
import { ReactNode } from "react";
import { TabBar } from "@/components/TabBar/TabBar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { HeaderLogo, HeaderBackground, HeaderHelp } from "@/components/Header";
import { View } from "react-native";

export default function TabLayout(): ReactNode {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerTitleStyle: {
          color: "white",
          fontFamily: "SourceSans3-Strong",
          fontSize: 18,
        },
        headerBackground: () => <HeaderBackground />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitleAlign: "center",
          title: "Home",
          headerTitle: () => null,
          headerLeft: () => (
            <View style={{ left: 16, bottom: 3 }}>
              <HeaderLogo />
            </View>
          ),
          headerRight: () => (
            <View style={{ right: 16, bottom: 3 }}>
              <HeaderHelp />
            </View>
          ),
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
          headerTitleAlign: "center",
          title: "Dashboards",
          headerRight: () => (
            <View style={{ right: 16, bottom: 3 }}>
              <HeaderHelp />
            </View>
          ),
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
          headerTitleAlign: "center",
          title: "Management",
          headerRight: () => (
            <View style={{ right: 16, bottom: 3 }}>
              <HeaderHelp />
            </View>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesomeIcon
              icon={[focused ? "fas" : "fal", "user-gear"]}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitleAlign: "center",
          title: "Profile",
          headerRight: () => (
            <View style={{ right: 16, bottom: 3 }}>
              <HeaderHelp />
            </View>
          ),
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
