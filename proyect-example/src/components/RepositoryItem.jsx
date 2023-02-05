import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./ReposityStats";
import theme from "../theme";

const RepositoryItemHeader = (props) => (
    <View>
      <Image style={styles.img} source={{ uri: props.ownerAvatarUrl }} />
      <StyledText fontSize="subheading" fontWeight="bold" color="primary">
        FullName: {props.fullName}{" "}
      </StyledText>
      <StyledText>Description: {props.description} </StyledText>
      <StyledText style={styles.lenguage}>Language: {props.language} </StyledText>
    </View>
  );

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
    lenguage:{
        padding:4,
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
        borderRadius: 5,
        alignSelf: "flex-start",
        overflow:'hidden',
    },
    img:{
        width: 50,
        height: 50,
        borderRadius: 5,
    }
  
});

export default RepositoryItem;
