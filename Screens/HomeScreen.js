import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Avatar, Card, Icon } from "react-native-elements";
import { globalStyle } from "../globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
  // TODO : Change map style as per future requirements
  var mapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.business",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#dadada",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#c9c9c9",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
  ];

  const homePlace = {
    description: "Home",
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: "Work",
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };

  return (
    <View style={tw`flex-1 relative`}>
      {/* View for Map - absolute and behind other UI contents */}
      <View
        style={[
          tw`flex-1 absolute bg-gray-200`,
          {
            width: "100%",
            height: "100%",
          },
        ]}
      >
        <MapView
          style={tw`flex-1`}
          mapType="mutedStandard"
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}
        >
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title="Origin"
            description={"Origin marker"}
            identifier="orig"
          />
        </MapView>
      </View>
      <View>
        <LinearGradient
          colors={["white", "transparent"]}
          start={{
            x: 1,
            y: 0,
          }}
          end={{
            x: 1,
            y: 1,
          }}
          locations={[0.4, 1]}
        >
          <View
            style={tw`flex-row items-center overflow-hidden justify-center pt-8 pb-4 bg-transparent`}
          >
            <Avatar
              size={64}
              rounded
              source={{
                uri: "https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg",
              }}
            />
            <View style={tw`mx-8`}>
              <Text style={[{ fontSize: 11 }]}>
                Hello, <Text style={tw`font-bold`}>Milan Keyur</Text>
              </Text>
              <Text style={[{ fontSize: 18, fontWeight: "700" }]}>
                Where are you going?
              </Text>
            </View>
          </View>

          <View
            style={tw`flex-row mx-6 rounded-xl  shadow-2xl items-center overflow-hidden justify-center bg-white`}
          >
            <GooglePlacesAutocomplete
              placeholder="Search for a destination"
              styles={toInputBoxStyles}
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={400}
              fetchDetails={true}
              returnKeyType={"search"}
              minLength={2}
              onPress={(data, details = null) => {
                dispatch(
                  setDestination({
                    location: details.geometry.location,
                    description: data.description,
                  })
                );
                console.log("navigation function");
                navigation.navigate("RideOptionsCard");
              }}
              enablePoweredByContainer={false}
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: "en",
              }}
              predefinedPlaces={[homePlace, workPlace]}
            />
            <Icon
              style={tw`w-12 bg-blue-300`}
              name="search-location"
              type="font-awesome-5"
              color="gray"
              size={20}
            />

            {/* Add loop for history icons for predefined places  */}
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default HomeScreen;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 12,
    flex: 1,
  },
  textInput: {
    backgroundColor: "white",
    borderRadius: 1,
    fontSize: 18,
    color: "black",
  },
  textInputContainer: {
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  predefinedPlacesDescription: {
    color: "gray",
  },
});
