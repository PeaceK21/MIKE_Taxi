import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Keyboard,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Svg, {
  Ellipse,
  Circle,
  Path,
  Rect,
  G,
  Defs,
  ClipPath,
} from "react-native-svg";
import { Picker } from "@react-native-picker/picker";
import { useFonts } from "expo-font";
import { globalStyle } from "../globalStyles";
import CountryPicker from "react-native-country-picker-modal";
import { useState } from "react";
import LoginByPhoneComponent from "../Components/LoginByPhoneComponent";
import LoginOTPComponent from "../Components/LoginOTPComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native-web";
import { useEffect } from "react";

const LoginScreen = () => {
  const [loaded] = useFonts({
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
  });

  const Stack = createNativeStackNavigator();

  const [countryCode, setCountryCode] = useState("IN");
  const [callingCode, setcallingCode] = useState("91");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const phoneNo = null;

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Upper half of UI */}
      <View style={tw`flex-1 relative`}>
        {/* Background design */}

        <View style={tw`absolute overflow-hidden -top-1/2`}>
          {/* This svg will show when keyboard is shown */}
          {isKeyboardVisible === true && (
            <Svg
              // style={tw`absolute overflow-hidden -top-1/2`}
              width="510"
              height="896"
              viewBox="0 180 510 896"
            >
              <Defs>
                <ClipPath id="clip-path">
                  <Rect
                    id="Mask"
                    width="414"
                    height="896"
                    transform="translate(0 -198)"
                    fill="#fff"
                  />
                </ClipPath>
              </Defs>
              <G
                id="Group_9645"
                dataName="Group 9645"
                transform="translate(0 86)"
              >
                <G
                  id="Background_Mask"
                  dataName="Background Mask"
                  transform="translate(0 112)"
                  clipPath="url(#clip-path)"
                >
                  <Path
                    id="Background"
                    d="M285.313,278.36c0-72.936-571.284-62.111-367.653-392.068s601.988-395.571,705.1-97.973S1050.01-8.106,1050.01-162.617V278.36Z"
                    transform="translate(541.787 -2) rotate(180)"
                    fill="#ecf311"
                  />
                </G>
                <G
                  id="Ellipse_7"
                  dataName="Ellipse 7"
                  transform="translate(318 370)"
                  fill="#ecf311"
                  stroke="#ecf311"
                  strokeWidth="1"
                >
                  <Ellipse cx="96" cy="90.5" rx="96" ry="90.5" stroke="none" />
                  <Ellipse cx="96" cy="90.5" rx="95.5" ry="90" fill="none" />
                </G>
              </G>
            </Svg>
          )}
          {/* This svg will show when keyboard is hidden */}
          {isKeyboardVisible === false && (
            <Svg
              // style={tw`absolute overflow-hidden -top-1/2`}
              width="510"
              height="896"
              viewBox="0 0 510 896"
            >
              <Defs>
                <ClipPath id="clip-path">
                  <Rect
                    id="Mask"
                    width="414"
                    height="896"
                    transform="translate(0 -198)"
                    fill="#fff"
                  />
                </ClipPath>
              </Defs>
              <G
                id="Group_9645"
                dataName="Group 9645"
                transform="translate(0 86)"
              >
                <G
                  id="Background_Mask"
                  dataName="Background Mask"
                  transform="translate(0 112)"
                  clipPath="url(#clip-path)"
                >
                  <Path
                    id="Background"
                    d="M285.313,278.36c0-72.936-571.284-62.111-367.653-392.068s601.988-395.571,705.1-97.973S1050.01-8.106,1050.01-162.617V278.36Z"
                    transform="translate(541.787 -2) rotate(180)"
                    fill="#ecf311"
                  />
                </G>
                <G
                  id="Ellipse_7"
                  dataName="Ellipse 7"
                  transform="translate(318 370)"
                  fill="#ecf311"
                  stroke="#ecf311"
                  strokeWidth="1"
                >
                  <Ellipse cx="96" cy="90.5" rx="96" ry="90.5" stroke="none" />
                  <Ellipse cx="96" cy="90.5" rx="95.5" ry="90" fill="none" />
                </G>
              </G>
            </Svg>
          )}
        </View>

        <View style={tw`flex-1  justify-center items-center`}>
          <Image
            style={[
              tw`overflow-hidden`,
              {
                width: 130,
                height: 130,
                resizeMode: "contain",
                borderRadius: 100,
              },
            ]}
            source={require("../assets/logo.jpg")}
          />

          <Text style={{ fontSize: 52, fontWeight: "bold" }}>MIKE TAXI</Text>
        </View>
      </View>

      {/* Lower half of home page containing text and input */}

      <View style={tw`flex-1 justify-center bg-transparent`}>
        {/* // Style navigation container properly next time */}
        <NavigationContainer
          theme={{
            colors: {
              background: "rgba(0,0,0,0)",
            },
          }}
        >
          <Stack.Navigator
            initialRouteName="LoginByphone"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              // style={tw`bg-transparent`}
              name="LoginByPhone"
              component={LoginByPhoneComponent}
            />
            <Stack.Screen name="LoginOTP" component={LoginOTPComponent} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <LoginByPhoneComponent /> */}
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeAreaAndroid: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backgroundYellow: {
    backgroundColor: "#ecf311",
  },
});
