import { View } from "react-native";
import { globalStyle } from "./globalStyles";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import UserScreen from "./Screens/UserScreen";

export default function App() {
  return (
    <View style={globalStyle.safeAreaAndroid}>
      <UserScreen />
    </View>
  );
}
