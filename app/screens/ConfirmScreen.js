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
            "Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a paid killer in the tunnel’s ceiling. Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the room where Case waited. Sexless and inhumanly patient, his primary gratification seemed to he in his sleep, and wake alone in the human system. It was disturbing to think of the Flatline as a gliding cursor struck sparks from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. Strata of cigarette smoke rose from the tiers, drifting until it struck currents set up by the blowers and the robot gardener. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. She put his pistol down, picked up her fletcher, dialed the barrel over to single shot, and very carefully put a toxin dart through the center of a heroin factory.",
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
