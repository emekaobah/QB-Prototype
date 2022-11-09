import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { PAYDAYFAQ } from "../utilities/data";
import Accordian from "../components/Accordian";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PaydayLoanFAQ = () => {
  const [faq, setFaq] = useState(PAYDAYFAQ);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ borderRadius: 16, color: "#212121" }}>
        <View style={styles.content}>
          <FlatList
            data={faq}
            renderItem={({ item }) => {
              return <Accordian title={item.question} data={item.answer} />;
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaydayLoanFAQ;

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
