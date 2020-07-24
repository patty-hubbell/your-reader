import React from "react";
import Constants from "expo-constants";
import { View, StyleSheet, Text } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";
import IconButton from "../components/IconButton";
import { ScrollView } from "react-native-gesture-handler";

function InfoScreen({ closeModal }) {
  return (
    <View style={styles.container}>
      <IconButton
        color={colors.black}
        name="ios-close"
        onPress={closeModal}
        size={55}
        style={styles.close}
        titleStyle={styles.closeTitle}
        title="Close"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Welcome to Your Reader!</Text>
        <Text style={styles.body}>
          With Your Reader you can supply an image of a document, and view the
          text in a more readable form, or have the text read back to you.
        </Text>
        <Text style={styles.body}>
          On the Home Screen you will see two options for supplying an image of
          a document.
        </Text>
        <View style={styles.optionContainer}>
          <Text style={styles.optionHeader}>Option 1:</Text>
          <Text style={styles.optionText}>
            Pressing the "Take Picture" button will allow you to take a picture
            of a document with the camera on your device.
          </Text>
          <AppButton
            iconName="ios-camera"
            iconColor={colors.white}
            iconSize={35}
            style={styles.button}
            title="Take Picture"
          />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.optionHeader}>Option 2:</Text>
          <Text style={styles.optionText}>
            Pressing the "Camera Roll" button will allow you to access the
            Camera Roll or Images Library of your device to select an image of a
            document.
          </Text>
          <AppButton
            iconName="ios-albums"
            iconColor={colors.white}
            iconSize={35}
            style={styles.button}
            title="Camera Roll"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    color: colors.black,
    fontSize: 24,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    marginBottom: 20,
  },
  close: {
    alignItems: "center",
    height: 70,
    width: "100%",
  },
  closeTitle: {
    color: colors.black,
    fontSize: 18,
    position: "absolute",
    top: 44,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    color: colors.black,
    fontSize: 27,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  optionContainer: {
    backgroundColor: colors.background,
    borderRadius: 26,
    marginBottom: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  optionHeader: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
  },
  optionText: {
    color: colors.white,
    fontSize: 24,
    marginBottom: 30,
  },
});

export default InfoScreen;
