import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function HeaderButton({
  color = "primary",
  iconColor,
  iconName,
  iconSize,
  onPress,
  style,
  title,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <>
        {iconName && (
          <Ionicons
            color={iconColor}
            name={iconName}
            size={iconSize}
            style={styles.icon}
          />
        )}
        {title && <Text style={styles.text}>{title}</Text>}
      </>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingRight: 5,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 8,
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
});

export default HeaderButton;
