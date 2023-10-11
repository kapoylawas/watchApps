/* eslint-disable no-dupe-keys */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

//tabs navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text, View} from 'react-native';
const Tab = createBottomTabNavigator();

// import
//import screens Home
import Home from '../screens/home/Index';
import Leads from '../screens/leads/Index';
import ContactScreen from '../screens/contact/Index';

export default function BottomTabsNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={styles.screenOptionsTab}>
      <Tab.Screen
        name="Leads"
        component={Leads}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconCenter}>
              <Image
                source={require('../assets/icons/group.png')}
                resizeMode="contain"
                style={
                  focused
                    ? styles.tabBarIconImageActive
                    : styles.tabBarIconImage
                }
              />
              <Text style={styles.tabBarText}>LEADS</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Invoice"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconCenter}>
              <Image
                source={require('../assets/icons/invoice.png')}
                resizeMode="contain"
                style={
                  focused
                    ? styles.tabBarIconImageActive
                    : styles.tabBarIconImage
                }
              />
              <Text style={styles.tabBarText}>INVOICE</Text>
            </View>
          ),
        }}
      />
      {/* home menu */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconInfoCenterActive}>
              <Image
                source={require('../assets/icons/home.png')}
                resizeMode="contain"
                style={styles.tabBarIconInfo}
              />
              <Text style={styles.tabBarText}>HOME</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconCenter}>
              <Image
                source={require('../assets/icons/calendar.png')}
                resizeMode="contain"
                style={
                  focused
                    ? styles.tabBarIconImageActive
                    : styles.tabBarIconImage
                }
              />
              <Text style={styles.tabBarText}>SCHEDULE</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconCenter}>
              <Image
                source={require('../assets/icons/contact-book.png')}
                resizeMode="contain"
                style={
                  focused
                    ? styles.tabBarIconImageActive
                    : styles.tabBarIconImage
                }
              />
              <Text
                style={focused ? styles.tabBarTextActive : styles.tabBarText}>
                CONTACT
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screenOptionsTab: {
    tabBarActiveTintColor: '#e91e63',
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      // bottom: 1,
      // left: 20,
      // right: 20,
      elevation: 0,
      backgroundColor: '#483729',
      borderRadius: 1,
      height: 70,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    },
  },

  tabBarIconInfoCenter: {
    // top: -10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#483729',
  },

  tabBarIconInfoCenterActive: {
    // top: -20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#D39001',
  },

  tabBarIconInfo: {
    top: 3,
    width: 27,
    height: 27,
    tintColor: '#ffffff',
  },

  tabBarIconCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 2,
  },

  tabBarIconImage: {
    width: 23,
    height: 23,
    tintColor: '#fff',
  },

  tabBarIconImageActive: {
    width: 23,
    height: 23,
    tintColor: '#D39001',
  },

  tabBarText: {
    color: '#fff',
    fontSize: 9,
    top: 3,
    fontWeight: 'bold',
  },

  tabBarTextActive: {
    color: '#fff',
    fontSize: 9,
    top: 3,
    fontWeight: 'bold',
  },
});
