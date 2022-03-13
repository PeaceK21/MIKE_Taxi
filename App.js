import LoginScreen from "./Screens/LoginScreen";
import { KeyboardAvoidingView, Platform } from "react-native";
import { View } from "react-native";
import { globalStyle } from "./globalStyles";

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={globalStyle.safeAreaAndroid}>
        <LoginScreen />
      </View>
    </KeyboardAvoidingView>
  );
}
