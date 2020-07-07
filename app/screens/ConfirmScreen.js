import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import IconButton from "../components/IconButton";
import colors from "../config/colors";
import useOcr from "../hooks/useOcr";

function ConfirmScreen({ navigation, route }) {
  const { camera, photo } = route.params;
  const ocr = useOcr();

  const handleConfirm = async () => {
    try {
      //const result = await ocr.processPhoto(photo.uri);
      navigation.navigate("Reader", {
        ocrData: {
          text:
            "A narrow wedge of light from a half-open service hatch at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. He stared at the clinic, Molly took him to the simple Chinese hollow points Shin had sold him. A Dali clock hung on the wall between the bookcases, its distorted face sagging to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a heroin factory. Still it was a square of faint light. The last Case saw of Chiba were the dark angles of the car’s floor. Molly hadn’t seen the dead girl’s face swirl like smoke, to take on the wall between the bookcases, its distorted face sagging to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a broken mirror bent and elongated as they fell. It was disturbing to think of the Flatline as a gliding cursor struck sparks from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time.",
        },
      });
    } catch (error) {
      console.error("Error when performing text recognition.", error);
    }
  };

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
          onPress={handleConfirm}
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
