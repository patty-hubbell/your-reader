import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.text}>Your Reader</Text>
        <FontAwesome5 color={colors.light} name="book-reader" size={40} />
      </View>
      <AppButton
        iconName="ios-aperture"
        iconColor={colors.white}
        iconSize={35}
        onPress={() => console.log("Scan Document")}
        style={styles.button}
        title="Scan Document"
      />
      <AppButton
        iconName="ios-albums"
        iconColor={colors.white}
        iconSize={35}
        onPress={() => console.log("Camera Roll")}
        style={styles.button}
        title="Camera Roll"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    flexDirection: "row",
    marginBottom: 40,
  },
  text: {
    color: colors.white,
    fontSize: 40,
    fontWeight: "bold",
    marginRight: 20,
  },
});

export default WelcomeScreen;
