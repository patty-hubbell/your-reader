import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { StyleSheet, Button } from "react-native";

import WelcomeScreen from "../screens/WelcomeScreen";
import CameraScreen from "../screens/CameraScreen";
import ConfirmScreen from "../screens/ConfirmScreen";
import ReaderScreen from "../screens/ReaderScreen";
import colors from "../config/colors";
import HeaderButton from "../components/HeaderButton";

function AppNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
            borderBottomWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
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

const styles = StyleSheet.create({
  optionsButton: {
    backgroundColor: "red",
  },
});

export default AppNavigator;
