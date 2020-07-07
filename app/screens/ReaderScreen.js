import React, { useState, useLayoutEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import IconButton from "../components/IconButton";
import HeaderButton from "../components/HeaderButton";
import { backgroundColor, color } from "../config/themes";
import colors from "../config/colors";

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
      <View style={styles.result}>
        <ScrollView
          contentInset={{ top: 10, left: 0, bottom: 70, right: 0 }}
          contentOffset={{ x: 0, y: -10 }}
        >
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
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    width: "100%",
  },
  result: {
    height: "100%",
    paddingHorizontal: 15,
  },
  resultsText: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 50,
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
