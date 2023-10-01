/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ButtonSave = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: '#E7E5E0',
        paddingVertical: 10,
        marginTop: 40,
        marginBottom: 30,
        borderRadius: 15,
        elevation: 2,
      }}
      onPress={() => navigation.navigate('HomeScreen')}>
      <Text
        style={{
          color: '#483729',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 20,
          letterSpacing: 2,
        }}>
        SEND
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonSave;
