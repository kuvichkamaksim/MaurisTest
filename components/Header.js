import { StyleSheet, Text, View, Image } from "react-native";
import React, {Component} from "react";



export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.mainHeader}>
        <Image source={require("../pictures/header.png")}
               style={styles.mainHeaderImage}
        />
        <Text style={styles.mainHeaderArticle}>SUPER FILM</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainHeader: {
    width: "100%",
    height: "100%"
  },
  mainHeaderImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute"
  },
  mainHeaderArticle: {
    fontSize: 25,
    color: "black",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto"
  },
});
