import { StyleSheet, Text, View, Image } from "react-native";
import { Calendar } from "react-native-calendars";
import React, {Component} from "react";
import Header from "./Header.js";

type Props = {};

export default class WelcomeScreen extends Component<Props> {

  static navigationOptions = {
    headerTitle: <Header />,
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainContainer}>

        <View style={styles.mainBody}>
          <Image source ={require("../pictures/tv.png")} style={styles.tvImage}/>
          <Text style={styles.mainBodyArticle}>
            Для получения списка cериалов, пожалуйста, выберите необходимый
            месяц и день.
          </Text>
        </View>

        <Calendar style={styles.calendar}
          onDayPress={(date) => navigate("MoviesList", {currDate: date})}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  mainBody: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center"
  },
  tvImage: {
    flex: 3,
    width: "50%",
    resizeMode: "contain",
    marginTop: "5%"
  },
  mainBodyArticle: {
    flex: 1,
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
    width: "55%",
    color: "black"
  },
  calendar: {
    flex: 1,
    marginBottom: "10%"
  },
});
