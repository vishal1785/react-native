import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import PlaceDetailScreen from './src/screens/PlaceDetails/PlaceDetails';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';

import configureStore from './src/store/configureStore';
const store = configureStore();


// Register Screens
Navigation.registerComponent(
  'myapp.AuthScreen',
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'myapp.FindPlaceScreen',
  () => FindPlaceScreen,
  store, Provider
);
Navigation.registerComponent(
  'myapp.SharePlaceScreen',
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'myapp.PlaceDetailScreen',
  () => PlaceDetailScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'myapp.SideDrawerScreen',
  () => SideDrawerScreen
);

//Start app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'myapp.AuthScreen',
    title: 'Login'
  }
});


