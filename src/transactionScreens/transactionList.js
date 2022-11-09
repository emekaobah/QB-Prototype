import React from "react";
import { SCHEDULE } from "../utilities/data";
import TransactionCard from "../components/TransactionCard";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView,
  Pressable,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const TransactionList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          // ItemSeparatorComponent={() => (
          //   <View
          //     style={{ backgroundColor: "gray", height: 1, marginVertical: 4 }}
          //   />
          // )}
          showsVerticalScrollIndicator={false}
          data={SCHEDULE}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  backgroundColor: "#212121",
                  marginVertical: 8,
                  borderRadius: 8,
                  padding: 8,
                }}
              >
                <TransactionCard
                  date={item.booking}
                  product={item.loanType}
                  amount={item.amount}
                  stat={item.status}
                  nav={navigation}
                />
                <View style={styles.buttonGroup}>
                  <Pressable>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Pay Off Now</Text>
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => navigation.navigate("Repayment Schedule")}
                  >
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>
                        View Repayment Schedule
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default TransactionList;

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
  title: {
    fontSize: 32,
    color: "#fff",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    // backgroundColor: "#ccc",
    width: "100%",
    borderRadius: 4,
    height: 42,
    paddingVertical: 8,
    // borderColor: "orange",
    // borderWidth: 0.2,
  },
  buttonText: {
    // color: "#212121",
    color: "#ed7e00",
    fontSize: 14,
    fontWeight: "bold",
    padding: 4,
  },
});
