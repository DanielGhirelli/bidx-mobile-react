import { tv } from "tailwind-variants";

// Button Colors
export const button = tv({
  variants: {
    colorScheme: {
      light: "button-light",
      dark: "button-dark",
    },
  },
});
