import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Chat Screen</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313131",
    alignItems: "center",
    justifyContent: "center",
  },
});
