import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  SafeAreaView,
  Dimensions,
} from "react-native";
InfoRowCardWithIcon;
import { getAuth, signOut } from "firebase/auth";
import InfoRowCardWithIcon from "../components/InfoRowCardWithIcon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProfileList = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // const user = userCredentials.email;
        console.log(`Logged out successfully`);
        navigation.navigate("Login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <InfoRowCardWithIcon
          title="Profile"
          subtitle="Update your personal information"
          leftIcon="person-outline"
        />
        <InfoRowCardWithIcon
          title="Change PIN"
          subtitle="Change your 4 digit transaction PIN"
          leftIcon="keypad-outline"
        />
        <InfoRowCardWithIcon
          title="Change Password"
          subtitle="Change your login password"
          leftIcon="lock-closed-outline"
        />
        <InfoRowCardWithIcon
          title="App Settings"
          subtitle="Switch app theme, dark mode, etc"
          leftIcon="settings-outline"
        />

        <Pressable onPress={handleSignOut}>
          <View style={styles.button}>
            <Text style={[styles.buttonText, { color: "#212121" }]}>
              Logout
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ProfileList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313131",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    width: windowWidth * 0.9,
    marginTop: 8,
  },
  button: {
    backgroundColor: "#ed7e00",
    width: "100%",
    borderRadius: 4,
    height: 48,
    marginVertical: 16,
  },

  buttonText: {
    color: "#212121",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    padding: 8,
  },
});
