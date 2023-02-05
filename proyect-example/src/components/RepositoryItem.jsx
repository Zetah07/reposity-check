import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./ReposityStats";
import theme from "../theme";

const RepositoryItemHeader = ({ownerAvatarUrl, fullName, description, language}) => (
    <View>
      <Image style={styles.img} source={{ uri: ownerAvatarUrl }} />
      <StyledText fontSize="subheading" fontWeight="bold" color="primary">
        FullName: {fullName}{" "}
      </StyledText>
      <StyledText>Description: {description} </StyledText>
      <StyledText style={styles.language}>Language: {language} </StyledText>
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
  language:{
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
