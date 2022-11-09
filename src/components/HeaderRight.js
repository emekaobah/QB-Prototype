import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const HeaderRight = ({ title, icon }) => {
  return (
    <View
      style={{
        // flexDirection: "row",
        marginRight: 4,
        alignItems: "baseline",
      }}
    >
      <Ionicons name={icon} size={24} color="#ed7e00" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
