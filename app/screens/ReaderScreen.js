import React, { useState, useLayoutEffect } from "react";
import * as Speech from "expo-speech";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import HeaderButton from "../components/HeaderButton";
import { backgroundColor, color } from "../config/themes";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import ReaderControls from "../components/ReaderControls";

function ReaderScreen({ navigation, route }) {
  const { ocrData } = route.params;
  const [theme, setTheme] = useState("light");
  const [hideOptions, setHideOptions] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          color={colors.white}
          iconColor={colors.white}
          iconName="ios-settings"
          iconSize={26}
          onPress={toggleOptions}
          title="Options"
        />
      ),
    });
  }, [hideOptions]);

  const toggleOptions = () => {
    setHideOptions(!hideOptions);
  };

  const renderThemePicker = () => {
    switch (theme) {
      case "light":
        return (
          <HeaderButton
            color={color.white}
            iconColor={colors.white}
            iconSize={26}
            iconName="ios-cloudy-night"
            onPress={() => setTheme("dark")}
            title="Dark"
          />
        );
      case "dark":
        return (
          <HeaderButton
            color={color.white}
            iconColor={colors.white}
            iconSize={26}
            iconName="ios-sunny"
            onPress={() => setTheme("light")}
            title="Light"
          />
        );
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: backgroundColor(theme) }]}
    >
      {!hideOptions && (
        <View style={styles.optionsContainer}>{renderThemePicker()}</View>
      )}
      {/*       <AppButton
        iconColor={colors.white}
        iconName="ios-megaphone"
        iconSize={30}
        onPress={() => Speech.speak(ocrData.text)}
        style={styles.listenButton}
        title="Listen"
      /> */}
      <ReaderControls />
      <View style={styles.result}>
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
  container: {
    alignItems: "center",
    flex: 1,
  },
  listenButton: {
    marginTop: 20,
    height: 30,
    width: "95%",
  },
  theme: {
    alignItems: "center",
    height: 70,
    position: "absolute",
    right: 10,
    width: 55,
  },
  optionsContainer: {
    alignItems: "center",
    backgroundColor: colors.background,
    height: 50,
    justifyContent: "center",
    width: "100%",
  },
  result: {
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 30,
  },
});

export default ReaderScreen;
