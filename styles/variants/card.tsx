import { tv } from "tailwind-variants";

// Card Colors
export const cardBackground = tv({
  variants: {
    colorScheme: {
      light: "bg-cardBackground-light",
      dark: "bg-cardBackground-dark",
    },
  },
});

export const cardSecondaryBackground = tv({
  variants: {
    colorScheme: {
      light: "bg-cardSecondaryBackground-light",
      dark: "bg-cardSecondaryBackground-dark",
    },
  },
});

export const cardDisabledBackground = tv({
  variants: {
    colorScheme: {
      light: "bg-cardDisabledBackground-light",
      dark: "bg-cardDisabledBackground-dark",
    },
  },
});
