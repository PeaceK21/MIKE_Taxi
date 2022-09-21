import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { globalStyle } from "../globalStyles";
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
          placeholderTextColor={"red"}
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
