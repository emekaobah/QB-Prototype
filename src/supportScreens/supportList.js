import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView,
  Pressable,
  Dimensions,
  Linking,
  Platform,
} from "react-native";
import InfoRowCardWithIcon from "../components/InfoRowCardWithIcon";
import * as OpenAnything from "react-native-openanything";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SupportList = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <InfoRowCardWithIcon
          handleClick={() => navigation.navigate("FAQ")}
          title="Frequently Asked Questions"
          subtitle="Find answers to everything on QuickBucks"
          leftIcon="help-circle-outline"
        />
        <InfoRowCardWithIcon
          title="Chat with a Support Agent"
          subtitle="Chat with our team"
          leftIcon="chatbubbles-outline"
        />
        <InfoRowCardWithIcon
          title="help@quickbucks.com"
          subtitle="Send an email to our team "
          leftIcon="mail-outline"
        />
        <InfoRowCardWithIcon
          title="0700 300 000"
          subtitle="Speak with a Support Agent"
          leftIcon="call-outline"
        />

        <InfoRowCardWithIcon
          title="WhatsApp"
          subtitle="Connect with us on WhatsApp"
          leftIcon="logo-whatsapp"
        />
        <InfoRowCardWithIcon
          title="Facebook"
          subtitle="Connect with us on Facebook"
          leftIcon="logo-facebook"
        />
        <InfoRowCardWithIcon
          title="Instagram"
          subtitle="Connect with us on Instagram"
          leftIcon="logo-instagram"
        />
      </View>
    </SafeAreaView>
  );
};

export default SupportList;

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
