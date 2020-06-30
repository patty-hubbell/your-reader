import React, { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import useCameraRoll from "../hooks/useCameraRoll";
import IconButton from "../components/IconButton";
import InfoScreen from "./InfoScreen";

function WelcomeScreen({ navigation }) {
  const cameraRoll = useCameraRoll();
  const [modalVisible, setModalVisible] = useState(false);

  const handleCameraRollPress = async () => {
    if (cameraRoll.hasPermission) {
      const photo = await cameraRoll.pickImage();

      if (photo) {
        navigation.navigate("Confirm", { photo: photo, camera: false });
      }
    } else {
      alert("Permission is necessary to access Camera Roll.");
    }
  };

  return (
    <>
      <Modal animationType="fade" visible={modalVisible}>
        <InfoScreen closeModal={() => setModalVisible(false)} />
      </Modal>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.text}>Your Reader</Text>
          <FontAwesome5 color={colors.light} name="book-reader" size={40} />
        </View>
        <AppButton
          iconName="ios-camera"
          iconColor={colors.white}
          iconSize={35}
          onPress={() => navigation.navigate("Camera")}
          style={styles.button}
          title="Take Picture"
        />
        <AppButton
          iconName="ios-albums"
          iconColor={colors.white}
          iconSize={35}
          onPress={handleCameraRollPress}
          style={styles.button}
          title="Camera Roll"
        />
        <IconButton
          color={colors.white}
          name="ios-information-circle-outline"
          size={65}
          style={styles.info}
          onPress={() => setModalVisible(true)}
          titleStyle={styles.infoTitle}
          title="Info"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  info: {
    alignItems: "center",
    bottom: 20,
    height: 80,
    position: "absolute",
    right: 15,
  },
  infoTitle: {
    color: colors.white,
    fontSize: 18,
    position: "absolute",
    top: 59,
  },
  logo: {
    flexDirection: "row",
    marginBottom: 40,
  },
  text: {
    color: colors.white,
    fontSize: 40,
    fontWeight: "bold",
    marginRight: 20,
  },
});

export default WelcomeScreen;
