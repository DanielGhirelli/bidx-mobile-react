import { vars } from "nativewind";

// Theme Schema
export const light = {
  // Colors
  primary: "rgba(19, 20, 74, 1)", //x
  secondary: "rgba(252, 96, 83, 1)",
  error: "rgba(165, 52, 40, 1)", //x
  background: "rgba(251, 251, 253, 1)", //x
  surface: "rgba(251, 251, 253, 1)",
  link: "rgba(46, 47, 138, 1)", //x
  divider: "rgba(189, 189, 189, 1)", //x
  buttonBackground: "rgba(224, 225, 239, 0.42)", //x
  buttonInactive: "rgba(19, 20, 74, 0.4)", //x
  buttonGradient1: "rgba(19, 20, 74, 1)", //x
  buttonGradient2: "rgba(253, 96, 83, 1)", //x
  buttonGradient3: "rgba(249, 164, 46, 1)", //x
  buttonSecondaryGradient1: "rgba(50, 51, 103, 1)", //x
  buttonSecondaryGradient2: "rgba(118, 81, 118, 1)", //x
  buttonSecondaryGradient3: "rgba(138, 113, 136, 1)", //x
  textPrimary: "rgba(19, 20, 74, 1)", //x
  textSecondary: "rgb(70, 73, 78)", //x
  textPlaceholder: "rgba(93, 98, 104, 0.65)", //x
  textHover: "rgba(46, 47, 138, 1)", //x
  cardBackground: "rgba(1, 1, 5, 0.68)",
  cardSecondaryBackground: "rgba(222, 220, 233, 0.67)",
  cardDisabledBackground: "rgba(189, 189, 189, 1)",
  shimmerBase: "rgba(205, 205, 205, 1)",
  circularProgress: "rgba(251, 251, 253, 1)", //x

  // Images
  bodyBackground: require("../assets/images/body_background_light.jpg"),
};

export const dark = {
  // Colors
  primary: "rgba(242, 242, 242, 1)",
  secondary: "rgba(19, 20, 74, 1)",
  error: "rgba(229, 115, 104, 1)",
  background: "rgba(33, 33, 33, 1)",
  surface: "rgba(33, 33, 33, 1)",
  link: "rgba(169, 169, 210, 1)",
  divider: "rgba(66, 66, 66, 1)",
  buttonBackground: "rgba(66, 67, 146, 0.54)",
  buttonInactive: "rgba(242, 242, 242, 0.4)",
  buttonGradient1: "rgba(66, 67, 146, 1)",
  buttonGradient2: "rgba(138, 93, 137, 1)",
  buttonGradient3: "rgba(138, 113, 136, 1)",
  buttonSecondaryGradient1: "rgba(50, 50, 90, 1)",
  buttonSecondaryGradient2: "rgba(155, 72, 68, 1)",
  buttonSecondaryGradient3: "rgba(200, 121, 37, 1)",
  textPrimary: "rgba(230, 223, 223, 1)",
  textSecondary: "rgba(208, 207, 207, 1)",
  textPlaceholder: "rgba(208, 207, 207, 0.7)",
  textHover: "rgba(169, 169, 210, 1)",
  cardBackground: "rgba(58, 57, 62, 1)",
  cardSecondaryBackground: "rgba(78, 75, 85, 0.91)",
  cardDisabledBackground: "rgba(66, 66, 66, 1)",
  shimmerBase: "rgba(103, 103, 103, 1)",
  circularProgress: "rgba(208, 156, 52, 1)",

  // Images
  bodyBackground: require("../assets/images/body_background_dark.jpg"),
};

// Apply colors inside vars() -> tailwind.config.js
export const themes = {
  light: vars({
    "--color-primary": light.primary,
    "--color-secondary": light.secondary,
    "--color-error": light.error,
    "--color-background": light.background,
    "--color-surface": light.surface,
    "--color-link": light.link,
    "--color-divider": light.divider,
    "--color-button-background": light.buttonBackground,
    "--color-button-inactive": light.buttonInactive,
    "--color-button-gradient-1": light.buttonGradient1,
    "--color-button-gradient-2": light.buttonGradient2,
    "--color-button-gradient-3": light.buttonGradient3,
    "--color-button-secondary-gradient-1": light.buttonSecondaryGradient1,
    "--color-button-secondary-gradient-2": light.buttonSecondaryGradient2,
    "--color-button-secondary-gradient-3": light.buttonSecondaryGradient3,
    "--color-text-primary": light.textPrimary,
    "--color-text-secondary": light.textSecondary,
    "--color-text-placeholder": light.textPlaceholder,
    "--color-text-hover": light.textHover,
    "--color-card-background": light.cardBackground,
    "--color-card-secondary-background": light.cardSecondaryBackground,
    "--color-card-disabled-background": light.cardDisabledBackground,
    "--color-shimmer-base": light.shimmerBase,
    "--color-circular-progress": light.circularProgress,
  }),
  dark: vars({
    "--color-primary": dark.primary,
    "--color-secondary": dark.secondary,
    "--color-error": dark.error,
    "--color-background": dark.background,
    "--color-surface": dark.surface,
    "--color-link": dark.link,
    "--color-divider": dark.divider,
    "--color-button-background": dark.buttonBackground,
    "--color-button-inactive": dark.buttonInactive,
    "--color-button-gradient-1": dark.buttonGradient1,
    "--color-button-gradient-2": dark.buttonGradient2,
    "--color-button-gradient-3": dark.buttonGradient3,
    "--color-button-secondary-gradient-1": dark.buttonSecondaryGradient1,
    "--color-button-secondary-gradient-2": dark.buttonSecondaryGradient2,
    "--color-button-secondary-gradient-3": dark.buttonSecondaryGradient3,
    "--color-text-primary": dark.textPrimary,
    "--color-text-secondary": dark.textSecondary,
    "--color-text-placeholder": dark.textPlaceholder,
    "--color-text-hover": dark.textHover,
    "--color-card-background": dark.cardBackground,
    "--color-card-secondary-background": dark.cardSecondaryBackground,
    "--color-card-disabled-background": dark.cardDisabledBackground,
    "--color-shimmer-base": dark.shimmerBase,
    "--color-circular-progress": dark.circularProgress,
  }),
};
