import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const HeaderLeft = ({ title, icon }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name={icon} size={24} color="orange" />
    </View>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 4,
    alignItems: "baseline",
  },
});
