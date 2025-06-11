import { Colors } from "@/constants/Color";
import { FontSize } from "@/constants/FontSize";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "outline" | "danger";
  disabled?: boolean;
}

export default function Button({
  text,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const getButtonStyle = () => {
    const baseStyle = (() => {
      switch (variant) {
        case "primary":
          return style.primaryButton;
        case "secondary":
          return style.secondaryButton;
        case "outline":
          return style.outlineButton;
        case "danger":
          return style.dangerButton;
        default:
          return style.primaryButton;
      }
    })();

    return [baseStyle, disabled && style.disabledButton];
  };

  const getTextStyle = () => {
    const baseStyle = (() => {
      switch (variant) {
        case "primary":
          return style.primaryButtonText;
        case "secondary":
          return style.secondaryButtonText;
        case "outline":
          return style.outlineButtonText;
        case "danger":
          return style.dangerButtonText;
        default:
          return style.primaryButtonText;
      }
    })();

    return [baseStyle, disabled && style.disabledText];
  };

  return (
    <TouchableOpacity
      style={[style.button, getButtonStyle()]}
      disabled={disabled}
    >
      <Text style={[style.buttonText, getTextStyle()]}>{text}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  primaryButton: {
    backgroundColor: Colors.blue,
  },
  secondaryButton: {
    backgroundColor: Colors.lightBlue,
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.darkGray,
  },
  dangerButton: {
    backgroundColor: Colors.red600,
  },
  buttonText: {
    textAlign: "center",
    fontSize: FontSize.body.fontSize,
    fontWeight: 500,
  },
  primaryButtonText: {
    color: Colors.white,
  },
  secondaryButtonText: {
    color: Colors.white,
  },
  outlineButtonText: {
    color: Colors.black,
  },
  dangerButtonText: {
    color: Colors.white,
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.7,
  },
});
