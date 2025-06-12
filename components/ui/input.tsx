import { Colors } from "@/constants/Color";
import { FontSize } from "@/constants/FontSize";
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextStyle,
  ViewStyle,
} from "react-native";

export enum KeyboardAutoCapitalize {
  none = "none",
  sentences = "sentences",
  words = "words",
  characters = "characters",
}

interface InputProps {
  placeholder?: string;
  style?: ViewStyle | TextStyle;
  onPress?: () => void;
  keyboardType: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
  autoCapitalize?: KeyboardAutoCapitalize;
}

export default function Input({
  placeholder = "Enter text",
  style,
  onPress,
  keyboardType,
  secureTextEntry = false,
  onChangeText,
  value,
  autoCapitalize = KeyboardAutoCapitalize.sentences,
}: InputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.inputField, style as TextStyle]}
      onPress={onPress}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize={autoCapitalize}
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
