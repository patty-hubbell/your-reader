import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import WelcomeScreen from "../screens/WelcomeScreen";
import CameraScreen from "../screens/CameraScreen";
import ConfirmScreen from "../screens/ConfirmScreen";
import ReaderScreen from "../screens/ReaderScreen";
import colors from "../config/colors";
import IconButton from "../components/IconButton";

function AppNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontSize: 24,
          },
        }}
      >
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
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton
                label="Restart"
                labelStyle={{ fontSize: 20 }}
                onPress={() => navigation.popToTop()}
                tintColor={colors.white}
              />
            ),
            title: "Results",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
