//main
import React from "react";

//react native navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//screens
import BlogShowScreen from "./src/Screens/BlogShowScreen";
import BlogDetailScreen from "./src/Screens/BlogDetailScreen";
import BlogEditScreen from "./src/Screens/BlogEditScreen";
import BlogCreateScreen from "./src/Screens/BlogCreateScreen";

//provider
import { Provider } from "./src/globalContext/GlobalContext";

const navigator = createStackNavigator(
  {
    Show: BlogShowScreen,
    Detail: BlogDetailScreen,
    Edit: BlogEditScreen,
    Create: BlogCreateScreen,
  },
  {
    initialRouteName: "Show",
    defaultNavigationOptions: {
      title: "Blog Show",
      cardStyle: { backgroundColor: "#FFFFFF" },
    },
  }
);
const App = createAppContainer(navigator);
export default () => (
  <Provider>
    <App />
  </Provider>
);
