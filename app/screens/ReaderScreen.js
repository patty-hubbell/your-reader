import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";
import IconButton from "../components/IconButton";

function ReaderScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reader Screen</Text>
      <IconButton
        color={colors.white}
        name="ios-arrow-back"
        onPress={() => navigation.popToTop()}
        size={50}
      />
      <IconButton
        color={colors.white}
        name="ios-arrow-forward"
        onPress={() => navigation.popToTop()}
        size={50}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default ReaderScreen;
