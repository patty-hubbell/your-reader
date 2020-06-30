import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Camera } from "expo-camera";
import Constants from "expo-constants";

import colors from "../config/colors";
import IconButton from "../components/IconButton";
import useCamera from "../hooks/useCamera";

function CameraScreen({ navigation }) {
  const {
    hasPermission,
    type,
    flash,
    takePicture,
    flipCamera,
    handleFlash,
  } = useCamera();
  const [cameraRef, setCameraRef] = useState(null);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Camera
      flashMode={flash}
      style={styles.camera}
      type={type}
      ref={(ref) => setCameraRef(ref)}
    >
      <IconButton
        color={colors.white}
        name="ios-arrow-back"
        onPress={() => navigation.popToTop()}
        size={30}
        style={styles.back}
        titleStyle={styles.backTitle}
        title="Back"
      />
      <View style={styles.optionsContainer}>
        <IconButton
          color={colors.white}
          name="ios-reverse-camera"
          onPress={flipCamera}
          size={30}
          style={styles.options}
          title="Flip"
          titleStyle={styles.optionsTitle}
        />
        {flash === Camera.Constants.FlashMode.on &&
          type === Camera.Constants.Type.back && (
            <IconButton
              color={colors.white}
              name="ios-flash"
              onPress={handleFlash}
              size={30}
              style={styles.options}
              title="Flash"
              titleStyle={styles.optionsTitle}
            />
          )}
        {flash === Camera.Constants.FlashMode.off &&
          type === Camera.Constants.Type.back && (
            <IconButton
              color={colors.white}
              name="ios-flash-off"
              onPress={handleFlash}
              size={30}
              style={styles.options}
              title="Flash"
              titleStyle={styles.optionsTitle}
            />
          )}
      </View>
      <IconButton
        color={colors.white}
        name="ios-radio-button-on"
        onPress={() => takePicture(cameraRef, navigation)}
        size={90}
        style={styles.snap}
      />
    </Camera>
  );
}

const styles = StyleSheet.create({
  back: {
    alignItems: "center",
    height: 60,
    left: 10,
    position: "absolute",
    top: Constants.statusBarHeight,
    width: 60,
  },
  backTitle: {
    color: colors.white,
    fontSize: 15,
    position: "absolute",
    top: 34,
  },
  camera: {
    flex: 1,
  },
  options: {
    alignItems: "center",
    marginBottom: 15,
    width: "100%",
  },
  optionsContainer: {
    alignItems: "center",
    position: "absolute",
    right: 10,
    top: Constants.statusBarHeight,
    width: 60,
  },
  optionsTitle: {
    color: colors.white,
    fontSize: 15,
  },
  snap: {
    alignSelf: "center",
    bottom: 20,
    position: "absolute",
  },
});

export default CameraScreen;
