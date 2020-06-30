import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function IconButton({ color, name, onPress, size, style, title, titleStyle }) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Ionicons color={color} name={name} size={size} />
      {title && <Text style={[styles.text, titleStyle]}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default IconButton;
