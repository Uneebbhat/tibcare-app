import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function DoctorSignupScreen() {
  return (
    <View>
      <Text>Doctor Signup</Text>
      <Link href={"/auth/doctor/login"}>
        <Text>Doctor login</Text>
      </Link>
    </View>
  );
}
