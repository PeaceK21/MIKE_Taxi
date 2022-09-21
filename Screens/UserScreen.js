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
import { useFonts } from "expo-font";
import React from "react";
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
import { useState } from "react";
import { Avatar } from "react-native-elements";
import { Button } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";

const UserScreen = () => {
  const [loaded] = useFonts({
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
  });

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  return (
    <View style={[tw`flex-1`]}>
      {/* Background SVG yellow wall */}
      <View style={tw`absolute overflow-hidden -top-1/2`}>
        {/* This svg will show when keyboard is shown */}
        {isKeyboardVisible === true && (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="414"
            height="896"
            viewBox="0 0 414 896"
          >
            <Defs>
              <ClipPath id="clip-path">
                <Path
                  fill="#ecf311"
                  d="M0 0H414V896H0z"
                  transform="translate(0 -476)"
                ></Path>
              </ClipPath>
            </Defs>
            <G
              clipPath="url(#clip-path)"
              data-name="Background Mask"
              transform="translate(0 476)"
            >
              <Path
                fill="#ecf311"
                d="M285.313 278.36c0-72.936-571.284-62.111-367.653-392.068s601.988-395.571 705.1-97.973 427.25 203.575 427.25 49.064V278.36z"
                transform="rotate(180 270.894 -140)"
              ></Path>
            </G>
          </Svg>
        )}
        {/* This svg will show when keyboard is hidden */}
        {isKeyboardVisible === false && (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="414"
            height="896"
            viewBox="0 0 414 896"
          >
            <Defs>
              <ClipPath id="clip-path">
                <Path
                  fill="#ecf311"
                  d="M0 0H414V896H0z"
                  transform="translate(0 -476)"
                ></Path>
              </ClipPath>
            </Defs>
            <G
              clipPath="url(#clip-path)"
              data-name="Background Mask"
              transform="translate(0 476)"
            >
              <Path
                fill="#ecf311"
                d="M285.313 278.36c0-72.936-571.284-62.111-367.653-392.068s601.988-395.571 705.1-97.973 427.25 203.575 427.25 49.064V278.36z"
                transform="rotate(180 270.894 -140)"
              ></Path>
            </G>
          </Svg>
        )}
      </View>

      <View>
        <View
          style={tw`flex-row items-center overflow-hidden justify-center pt-8 pb-4 bg-transparent`}
        >
          {/* Left arrow button */}
          <Button
            icon={{
              name: "arrow-back",
              type: "ionicon",
              color: "yellow",
            }}
            buttonStyle={{
              backgroundColor: "black",
              borderColor: "transparent",
              borderRadius: 100,
              width: 50,
              height: 50,
            }}
          />

          <Text style={[tw`mx-8`, { fontSize: 18, fontWeight: "700" }]}>
            You're at your destination.
          </Text>
        </View>
        <View style={tw` pt-10 justify-center items-center`}>
          <Avatar
            size={150}
            rounded
            source={{
              uri: "https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg",
            }}
          />

          <Text>Your driver</Text>
          <Text style={[tw`mx-8`, { fontSize: 18, fontWeight: "700" }]}>
            Meet Patel
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
