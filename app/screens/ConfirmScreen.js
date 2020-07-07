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

function ConfirmScreen({ navigation, route }) {
  const [loading, setLoading] = useState(false);
  const { camera, photo } = route.params;
  const ocr = useOcr();

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
        </View>
      </Modal>
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
            onPress={handleConfirm}
            size={65}
            style={styles.icon}
            title="Confirm"
            titleStyle={styles.iconTitle}
          />
        </View>
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
    width: "100%",
    height: "100%",
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
