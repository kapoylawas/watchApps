import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/screens/login/Index';
import BottomTabsNavigation from './src/navigation/BottomTabsNavigation';
import UserScreen from './src/screens/user/Index';
import InfoScreen from './src/screens/info/Index';
import QuoteScreen from './src/screens/quote/Index';
import FormLeadsScreen from './src/screens/formLeads/Index';
import LeadsEditScreen from './src/screens/leadsEdit/Index';
import InWorkScreen from './src/screens/inWork/Index';
import InWorkEditScreen from './src/screens/inWorkEdit';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={BottomTabsNavigation} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Quote" component={QuoteScreen} />
        <Stack.Screen name="Inputleads" component={FormLeadsScreen} />
        <Stack.Screen name="LeadEdit" component={LeadsEditScreen} />
        <Stack.Screen name="InWork" component={InWorkScreen} />
        <Stack.Screen name="InWorkEdit" component={InWorkEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
