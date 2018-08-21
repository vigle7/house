import { StackNavigator } from "react-navigation";
import HouseList from "../Containers/HouseList";
import AddHouseScreen from "../Containers/AddHouseScreen";
import GoogleMapScreen from "../Containers/GoogleMapScreen";
import AuthScreen from "../Containers/AuthScreen";
import Storagetest from "../Containers/Storagetest";
import LaunchScreen from "../Containers/LaunchScreen";
import ViewHouse from "../Containers/ViewHouse";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    HouseList: { screen: HouseList },
    AddHouseScreen: { screen: AddHouseScreen },
    GoogleMapScreen: { screen: GoogleMapScreen },
    AuthScreen: { screen: AuthScreen },
    Storagetest: { screen: Storagetest },
    LaunchScreen: { screen: LaunchScreen },
    ViewHouse: { screen: ViewHouse }
  },
  {
    // Default config for all screens
    initialRouteName: "HouseList",
    headerMode: "none",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
