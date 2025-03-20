import { useColorScheme } from "nativewind";
import { dark, light } from "../themes/base";

export const useThemeKey = () => {
  const { colorScheme } = useColorScheme();
  const theme = colorScheme === "dark" ? dark : light;

  return {
    find: (key: keyof typeof light) => theme[key] || null,
  };
};
