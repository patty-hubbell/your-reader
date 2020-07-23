import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Modal,
  ActivityIndicator,
} from "react-native";

import IconButton from "../components/IconButton";
import colors from "../config/colors";
import useOcr from "../hooks/useOcr";
import ConfirmControls from "../components/ConfirmControls";

function ConfirmScreen({ navigation, route }) {
  const [loading, setLoading] = useState(false);
  const { camera, photo } = route.params;
  const ocr = useOcr();

  const handleConfirm = async () => {
    try {
      setLoading(true);
      //const result = await ocr.processPhoto(photo.uri);
      setLoading(false);
      navigation.navigate("Reader", {
        ocrData: {
          text:
            "Now this quiet courtyard, Sunday afternoon, this girl with a hand on his chest. A graphic representation of data abstracted from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time.",
        },
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
  options: {
    alignSelf: "center",
    bottom: 20,
    flexDirection: "row",
    position: "absolute",
  },
});

export default ConfirmScreen;
