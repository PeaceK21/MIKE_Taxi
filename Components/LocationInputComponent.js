import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const LocationInputComponent = () => {
  const homePlace = {
    description: "Home",
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: "Work",
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };

  return (
    <GooglePlacesAutocomplete
      placeholder="Search for a destination"
      styles={toInputBoxStyles}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      fetchDetails={true}
      returnKeyType={"search"}
      minLength={2}
      onPress={(data, details = null) => {
        console.log("Data description:  " + data.description);

        console.log("Details of location: " + details.geometry.location);
      }}
      enablePoweredByContainer={false}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: "en",
      }}
      predefinedPlaces={[homePlace, workPlace]}
    />
  );
};

export default LocationInputComponent;

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
  separator: {
    height: 1,
    marginLeft: 10,
    marginRight: 10,
  },
});
