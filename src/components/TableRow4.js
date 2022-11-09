import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const TableHeading = () => {
  return (
    <View>
      <View style={styles.tableRowStyle}>
        <Text style={styles.tableHeaderStyle}>Date</Text>
        <Text style={styles.tableHeaderStyle}>Principal</Text>
        <Text style={styles.tableHeaderStyle}>Interest</Text>
        <Text style={styles.tableHeaderStyle}>Status</Text>
      </View>
      {/* <Text style={styles.tableHeaderContent}>{content}</Text> */}
    </View>
  );
};

export const TableData = ({ date, principal, interest, status }) => {
  return (
    <View>
      <View style={styles.tableRowStyle}>
        <Text style={styles.tableHeaderContent}>{date}</Text>
        <Text style={styles.tableHeaderContent}>{principal}</Text>
        <Text style={styles.tableHeaderContent}>{interest}</Text>
        <Text style={styles.tableHeaderContent}>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tableRowStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  tableHeaderStyle: {
    color: "#fff",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  tableHeaderContent: {
    color: "#ccc",
    fontSize: 14,
    alignSelf: "flex-start",
  },
});
