import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Dimensions,
} from "react-native";
import InfoRowCardWithIcon from "../components/InfoRowCardWithIcon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FaqScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <InfoRowCardWithIcon
          title="Payday Loan FAQ"
          subtitle="Learn more about Payday Loan"
          leftIcon="help-circle-outline"
          handleClick={() => navigation.navigate("PaydayFaq")}
        />

        <InfoRowCardWithIcon
          title="Salary Advance Loan FAQ"
          subtitle="Learn more about Salary Advance Loan"
          leftIcon="help-circle-outline"
        />

        <InfoRowCardWithIcon
          title="Small Ticket Personal Loan FAQ"
          subtitle="Learn more about Small Ticket Personal Loan"
          leftIcon="help-circle-outline"
        />

        <InfoRowCardWithIcon
          title="Device Finance FAQ"
          subtitle="Learn more about Device Finance"
          leftIcon="help-circle-outline"
        />

        <InfoRowCardWithIcon
          title="Lending Against Turnover FAQ"
          subtitle="Learn more about Payday Loan"
          leftIcon="help-circle-outline"
        />

        <InfoRowCardWithIcon
          title="Instant Business Loan FAQ"
          subtitle="Learn more about Instant Business Loan"
          leftIcon="help-circle-outline"
        />
      </View>
    </View>
  );
};

export default FaqScreen;

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
