import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import AppNavigator from "../AppNavigator";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import ResetLoginScreen from "./ResetLoginScreen";

const Stack = createStackNavigator();

export default function LoginNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        // ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
        // ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
      <Stack.Screen name="Reset" component={ResetLoginScreen} />

      <Stack.Screen name="App" component={AppNavigator} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313131",
    alignItems: "center",
    justifyContent: "center",
  },
});
