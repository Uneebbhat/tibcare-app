import Button from "@/components/ui/button";
import Input, { KeyboardAutoCapitalize } from "@/components/ui/input";
import { Colors } from "@/constants/Color";
import { FontSize } from "@/constants/FontSize";
import useSignup from "@/hooks/api/useSignup";
import useTogglePassword from "@/hooks/useTogglePassword";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  default as Eye,
  default as EyeOff,
} from "react-native-vector-icons/Feather";

export default function SignupForm() {
  const { togglePassword, handleTogglePassword } = useTogglePassword();
  const { formData, loading, handleOnChange, handleOnSubmit } = useSignup();
  return (
    <>
      <View>
        <Image
          source={require("@/assets/images/icon.png")}
          style={style.logo}
          resizeMode="contain"
        />
        <Text style={style.formHeadingText}>Signup as user</Text>
        <View style={style.formContainer}>
          <Input
            placeholder="Username"
            keyboardType="default"
            onChangeText={handleOnChange("username")}
            value={formData.username}
            autoCapitalize={KeyboardAutoCapitalize.words}
          />
          <Input
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={handleOnChange("email")}
            value={formData.email}
            autoCapitalize={KeyboardAutoCapitalize.none}
          />
          <Input
            placeholder="Phone Number"
            keyboardType="phone-pad"
            onChangeText={handleOnChange("phoneNumber")}
            value={formData.phoneNumber}
          />
          <View style={{ position: "relative" }}>
            <Input
              placeholder="Password"
              keyboardType="default"
              secureTextEntry={!togglePassword}
              onChangeText={handleOnChange("password")}
              value={formData.password}
              autoCapitalize={KeyboardAutoCapitalize.none}
            />
            <TouchableOpacity
              onPress={handleTogglePassword}
              style={{ position: "absolute", right: 16, top: 12 }}
            >
              {togglePassword ? (
                <Eye name="eye-off" size={24} color={Colors.darkGray} />
              ) : (
                <EyeOff name="eye" size={24} color={Colors.darkGray} />
              )}
            </TouchableOpacity>
          </View>
          {loading ? (
            <Button text="Loading..." disabled={true} />
          ) : (
            <Button
              text="Signup"
              onPress={handleOnSubmit}
              disabled={
                !formData.username ||
                !formData.email ||
                !formData.phoneNumber ||
                !formData.password
              }
            />
          )}

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
    </>
  );
}

const style = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 32,
  },
  formHeadingText: {
    fontSize: FontSize.displayText.fontSize,
    fontWeight: FontSize.displayText.fontWeight,
    textAlign: "center",
    marginBottom: 32,
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
