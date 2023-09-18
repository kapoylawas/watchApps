/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
//import material icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{padding: 15}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <MaterialCommunityIcons
          name="star"
          style={styles.tabBarIconInfoCenter}
          size={20}
        />
        <MaterialCommunityIcons
          name="star"
          style={{width: 50, height: 50}}
          size={20}
        />
        {/* <Text style={styles.labelText}>PRODUK DESA</Text> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  labelContainer: {
    marginTop: 5,
    flexDirection: 'row',
  },
  labelIcon: {
    marginRight: 20,
    color: '#333333',
  },
  labelText: {
    color: '#333333',
    fontWeight: 'bold',
  },
  tabBarIconInfoCenter: {
    // top: -20,

    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    borderRadius: 35,
    backgroundColor: '#D39001',
  },
});
