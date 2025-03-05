import { tv } from "tailwind-variants";

// Text Colors
export const textPrimary = tv({
  variants: {
    colorScheme: {
      light: "textPrimary-light",
      dark: "textPrimary-dark",
    },
  },
});

export const textSecondary = tv({
  variants: {
    colorScheme: {
      light: "textSecondary-light",
      dark: "textSecondary-dark",
    },
  },
});
