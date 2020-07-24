import React from "react";
import { View, Text } from "react-native";
import colors from "../config/colors";
import { FontAwesome5 } from "@expo/vector-icons";

export default function SplashScreen() {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: colors.background,
        flexDirection: "row",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: colors.white, fontSize: 40, fontWeight: "bold" }}>
          Your
        </Text>
        <Text style={{ color: colors.white, fontSize: 40, fontWeight: "bold" }}>
          Reader
        </Text>
        <FontAwesome5
          color={colors.light}
          name="book-reader"
          size={40}
          style={{ marginTop: 15 }}
        />
      </View>
    </View>
  );
}
