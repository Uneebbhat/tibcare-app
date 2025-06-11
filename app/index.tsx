import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/auth/user/signup"}>
        <Text>User signup</Text>
      </Link>
      <Link href={"/auth/doctor/signup"}>
        <Text>Doctor signup</Text>
      </Link>
    </View>
  );
}
