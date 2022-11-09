import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Dimensions,
  StatusBar,
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

const LoginScreen = () => {
  const [email, setEmail] = useState("apptesting@emekaobah.com");
  const [password, setPassword] = useState("000000");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
          setIsLoggedIn(true);
          navigation.navigate("App");
        }
        console.log(`Logged in with:`, user.email);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.content}>
          <View
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 48, fontWeight: "bold", color: "#fff" }}>
                QuickBucks
              </Text>
              <Text style={{ lineHeight: 18, fontSize: 15, color: "#fff" }}>
                TM
              </Text>
            </View>
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter your password"
              secureTextEntry
            ></TextInput>
          </View>
          <Text
            onPress={() => navigation.navigate("Reset")}
            style={{
              fontWeight: "bold",
              textAlign: "right",
              fontSize: 16,
              color: "#ed7e00",
              marginBottom: 8,
            }}
          >
            Forgot password?
          </Text>
          <Pressable onPress={handleLogin}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </Pressable>

          <Text
            onPress={() => navigation.navigate("Register")}
            style={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Don't have account?{" "}
            <Text style={{ color: "#ed7e00" }}>Sign up</Text>
          </Text>

          {/* <Pressable onPress={handleSignUp}>
            <View style={styles.buttonOutline}>
              <Text style={[styles.buttonText, { color: "black" }]}>
                Register
              </Text>
            </View>
          </Pressable> */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
    borderColor: "#ed7e00",
  },
  buttonText: {
    color: "#212121",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    padding: 8,
  },
});
