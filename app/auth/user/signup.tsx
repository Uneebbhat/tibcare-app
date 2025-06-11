import Input from "@/components/ui/input";
import { Colors } from "@/constants/Color";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

export default function UserSignupScreen() {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 24,
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
          }}
          keyboardShouldPersistTaps="handled"
        >
          <Text>TibCare Signup</Text>
          <Input placeholder="Username" keyboardType="default" />
          <Input placeholder="Email" keyboardType="email-address" />
          <Input placeholder="Phone Number" keyboardType="phone-pad" />
          <Input
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
