import { Platform } from "react-native";
import { View } from "react-native";
import { globalStyle } from "./globalStyles";
import HomeScreen from "./Screens/HomeScreen";

export default function App() {
  return (
    <View style={globalStyle.safeAreaAndroid}>
      <HomeScreen />
    </View>
  );
}
