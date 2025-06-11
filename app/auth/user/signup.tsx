import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Colors } from "@/constants/Color";
import { FontSize } from "@/constants/FontSize";
import { Link } from "expo-router";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function UserSignupScreen() {
  return (
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
          <View>
            <Text style={style.formHeadingText}>TibCare Signup</Text>
            <View style={style.formContainer}>
              <Input placeholder="Username" keyboardType="default" />
              <Input placeholder="Email" keyboardType="email-address" />
              <Input placeholder="Phone Number" keyboardType="phone-pad" />
              <Input
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true}
              />
              <Button text="Signup" />

              <View>
                <View style={style.separatorContainer}>
                  <View style={style.separatorLine} />
                  <Text style={style.separatorText}>or</Text>
                  <View style={style.separatorLine} />
                </View>
                <View style={style.otherAuthOptions}>
                  <Text style={style.loginText}>
                    Already have an acocunt?
                    <Link href={"/auth/user/login"}> Login</Link>
                  </Text>
                  <Button text="Signup as Doctor" variant="secondary" />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  formHeadingText: {
    fontSize: FontSize.displayText.fontSize,
    fontWeight: FontSize.displayText.fontWeight,
    textAlign: "center",
    marginBottom: 32,
  },
  formContainer: {
    gap: 12,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
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
