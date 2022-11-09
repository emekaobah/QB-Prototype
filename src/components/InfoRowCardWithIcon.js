import { StyleSheet, Text, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as OpenAnything from "react-native-openanything";
import React from "react";

const InfoRowCardWithIcon = ({ title, subtitle, leftIcon, handleClick }) => {
  return (
    <Pressable onPress={handleClick}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          backgroundColor: "#212121",
          height: 56,
          borderRadius: 8,
          padding: 4,
          marginVertical: 4,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View>
            <Ionicons
              name={leftIcon}
              size={24}
              color="#ed7e00"
              style={{ marginRight: 8 }}
            />
          </View>
          <View>
            <Text
              style={{
                alignSelf: "flex-start",
                color: "#ccc",
                fontWeight: "bold",
              }}
            >
              {title}
            </Text>
            <Text
              style={{ alignSelf: "flex-start", color: "#aaa", fontSize: 12 }}
            >
              {subtitle}
            </Text>
          </View>
        </View>
        <Ionicons name="md-chevron-forward" size={24} color="#ed7e00" />
      </View>
    </Pressable>
  );
};

export default InfoRowCardWithIcon;

const styles = StyleSheet.create({});
