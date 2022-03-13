import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
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
import { useState, useEffect } from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const LoginOTPComponent = () => {
  const [counter, setCounter] = useState(59);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <View style={tw`flex-1 justify-center`}>
      <View style={tw`mx-8`}>
        <Text style={[globalStyle.fontPoppins, { fontSize: 11 }]}>
          Phone Verification
        </Text>
        <Text
          style={[globalStyle.fontPoppins, { fontSize: 18, fontWeight: "700" }]}
        >
          Enter your 6 digit OTP code
        </Text>
      </View>

      <View style={tw`flex-row mx-8 my-10 p-2 rounded-lg shadow-md bg-white`}>
        <OTPInputView
          style={{ width: "100%", height: 40 }}
          pinCount={6}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
      </View>

      <View style={tw`mx-8 items-center`}>
        <Text>
          Resend code in
          <Text style={tw`font-bold`}> {counter} seconds</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginOTPComponent;

const styles = StyleSheet.create({
  // Styles for OTP input
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});
