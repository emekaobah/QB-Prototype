import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/AppNavigator";
import LoginNavigator from "./src/loginScreens/LoginNavigator";
const theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    background: "black",
  },
};
export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle="dark-content" />
      <LoginNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
