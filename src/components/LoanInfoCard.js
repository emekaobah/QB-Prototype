import React from "react";

import { View, StyleSheet, Dimensions, Text } from "react-native";
import TableRow from "./TableRow";
import { FontAwesome5 } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoanInfoCard = ({
  title,
  interest,
  tenor,
  amount,
  handleClick,
  icon,
}) => {
  return (
    <View style={styles.card}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <FontAwesome5
          name={icon}
          size={24}
          color="#ed7e00"
          style={{ alignSelf: "center", paddingVertical: 4 }}
        />
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={(styles.title, { color: "#ccc", fontWeight: "bold" })}>
          {amount}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={
            (styles.title,
            {
              color: "#ccc",
              textTransform: "uppercase",
              fontSize: 12,
              padding: 2,

              // fontWeight: "bold",
              // backgroundColor: "orange",
              alignSelf: "flex-start",
            })
          }
        >
          {tenor}
        </Text>
        <Text style={(styles.title, { color: "#cccccc", fontSize: 12 })}>
          {interest}
        </Text>
      </View>
    </View>
  );
};

export default LoanInfoCard;

const styles = StyleSheet.create({
  card: {
    width: windowWidth * 0.43,
    height: windowWidth * 0.35,
    backgroundColor: "#212121",
    margin: 4,
    padding: 16,
    borderRadius: 8,
    flexDirection: "column",
    justifyContent: "space-between",
    // shadowColor: "black",
    // shadowOpacity: 0.3,
    // shadowRadius: 1,
    // shadowOffset: { height: 1, width: 0.3 },
  },
  title: {
    fontSize: 10,
    color: "#ed7e00",
    textTransform: "uppercase",
  },
});
