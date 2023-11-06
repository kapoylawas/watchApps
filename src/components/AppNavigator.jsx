// AppNavigator.js

import {createAppContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import halaman-halaman yang akan digunakan
import HomeScreen from './HomeScreen';
import DrawerScreen from './DrawerScreen';

const Drawer = createDrawerNavigator();

const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Drawer: {
      screen: DrawerScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
