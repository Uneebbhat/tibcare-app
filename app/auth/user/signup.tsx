import SignupForm from "@/components/Signup/SignupForm";
import { Colors } from "@/constants/Color";
import { FontSize } from "@/constants/FontSize";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

export default function UserSignupScreen() {
  return (
    <>
      <KeyboardAvoidingView
        style={style.screenWrapper}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={style.contentContainerStyle}
            keyboardShouldPersistTaps="handled"
          >
            <SignupForm />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}

const style = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  formHeadingText: {
    fontSize: FontSize.displayText.fontSize,
    fontWeight: FontSize.displayText.fontWeight,
    textAlign: "center",
    marginVertical: 32,
  },
  formContainer: {
    gap: 8,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#666",
  },
  otherAuthOptions: {
    gap: 8,
  },
  loginText: {
    textAlign: "center",
  },
});
