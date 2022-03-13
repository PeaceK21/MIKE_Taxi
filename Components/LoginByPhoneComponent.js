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
import { useFonts } from "expo-font";
import { globalStyle } from "../globalStyles";
import CountryPicker from "react-native-country-picker-modal";
import { useState } from "react";
const LoginByPhoneComponent = () => {
  const [loaded] = useFonts({
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
  });

  const [countryCode, setCountryCode] = useState("IN");
  const [callingCode, setcallingCode] = useState("91");

  const phoneNo = null;

  if (!loaded) {
    return null;
  }

  return (
    <View style={tw`flex-1 justify-center `}>
      {/* Lower half of home page containing text and input */}
      {/* <View style={tw`flex-1 justify-center`}> */}
      {/* <View style={tw`flex-1 justify-center`}> */}
      <View style={tw`mx-8`}>
        <Text style={[globalStyle.fontPoppins, { fontSize: 11 }]}>
          Hello, nice to meet you!
        </Text>
        <Text
          style={[globalStyle.fontPoppins, { fontSize: 18, fontWeight: "700" }]}
        >
          Ride with MIKE Taxi
        </Text>
      </View>

      <View style={tw`flex-row mx-8 my-10 p-2 rounded-lg shadow-md bg-white`}>
        <View style={tw`w-20`}>
          <CountryPicker
            withFilter
            countryCode={countryCode}
            withFlag
            withAlphaFilter={false}
            withCurrencyButton={false}
            withCallingCodeButton
            withCallingCode
            onSelect={(country) => {
              console.log("Country", country);
              const { cca2, callingCode } = country;
              setCountryCode(cca2);
              setcallingCode(callingCode[0]);
            }}
            containerButtonStyle={{
              alignItems: "center",
            }}
          />
        </View>
        {/* <View style={tw`bg-black`}> */}
        <TextInput
          style={[tw`flex-1`]}
          onChangeText={() => {
            console.log("====================================");
          }}
          value={phoneNo}
          placeholder="Enter your mobile number"
          keyboardType="numeric"
        />
        {/* </View> */}
      </View>

      <View style={tw`mx-8 items-center`}>
        <Text>By creating an account you agree to our</Text>
        <Text>
          <Text style={tw`font-bold`}>Terms of Service</Text> and{" "}
          <Text style={tw`font-bold`}>Privacy Policy</Text>
        </Text>
      </View>
      {/* </View> */}
      {/* </View> */}
    </View>
  );
};

export default LoginByPhoneComponent;
