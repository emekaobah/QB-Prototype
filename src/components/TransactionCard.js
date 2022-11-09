import React from "react";
import { View, Button, StyleSheet, Pressable, Text } from "react-native";
import TableRow from "./TableRow";

const TransactionCard = ({ date, product, amount, stat, nav }) => {
  return (
    <View>
      <TableRow title="Transaction Date" content={date} />
      <TableRow title="Product" content={product} />
      <TableRow title="Loan Amount" content={amount} />
      <TableRow
        title="Status"
        content={
          <Text
            style={[stat === "Performing" ? styles.active : styles.outstanding]}
          >
            {stat}
          </Text>
        }
      />
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  active: {
    color: "green",
  },
  outstanding: {
    color: "red",
  },
});
