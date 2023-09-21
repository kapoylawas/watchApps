/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const ButtonBiodata = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -10,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('User')}>
        <MaterialIcons
          name="person"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 30,
            height: 30,
            borderRadius: 45,
            backgroundColor: '#483729',
          }}
          size={30}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <MaterialIcons
          name="info"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 30,
            height: 30,
            borderRadius: 45,
            backgroundColor: '#483729',
          }}
          size={30}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonBiodata;
