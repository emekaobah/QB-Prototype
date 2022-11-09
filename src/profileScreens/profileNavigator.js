import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProfileList from "./profileList";
import InfoRowCardWithIcon from "../components/InfoRowCardWithIcon";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#313131",
        },

        headerBackTitleVisible: false,
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Stack.Screen
        options={{
          headerLeft: () => null,
        }}
        name="User Profile"
        component={ProfileList}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313131",
    alignItems: "center",
    justifyContent: "center",
  },
});
