import Button from "@/components/ui/button";
import Input, { KeyboardAutoCapitalize } from "@/components/ui/input";
import { Colors } from "@/constants/Color";
import { FontSize } from "@/constants/FontSize";
import useLogin from "@/hooks/api/useLogin";
import useTogglePassword from "@/hooks/useTogglePassword";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  default as Eye,
  default as EyeOff,
} from "react-native-vector-icons/Feather";

export default function LoginForm() {
  const { togglePassword, handleTogglePassword } = useTogglePassword();
  const { formData, loading, handleOnChange, handleOnSubmit } = useLogin();

  return (
    <>
      <View>
        <Image
          source={require("@/assets/images/icon.png")}
          style={style.logo}
          resizeMode="contain"
        />
        <Text style={style.formHeadingText}>Login as user</Text>
        <View style={style.formContainer}>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={handleOnChange("email")}
            value={formData.email}
            autoCapitalize={KeyboardAutoCapitalize.none}
          />
          <View style={{ position: "relative" }}>
            <Input
              placeholder="Password"
              keyboardType="default"
              secureTextEntry={!togglePassword}
              onChangeText={handleOnChange("password")}
              value={formData.password}
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
              text="Login"
              onPress={handleOnSubmit}
              disabled={!formData.email || !formData.password}
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
                Don't have an acocunt?
                <Link href={"/auth/user/signup"}> Signup</Link>
              </Text>
              <Button text="Login as Doctor" variant="secondary" />
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
