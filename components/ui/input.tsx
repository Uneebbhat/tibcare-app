import { Colors } from "@/constants/Color";
import { FontSize } from "@/constants/FontSize";
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextStyle,
  ViewStyle,
} from "react-native";

interface InputProps {
  placeholder?: string;
  style?: ViewStyle | TextStyle;
  onPress?: () => void;
  keyboardType: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

export default function Input({
  placeholder = "Enter text",
  style,
  onPress,
  keyboardType,
  secureTextEntry = false,
}: InputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.inputField, style as TextStyle]}
      onPress={onPress}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: Colors.white,
    color: Colors.black,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: FontSize.body.fontSize,
    borderWidth: 1,
    borderColor: Colors.darkGray,
  },
});
