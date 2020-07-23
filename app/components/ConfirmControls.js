import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default function ConfirmControls({
  onRepick,
  onRetake,
  onCrop,
  onConfirm,
}) {
  return (
    <View style={styles.container}>
      {onRepick && (
        <TouchableOpacity onPress={onRepick} style={styles.redoContainer}>
          <Text style={styles.text}>Pick Again</Text>
        </TouchableOpacity>
      )}
      {onRetake && (
        <TouchableOpacity onPress={onRetake} style={styles.redoContainer}>
          <Text style={styles.text}>Retake</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onConfirm} style={styles.confirmContainer}>
        <Text style={styles.text}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    bottom: 40,
    height: 50,
    flexDirection: "row",
    position: "absolute",
    width: "90%",
  },
  redoContainer: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    flex: 1,
    justifyContent: "center",
    marginRight: 2,
  },
  confirmContainer: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    flex: 1,
    justifyContent: "center",
    marginLeft: 2,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
