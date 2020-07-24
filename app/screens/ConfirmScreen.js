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

import IconButton from "../components/IconButton";
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
      //const result = await ocr.processPhoto(photo.uri);
      setLoading(false);
      navigation.navigate("Reader", {
        ocrData: {
          text:
            "Case felt the edge of the spherical chamber. He’d waited in the tunnel’s ceiling. A graphic representation of data abstracted from the banks of every computer in the Japanese night like live wire voodoo and he’d cry for it, cry in his devotion to esoteric forms of tailor-worship. The semiotics of the bright void beyond the chain link. A narrow wedge of light from a half-open service hatch framed a heap of discarded fiber optics and the chassis of a painted jungle of rainbow foliage, a lurid communal mural that completely covered the hull of the blowers and the amplified breathing of the fighters. The semiotics of the car’s floor. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his capsule in some coffin hotel, his hands clawed into the shadow of the console.",
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
