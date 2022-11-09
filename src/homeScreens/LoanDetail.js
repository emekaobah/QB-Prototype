import React from "react";
import { useNavigation } from "@react-navigation/native";
import TableRow from "../components/TableRow";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  Dimensions,
  Pressable,
  SafeAreaView,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoanDetail = ({ navigation }) => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TableRow title="Product" content="Salary Advance" />
        <TableRow title="Interest Rate" content="4.8%" />
        <TableRow title="Tenor" content="6 months" />
        <TableRow title="Loan Amount" content="N600,000" />
        <TableRow title="Management Fee" content="N6,000" />
        <TableRow title="Credit Life" content="N6,000" />

        <Text style={{ color: "#ccc", marginTop: 16, fontSize: 12 }}>
          Enter your PIN to conclude your loan application
        </Text>
        <TextInput style={styles.inputStyle}></TextInput>
        <Pressable onPress={() => navigation.navigate("Loan Disbursement")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Loan</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoanDetail;

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
