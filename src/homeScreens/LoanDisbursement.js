import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const LoanDisbursement = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Loan Disbursement</Text>
    </View>
  );
};

export default LoanDisbursement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313131",
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    height: 42,
    backgroundColor: "#ccc",
    width: windowWidth * 0.9,
    marginVertical: 16,
    padding: 8,
    borderRadius: 4,
  },

});
