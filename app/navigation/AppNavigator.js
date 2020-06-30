import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import CameraScreen from "../screens/CameraScreen";
import ConfirmScreen from "../screens/ConfirmScreen";
import ReaderScreen from "../screens/ReaderScreen";

function AppNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={WelcomeScreen}
          name="Welcome"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={CameraScreen}
          name="Camera"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={ConfirmScreen}
          name="Confirm"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={ReaderScreen}
          name="Reader"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
