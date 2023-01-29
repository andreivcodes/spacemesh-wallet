import "./styles.css";

import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-green-700 text-lg font-bold mt-2">
        Hello, world!
      </Text>
      <Text className="text-green-700 text-sm font-bold mt-2">
        This will probably be a very cool project
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
