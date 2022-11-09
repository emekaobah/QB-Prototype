import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeNavigator from "./homeScreens/HomeNavigator";
import TransactionNavigator from "./transactionScreens/transactionNavigator";
import SupportNavigator from "./supportScreens/supportNavigator";
import ProfileNavigator from "./profileScreens/profileNavigator";
TransactionNavigator;

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Transaction") {
            iconName = focused ? "reorder-four" : "reorder-four-outline";
          } else if (route.name === "Support") {
            iconName = focused ? "headset" : "headset-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerStyle: { backgroundColor: "#313131" },
        tabBarActiveTintColor: "#ed7e00",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#212121",
          borderTopWidth: 0,
          elevation: 0,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Transaction" component={TransactionNavigator} />
      <Tab.Screen name="Support" component={SupportNavigator} />

      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
