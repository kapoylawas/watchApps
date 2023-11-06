// DrawerScreen.js

import React from 'react';
import {View, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const DrawerScreen = ({navigation}) => {
  return (
    <DrawerContentScrollView>
      <View>
        <DrawerItem
          label="Item 1"
          onPress={() => {
            // Navigasi ke halaman lain
            navigation.navigate('Item1');
          }}
        />
        <DrawerItem
          label="Item 2"
          onPress={() => {
            // Navigasi ke halaman lain
            navigation.navigate('Item2');
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerScreen;
