import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppNavigator from "./app/navigation/AppNavigator";
import CameraScreen from "./app/screens/CameraScreen";

export default function App() {
  return <AppNavigator />;
}
