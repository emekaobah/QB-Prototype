import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Dimensions,
} from "react-native";
import { TableHeading, TableData } from "../components/TableRow4";
import { SCHEDULE } from "../utilities/data";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RepaymentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TableHeading />

        <FlatList
          ItemSeparatorComponent={() => (
            <View
              style={{ backgroundColor: "gray", height: 1, marginVertical: 4 }}
            />
          )}
          showsVerticalScrollIndicator={false}
          data={SCHEDULE[0].repayments}
          renderItem={({ item }) => {
            return (
              <>
                <TableData
                  date={item.date}
                  principal={item.principal}
                  interest={item.interest}
                  status={item.status}
                />
              </>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default RepaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313131",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    width: windowWidth * 0.9,
    marginTop: 8,
  },
});
