import { useAuthSession } from "@/providers/AuthProvider";
import { Redirect } from "expo-router";

export default function Home() {
  const { token } = useAuthSession();

  if (token?.current) {
    return <Redirect href="/(authorized)/(tabs)" />;
  }

  return <Redirect href="/welcome" />;
}
