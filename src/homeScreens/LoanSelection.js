import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Dimensions,
  Pressable,
  TextInput,
  SafeAreaView,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoanSelection = ({ navigation }) => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          Maximum Loan Amount
        </Text>
        <View style={styles.displayCard}></View>
        <Text style={{ color: "#fff" }}>How much do you want to borrow?</Text>

        <TextInput style={styles.inputStyle}></TextInput>
        <Pressable onPress={() => navigation.navigate("Loan Details")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoanSelection;

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
  displayCard: {
    width: "100%",
    height: windowHeight * 0.2,
    backgroundColor: "#212121",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#ed7e00",
    width: "100%",
    borderRadius: 4,
    height: 48,
  },
  buttonText: {
    color: "#212121",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    padding: 8,
  },
  inputStyle: {
    height: 42,
    backgroundColor: "#fff",
    width: "100%",
    marginVertical: 16,
    padding: 8,
    borderRadius: 4,
  },
});
