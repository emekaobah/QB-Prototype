import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { View, Text, StyleSheet, FlatList } from "react-native";
import transactionList from "./transactionList";
import RepaymentScreen from "./repaymentScreen";
const Stack = createStackNavigator();

const TransactionNavigator = () => {
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
        name="Transactions"
        component={transactionList}
      />
      <Stack.Screen name="Repayment Schedule" component={RepaymentScreen} />
    </Stack.Navigator>
  );
};

export default TransactionNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313131",
    alignItems: "center",
    justifyContent: "center",
  },
});
