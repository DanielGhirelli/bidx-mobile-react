/**
 *  Provides a helper function, getTailwindColor, 
 *  which fetches theme-defined colors (including gradients) 
 *  based on a given key and mode (DEFAULT or dark).
 */
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig) as any;

// Function to fetch a Tailwind color dynamically
export const getTailwindColor = (key: string, mode: 'DEFAULT' | 'dark' = 'DEFAULT'): [string, string, ...string[]] => {
  const colors = fullConfig.theme?.colors || {}; 
  const colorValue = colors[key];

  if (!colorValue) {
    console.warn(`Tailwind color "${key}" not found in theme config.`);
    return ['#000', '#333'];
  }

  if (typeof colorValue === 'object' && colorValue !== null) {
    const result = colorValue[mode] || colorValue.DEFAULT || Object.values(colorValue);
    return (Array.isArray(result) && result.length >= 2) 
      ? (result as [string, string, ...string[]]) 
      : ['#000', '#333'];
  }

  return ['#000', '#333'];
};
