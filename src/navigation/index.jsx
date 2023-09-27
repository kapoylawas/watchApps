/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';

//stack navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//import BottomTabsNavigation
import BottomTabsNavigation from './BottomTabsNavigation';
import LeadsScreen from '../screens/leads/Index';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabsNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
