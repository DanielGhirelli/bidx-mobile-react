import { tv } from "tailwind-variants";

// Primary & Secondary Colors
export const primary = tv({
  variants: {
    colorScheme: {
      light: "text-primary-light",
      dark: "text-primary-dark",
    },
  },
});

export const secondary = tv({
  variants: {
    colorScheme: {
      light: "text-secondary-light",
      dark: "text-secondary-dark",
    },
  },
});

// Error Colors
export const error = tv({
  variants: {
    colorScheme: {
      light: "text-error-light",
      dark: "text-error-dark",
    },
  },
});

// Background Colors
export const background = tv({
  variants: {
    colorScheme: {
      light: "bg-background-light",
      dark: "bg-background-dark",
    },
  },
});

export const surface = tv({
  variants: {
    colorScheme: {
      light: "bg-surface-light",
      dark: "bg-surface-dark",
    },
  },
});

// Divider Colors
export const divider = tv({
  variants: {
    colorScheme: {
      light: "border-divider-light",
      dark: "border-divider-dark",
    },
  },
});

// Bottom Bar Colors
export const bottomBarActive = tv({
  variants: {
    colorScheme: {
      light: "text-bottomBarActive-light",
      dark: "text-bottomBarActive-dark",
    },
  },
});

export const bottomBarShadow = tv({
  variants: {
    colorScheme: {
      light: "shadow-bottomBarShadow-light",
      dark: "shadow-bottomBarShadow-dark",
    },
  },
});

// Miscellaneous Colors
export const shimmerBaseColor = tv({
  variants: {
    colorScheme: {
      light: "bg-shimmerBaseColor-light",
      dark: "bg-shimmerBaseColor-dark",
    },
  },
});

export const circularProgress = tv({
  variants: {
    colorScheme: {
      light: "text-circularProgress-light",
      dark: "text-circularProgress-dark",
    },
  },
});
