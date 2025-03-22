import { Tabs } from "expo-router";
import { ReactNode } from "react";
import { useThemeKey } from "@/hooks/useThemeKey";
import { TabBar } from "@/components/TabBar/TabBar";

export default function TabLayout(): ReactNode {
  const theme = useThemeKey();

  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Explore",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
