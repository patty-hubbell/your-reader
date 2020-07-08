import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";

function AppButton({
  color = "primary",
  iconColor,
  iconName,
  iconSize,
  onPress,
  style,
  title,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style, { backgroundColor: colors[color] }]}
      underlayColor={colors.secondary}
    >
      <>
        {iconName && (
          <Ionicons
            color={iconColor}
            name={iconName}
            size={iconSize}
            style={styles.icon}
          />
        )}
        {iconName && title && <View style={styles.buffer} />}
        {title && <Text style={styles.text}>{title}</Text>}
      </>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buffer: {
    width: 15,
  },
  icon: {
    position: "absolute",
    left: 20,
  },
  container: {
    borderRadius: 25,
    justifyContent: "center",
    paddingVertical: 25,
    width: "100%",
  },
  text: {
    alignSelf: "center",
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    textTransform: "uppercase",
  },
});

export default AppButton;
