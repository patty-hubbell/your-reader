import React, { useState } from "react";
import Constants from "expo-constants";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import IconButton from "../components/IconButton";
import { backgroundColor, color } from "../config/themes";

function ReaderScreen({ navigation, route }) {
  const { ocrData } = route.params;
  const [theme, setTheme] = useState("light");

  const renderThemePicker = () => {
    switch (theme) {
      case "light":
        return (
          <IconButton
            color={color(theme)}
            name="ios-cloudy-night"
            onPress={() => setTheme("dark")}
            size={50}
            style={styles.theme}
            title="Dark"
            titleStyle={[styles.title, { color: color(theme) }]}
          />
        );
      case "dark":
        return (
          <IconButton
            color={color(theme)}
            name="ios-sunny"
            onPress={() => setTheme("light")}
            size={50}
            style={styles.theme}
            title="Light"
            titleStyle={[styles.title, { color: color(theme) }]}
          />
        );
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: backgroundColor(theme) }]}
    >
      <View style={styles.optionsContainer}>
        <IconButton
          color={color(theme)}
          name="ios-arrow-back"
          onPress={() => navigation.popToTop()}
          size={50}
          style={styles.back}
          title="Restart"
          titleStyle={[styles.title, { color: color(theme) }]}
        />
        {renderThemePicker()}
      </View>
      <View style={styles.result}>
        <Text style={[styles.resultsText, { color: color(theme) }]}>
          Results:
        </Text>
        <ScrollView>
          <Text style={[styles.text, { color: color(theme) }]}>
            {ocrData.text}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    alignItems: "center",
    height: 70,
    left: 10,
    position: "absolute",
    width: 70,
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  theme: {
    alignItems: "center",
    height: 70,
    position: "absolute",
    right: 10,
    width: 55,
  },
  optionsContainer: {
    height: 70,
    marginBottom: 50,
    width: "100%",
  },
  result: {
    height: "100%",
    paddingHorizontal: 15,
  },
  resultsText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
  },
  title: {
    fontSize: 15,
    position: "absolute",
    top: 50,
  },
});

export default ReaderScreen;
