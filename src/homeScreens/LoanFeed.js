import React from "react";
import { DATA } from "../utilities/data";
import LoanInfoCard from "../components/LoanInfoCard";
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Button,
  SafeAreaView,
  Dimensions,
} from "react-native";
import HeaderLeft from "../components/HeaderLeft";
import HeaderRight from "../components/HeaderRight";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoanFeed = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <HeaderLeft title="Hello, Chukwuemeka" />
          <HeaderRight title="" icon="notifications-outline" />
        </View>
        <View
          style={[
            styles.displayCard,
            { alignItems: "flex-start", justifyContent: "center" },
          ]}
        >
          <Text
            style={{
              color: "#ccc",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            <Text style={{ color: "#ed7e00" }}>Congrats!</Text> You have
            multiple loan offers!
          </Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => {
            return (
              <Pressable onPress={() => navigation.navigate("Employee Loans")}>
                <LoanInfoCard
                  title={item.loanType}
                  interest={item.Interest}
                  tenor={item.loanTenor}
                  amount={item.amount}
                  icon={item.icon}
                />
              </Pressable>
            );
          }}
          keyExtractor={(item) => item.Id}
          numColumns="2"
        />
      </View>
    </SafeAreaView>
  );
};

export default LoanFeed;

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
  displayCard: {
    width: windowWidth * 0.89,
    height: windowHeight * 0.1,
    backgroundColor: "#212121",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
});
