import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Pressable,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Accordian = ({ title, data }) => {
  const [expanded, setExpanded] = useState(false);

  // toggleExpand = () => {
  //   // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  //   setExpanded((prevState) => {
  //     return !prevState;
  //   });
  // };

  return (
    <View>
      <Pressable onPress={() => setExpanded(!expanded)}>
        <View style={styles.row}>
          <Text style={[styles.title, styles.font]}>{title}</Text>
          <Icon
            name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={30}
            color="orange"
          />
        </View>
      </Pressable>
      {expanded && (
        <View style={styles.child}>
          <Text style={{ color: "#ccc", lineHeight: 20, fontWeight: "400" }}>
            {data}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Accordian;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ccc",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 56,
    paddingLeft: 25,
    paddingRight: 16,
    alignItems: "center",
    backgroundColor: "#212121",
    marginVertical: 4,
  },

  child: {
    backgroundColor: "#212121",
    padding: 16,
    backgroundColor: "#414141",
    margin: 4,
    width: "100%",
  },
});
