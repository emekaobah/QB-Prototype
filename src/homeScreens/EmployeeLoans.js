import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import Accordian from "../components/Accordian";
import { Employers } from "../utilities/data";
import Search from "../components/Search";
import InfoRowCardWithIcon from "../components/InfoRowCardWithIcon";
import { Ionicons } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const EmployeeLoans = () => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState(Employers);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.Employer
          ? item.Employer.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* <Search placeholder="Search over 1000 companies" /> */}
        <View style={styles.background}>
          <View style={styles.icon}>
            <Ionicons name="search" size={24} color="black" />
          </View>
          <TextInput
            type="text"
            placeholder="Search over 1000 companies"
            style={styles.inputStyle}
            value={search}
            onChangeText={(text) => searchFilterFunction(text)}
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={!search ? masterDataSource : filteredDataSource}
          renderItem={({ item }) => {
            return (
              <InfoRowCardWithIcon
                title={item.Employer}
                subtitle={`Interest:${item.Interest}% `}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default EmployeeLoans;

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
