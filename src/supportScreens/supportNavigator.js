import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SupportList from "./supportList";
import FaqScreen from "./FaqScreen";
import ChatScreen from "./chatScreen";
import PaydayLoanFAQ from "./PaydayLoanFAQ";

const Stack = createStackNavigator();

const SupportNavigator = () => {
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
        name="Customer Support"
        component={SupportList}
      />
      <Stack.Screen name="FAQ" component={FaqScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="PaydayFaq" component={PaydayLoanFAQ} />
    </Stack.Navigator>
  );
};

export default SupportNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313131",
    alignItems: "center",
    justifyContent: "center",
  },
});
