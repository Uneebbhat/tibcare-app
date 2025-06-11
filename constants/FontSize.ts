import { TextStyle } from "react-native";

type TypographyStyle = TextStyle;

export const FontSize: { [key: string]: TypographyStyle } = {
  displayText: {
    fontSize: 32,
    fontWeight: 900,
  },
  h1: {
    fontSize: 28,
    fontWeight: 700,
  },
  h2: {
    fontSize: 24,
    fontWeight: 600,
  },
  body: {
    fontSize: 16,
    fontWeight: 400,
  },
  bodyMedium: {
    fontSize: 14,
    fontWeight: "500",
  },
  bodySmall: {
    fontSize: 12,
  },
  bodySmallThick: {
    fontSize: 12,
    fontWeight: "bold",
  },
  bodyBold: {
    fontSize: 16,
    fontWeight: "bold",
  },
};
