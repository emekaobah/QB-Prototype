import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = ({ title, placeholder }) => {
    const [data, setData] = useState('')
    const[filteredData, setFilteredData] = useState('')
    
  return (
    <View style={styles.background}>
      <View style={styles.icon}>
        <Ionicons name="search" size={24} color="black" />
      </View>
      <TextInput
        type="text"
        placeholder={placeholder}
        style={styles.inputStyle}
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    height: 42,
    marginVertical: 16,
  },
  inputStyle: {
    backgroundColor: "#fff",
    flex: 1,
    height: "100%",
    fontSize: 16,

    paddingVertical: 8,
    borderTopEndRadius: 4,
    borderBottomRightRadius: 4,
  },
  icon: {
    borderTopStartRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: "#fff",
    height: "100%",
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignSelf: "center",
  },
});
