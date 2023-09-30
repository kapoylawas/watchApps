/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ButtonBiodata = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('User')}>
        <Image
          source={require('../assets/watches-trader/icon/user.png')}
          style={{
            height: 40,
            width: 40,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Image
          source={require('../assets/watches-trader/icon/announcement.png')}
          style={{
            height: 30,
            width: 30,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonBiodata;
