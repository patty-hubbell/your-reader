import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import IconButton from "../components/IconButton";
import colors from "../config/colors";

function ConfirmScreen({ navigation, route }) {
  const { camera, photo } = route.params;

  return (
    <ImageBackground source={{ uri: photo.uri }} style={styles.image}>
      <View style={styles.options}>
        {camera && (
          <IconButton
            color={colors.white}
            name="ios-refresh"
            onPress={() => navigation.navigate("Camera")}
            size={65}
            style={styles.icon}
            title="Retake"
            titleStyle={styles.iconTitle}
          />
        )}
        {!camera && (
          <IconButton
            color={colors.white}
            name="ios-refresh"
            onPress={() => navigation.popToTop()}
            size={65}
            style={styles.icon}
            title="Pick Again"
            titleStyle={styles.iconTitle}
          />
        )}
        <View style={styles.buffer} />
        <IconButton
          color={colors.white}
          name="ios-checkmark-circle"
          onPress={() => navigation.navigate("Reader", { photo: photo })}
          size={65}
          style={styles.icon}
          title="Confirm"
          titleStyle={styles.iconTitle}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buffer: {
    width: 50,
  },
  iconTitle: {
    color: colors.white,
    fontSize: 20,
    textAlign: "center",
  },
  icon: {
    alignItems: "center",
    height: 100,
    justifyContent: "center",
    width: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  options: {
    alignSelf: "center",
    bottom: 20,
    flexDirection: "row",
    position: "absolute",
  },
});

export default ConfirmScreen;
