import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function DoctorLoginScreen() {
  return (
    <View>
      <Text>Doctor Login</Text>
      <Link href={"/auth/doctor/signup"}>
        <Text>Doctor Signup</Text>
      </Link>
    </View>
  );
}
