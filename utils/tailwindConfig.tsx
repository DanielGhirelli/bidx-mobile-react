import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig) as any;

// Function to fetch a Tailwind color dynamically
export const getTailwindColor = (key: string, property?: string): string => {
  const colors = fullConfig.theme?.colors || {};
  const colorValue = colors[key];

  if (!colorValue) {
    console.warn(`Tailwind color "${key}" not found in theme config.`);
    return "#000";
  }

  // If colorValue is an object, try to retrieve the requested property
  if (typeof colorValue === "object" && colorValue !== null) {
    return property && colorValue[property]
      ? colorValue[property]
      : Object.values(colorValue)[0] || "#000";
  }

  return typeof colorValue === "string" ? colorValue : "#000";
};
