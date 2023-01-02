import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { View, Text, StyleSheet, FlatList } from "react-native";
import LoanFeed from "./LoanFeed";
import LoanDetail from "./LoanDetail";
import LoanSelection from "./LoanSelection";
import LoanDisbursement from "./LoanDisbursement";
import HeaderLeft from "../components/HeaderLeft";
import HeaderRight from "../components/HeaderRight";
import EmployeeLoans from "./EmployeeLoans";

const Stack = createStackNavigator();

const HomeNavigator = () => {
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
          alignSelf: "center",
        },
      }}
    >
      <Stack.Screen
        options={{
          headerLeft: () => {
            null;
          },
          headerRight: () => null,
          headerTitle: "",
        }}
        name="Loans"
        component={LoanFeed}
      />
      <Stack.Screen
        options={{}}
        name="Loan Selection"
        component={LoanSelection}
      />
      <Stack.Screen name="Loan Details" component={LoanDetail} />
      <Stack.Screen name="Loan Disbursement" component={LoanDisbursement} />
      <Stack.Screen name="Employee Loans" component={EmployeeLoans} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313131",
    alignItems: "center",
    justifyContent: "center",
  },
});
