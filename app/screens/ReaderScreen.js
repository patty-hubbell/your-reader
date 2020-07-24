import React, { useState, useLayoutEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import HeaderButton from "../components/HeaderButton";
import { backgroundColor, color } from "../config/themes";
import colors from "../config/colors";
import ReaderControls from "../components/ReaderControls";
import useReader from "../hooks/useReader";

function ReaderScreen({ navigation, route }) {
  const { ocrData } = route.params;
  const [theme, setTheme] = useState("light");
  const [hideOptions, setHideOptions] = useState(true);
  const { handlePause, handlePlay, handleReplay, paused, playing } = useReader(
    ocrData.text
  );

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
      <ScrollView style={styles.results}>
        <Text style={[styles.text, { color: color(theme) }]}>
          {ocrData.text}
        </Text>
      </ScrollView>
      <ReaderControls
        onPause={handlePause}
        onPlay={handlePlay}
        onReplay={handleReplay}
        paused={paused}
        playing={playing}
      />
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
  results: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 30,
  },
});

export default ReaderScreen;
