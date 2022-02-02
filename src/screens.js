import {Navigation} from 'react-native-navigation';
import {name as appName} from '../app.json';
import App from '../App';
import HomeScreen from './screens/HomeScreen';
import DestinationScreen from './screens/DestinationScreen';

export function registerScreens() {
  // Navigation.registerComponent("<ubercline>.FirstScreenName", () => App);
  Navigation.registerComponent(appName, () => App);
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
  Navigation.registerComponent('DestinationScreen', () => DestinationScreen);
}
