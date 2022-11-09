import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../utilities/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/core";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RegistrationScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  //   useEffect(() => {
  //     auth.onAuthStateChanged((user) => {
  //       if (user) {
  //         navigation.navigate("App");
  //       }
  //     });
  //   }, []);

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate("Login");
        console.log(`Registered with:`, user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        if (user) {
          navigation.navigate("App");
        }
        console.log(`Logged in with:`, user.email);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.content}>
          <View
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text style={{ fontSize: 48, fontWeight: "bold", color: "#fff" }}>
              Create a free account
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="First Name"
                value={email}
                onChangeText={(text) => setEmail(text)}
              ></TextInput>
            </View>
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              placeholder="BVN"
              value={email}
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              placeholder="BVN Phone Number"
              value={email}
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Email"
              secureTextEntry
            ></TextInput>
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              secureTextEntry
            ></TextInput>
          </View>
          <Pressable onPress={handleSignUp}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </View>
          </Pressable>

          <Text
            onPress={() => navigation.navigate("Login")}
            style={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Already have an account?{" "}
            <Text style={{ color: "#ed7e00" }}>Login</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

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
  inputStyle: {
    height: 42,
    backgroundColor: "#fff",
    width: "100%",

    marginVertical: 16,
    padding: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: "#ed7e00",
    width: "100%",
    borderRadius: 4,
    height: 48,
    marginVertical: 16,
  },
  buttonOutline: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 4,
    height: 48,
    borderWidth: 2,
    borderColor: "orange",
  },
  buttonText: {
    color: "#212121",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    padding: 8,
  },
});
