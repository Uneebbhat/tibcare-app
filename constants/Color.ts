export const Colors = {
  black: "#0a0a0a",
  blue: "#005EFD",
  lightBlue: "#68AEFF",
  darkBlue: "#003897",
  white: "#ffffff",
  gray: "#E0E0E0",
  darkGray: "#B3B3B3",
  green200: "#BBF7D0",
  green600: "#16A34A",
  green400: "#166534",
  red200: "#FECACA",
  red600: "#DC2626",
  red400: "#991B1B",
  yellow200: "#FEF08A",
  yellow600: "#CA8A04",
  yellow400: "#854D0E",
} as const;

// Type for the color keys
export type ColorKeys = keyof typeof Colors;
