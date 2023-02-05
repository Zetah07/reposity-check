import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import repositories from "../data/repositories.js";
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={
        () => <View style={styles.container} />
      }
      renderItem={({ item: repo }) => (
       <RepositoryItem {...repo}/>
      )}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
    container: {
        height: 10,
        backgroundColor: "white"
    }
})

export default RepositoryList;
