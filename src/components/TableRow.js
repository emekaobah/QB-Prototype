import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TableRow = ({ title, content }) => {
  return (
    <View>
      <View style={styles.tableRowStyle}>
        <Text style={styles.tableHeaderStyle}>{title}</Text>
        <Text style={styles.tableHeaderContent}>{content}</Text>
      </View>
    </View>
  );
};

export default TableRow;

const styles = StyleSheet.create({
  tableRowStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  tableHeaderStyle: {
    color: "#ccc",
    fontSize: 12,
    textTransform: "uppercase",
  },
  tableHeaderContent: {
    color: "#ccc",
    fontSize: 16,
    fontWeight: "bold",
  },
});
