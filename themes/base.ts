import { vars } from "nativewind";

// Theme Schema
export const light = {
  // Colors
  primary: "rgba(19, 20, 74, 1)",
  secondary: "rgba(252, 96, 83, 1)",
  error: "rgba(165, 52, 40, 1)",
  background: "rgba(251, 251, 253, 1)",
  surface: "rgba(251, 251, 253, 1)",
  link: "rgba(46, 47, 138, 1)",
  divider: "rgba(189, 189, 189, 1)",
  buttonBackground: "rgba(240, 241, 242, 1)",
  buttonBorder: "rgba(226, 232, 240, 1)",
  buttonInactive: "rgba(19, 20, 74, 0.4)",
  buttonGradient: [
    "rgba(19, 20, 74, 1)",
    "rgba(253, 96, 83, 1)",
    "rgba(249, 164, 46, 1)",
  ],
  textPrimary: "rgba(19, 20, 74, 1)",
  textSecondary: "rgb(70, 73, 78)",
  textPlaceholder: "rgba(93, 98, 104, 0.65)",
  textHover: "rgba(46, 47, 138, 1)",
  cardBackground: "rgb(241, 243, 250)",
  cardSecondaryBackground: "rgb(240, 242, 247)",
  cardDisabledBackground: "rgba(189, 189, 189, 1)",
  shimmerBase: [
    "rgba(235, 235, 235, 1)",
    "rgba(215, 215, 215, 1)",
    "rgba(235, 235, 235, 1)",
  ],
  circularProgress: "rgba(251, 251, 253, 1)",

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
  buttonBackground: "	rgba(40, 41, 42, 1)",
  buttonBorder: "rgb(62, 62, 62)",
  buttonInactive: "rgba(242, 242, 242, 0.4)",
  buttonGradient: [
    "rgba(66, 67, 146, 1)",
    "rgba(138, 93, 137, 1)",
    "rgba(138, 113, 136, 1)",
  ],
  textPrimary: "rgba(230, 223, 223, 1)",
  textSecondary: "rgba(208, 207, 207, 1)",
  textPlaceholder: "rgba(208, 207, 207, 0.7)",
  textHover: "rgba(169, 169, 210, 1)",
  cardBackground: "rgb(46, 46, 47)",
  cardSecondaryBackground: "rgba(58, 58, 61, 0.7)",
  cardDisabledBackground: "rgba(66, 66, 66, 1)",
  shimmerBase: [
    "rgba(60, 60, 60, 1)",
    "rgba(80, 80, 80, 1)",
    "rgba(60, 60, 60, 1)",
  ],
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
    "--color-button-border": light.buttonBorder,
    "--color-button-inactive": light.buttonInactive,
    "--color-text-primary": light.textPrimary,
    "--color-text-secondary": light.textSecondary,
    "--color-text-placeholder": light.textPlaceholder,
    "--color-text-hover": light.textHover,
    "--color-card-background": light.cardBackground,
    "--color-card-secondary-background": light.cardSecondaryBackground,
    "--color-card-disabled-background": light.cardDisabledBackground,
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
    "--color-button-border": dark.buttonBorder,
    "--color-button-inactive": dark.buttonInactive,
    "--color-text-primary": dark.textPrimary,
    "--color-text-secondary": dark.textSecondary,
    "--color-text-placeholder": dark.textPlaceholder,
    "--color-text-hover": dark.textHover,
    "--color-card-background": dark.cardBackground,
    "--color-card-secondary-background": dark.cardSecondaryBackground,
    "--color-card-disabled-background": dark.cardDisabledBackground,
    "--color-circular-progress": dark.circularProgress,
  }),
};
