import React, { useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Sound from "react-native-sound";

import colors from "../config/colors";
import useOcr from "../hooks/useOcr";
import ConfirmControls from "../components/ConfirmControls";

function ConfirmScreen({ navigation, route }) {
  const [loading, setLoading] = useState(false);
  const { camera, photo } = route.params;
  const ocr = useOcr();

  // Enable audio playback in silent mode
  Sound.setCategory("Playback");

  const handleConfirm = async () => {
    try {
      setLoading(true);
      const result = await ocr.processPhoto(photo.uri);
      setLoading(false);
      navigation.navigate("Reader", {
        ocrData: result,
      });
    } catch (error) {
      console.error("Error when performing text recognition.", error);
    }
  };

  return (
    <>
      <Modal animationType="fade" visible={loading}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            animating={true}
            color={colors.secondary}
            size="large"
          />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </Modal>
      <ImageBackground
        resizeMode="contain"
        source={{ uri: photo.uri }}
        style={styles.image}
      >
        {camera && (
          <ConfirmControls
            onRetake={() => navigation.navigate("Camera")}
            onConfirm={() => handleConfirm()}
          />
        )}
        {!camera && (
          <ConfirmControls
            onRepick={() => navigation.popToTop()}
            onConfirm={() => handleConfirm()}
          />
        )}
      </ImageBackground>
    </>
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
    backgroundColor: colors.black,
    height: "100%",
    width: "100%",
  },
  loadingContainer: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  loadingText: {
    color: colors.secondary,
    fontWeight: "bold",
    marginTop: 5,
  },
  options: {
    alignSelf: "center",
    bottom: 20,
    flexDirection: "row",
    position: "absolute",
  },
});

export default ConfirmScreen;
