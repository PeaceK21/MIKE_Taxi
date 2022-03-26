import { Platform, StatusBar, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function fontLoad() {
  const [loaded] = useFonts({
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return null;
}

export const globalStyle = StyleSheet.create({
  safeAreaAndroid: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  fontPoppins: {
    fontFamily: "PoppinsMedium",
  },
});
