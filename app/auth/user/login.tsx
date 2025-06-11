import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function UserLoginScreen() {
  return (
    <View>
      <Text>User login</Text>
      <Link href={"/auth/user/signup"}>
        <Text>User signup</Text>
      </Link>
    </View>
  );
}
