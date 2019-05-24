import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import getMoviesData from "../lib/queryToTvMaze.js";
import convertMonth from "../lib/monthConverter.js";
import React, {Component} from "react";
import Header from "./Header.js";

type Props = {};

export default class MoviesList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { movies: [],
                   date: "",
                   isExpanded: false
                 };
    this._onClick = this._onClick.bind(this);
  }


// 'id',
// 'url',
// 'name',
// 'season',
// 'number',
// 'airdate',
// 'airtime',
//  'airstamp',
// 'runtime',
// 'image',
// 'summary',
// 'show',
// '_links'

// 'id',
// 'url',
// 'name',
// 'type',
// 'language',
// 'genres',
// 'status',
// 'runtime',
// 'premiered',
// 'officialSite',
// 'schedule',
// 'rating',
// 'weight',
// 'network',
// 'webChannel',
// 'externals',
// 'image',
// 'summary',
// 'updated',
// '_links'

  static navigationOptions = {
    headerLeft: null,
    headerTitle: <Header />,
  };

  componentDidMount() {
    const currDate = this.props.navigation.getParam("currDate", undefined);
    const dateString = currDate.day + " " +
                       convertMonth(currDate.month) + " " +
                       currDate.year;
    const res = getMoviesData(currDate.dateString);
    res.then((data) => {
      this.setState({ movies: data, date: dateString});
    });
  }

  _onClick() {
    this.setState( (prevState) => (
      { isExpanded : !prevState.isExpanded }
    ));
  }

  WholeList(numberOfMovies) {
    return this.state.movies.map( (movie) => {

      const img = {
        uri: movie.show.image ?
             movie.show.image.medium :
             "https://dummyimage.com/400x600/ccc/fff"
      };

      return (
        <View style={styles.movieContainer}>

          <Image source={img}
                 style={styles.movieLogo}
          />

          <View style={styles.movieInfo}>

              <View style={styles.movieInfoTop}>
                <Text style={styles.movieName}>
                  {movie.show.name}
                </Text>
                <Text style={styles.movieYear}>
                  {movie.show.premiered.split("-")[0]}
                </Text>
              </View>

              <View style={styles.movieInfoBottom}>
                <Text style={styles.episode}>
                  {`Эпизод: ${movie.number}`}
                </Text>
              </View>

          </View>

        </View>
      )
    }
  ).slice(0, numberOfMovies)}

  render() {
    const {navigate} = this.props.navigation;

    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            {this.state.date}
          </Text>
        </View>
        {
          this.state.isExpanded ?
          this.WholeList(this.state.movies.length) :
          this.WholeList(4)
        }

        <TouchableOpacity style={styles.button} onPress={this._onClick}>
          <Text style={styles.buttonTitle}>
            {this.state.isExpanded ?
            `Свернуть` :
            `Ещё ${this.state.movies.length-4} сериалов`}
          </Text>
          {
          // <Image style={styles.arrowLogo}
          //        source={require("../pictures/expand_more.svg")}
          // />
          }
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: 200
  },
  movieContainer: {
    flex: 1,
    flexDirection: "row",
    height: 100,
    paddingTop: 20,
  },
  movieLogo: {
    flex: 2,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    shadowOffset: {  width: 10,  height: 10,  },
    shadowColor: "#eee",
    shadowOpacity: 1.0,
  },
  movieInfo: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  movieName: {
    fontSize: 15,
    color: "black"
  },
  movieYear: {
    fontSize: 15,
    color: "grey"
  },
  episode: {
    width: "45%",
    height: 30,
    backgroundColor: "#eee",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 3
  },
  titleText: {
    textAlign: "center",
    fontSize: 25,
    color: "black",
    marginTop: 10,
    marginBottom: 10
  },
  title: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  button: {
    flexDirection: "row",
    width: "75%",
    marginLeft: "12.5%",
    marginTop: "3%",
    textAlign: "center",
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 5
  },
  buttonTitle: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto"
  },
});
