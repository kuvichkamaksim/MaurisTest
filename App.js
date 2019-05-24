import { createStackNavigator, createAppContainer } from "react-navigation";
import WelcomeScreen from "./components/WelcomeScreen.js";
import MoviesList from "./components/MoviesList.js";

const MainNavigator = createStackNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  MoviesList: {screen: MoviesList},
});

const App = createAppContainer(MainNavigator);

export default App;
