import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <SafeAreaView style={style.bodyContainer}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
      <Toast />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    marginTop: 34,
    backgroundColor: "white",
  },
});
