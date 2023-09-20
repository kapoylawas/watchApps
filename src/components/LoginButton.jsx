/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginButton = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.color,
        paddingVertical: 15,
        marginTop: 20,
        marginHorizontal: 50,
        borderRadius: 15,
        elevation: 2,
      }}
      onPress={() => navigation.navigate('HomeScreen')}>
      <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
