import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

export default function ConfirmControls() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Retake</Text>
      </TouchableOpacity>
      <View />
      <TouchableOpacity>
        <Text>Crop</Text>
      </TouchableOpacity>
      <View />
      <TouchableOpacity>
        <Text>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    borderRadius: 15,
    bottom: 10,
    backgroundColor: colors.primary,
    height: 75,
    position: "absolute",
    width: "90%",
  },
});
