/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ButtonBackLeads = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => navigation.navigate('Leads')}>
        <Image
          source={require('../assets/watches-trader/icon/back.png')}
          style={{
            height: 25,
            width: 25,
            resizeMode: 'contain',
          }}
        />
        <Text style={{fontWeight: 'bold'}}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/watches-trader/icon/navbar.png')}
          style={{
            height: 20,
            width: 20,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonBackLeads;
