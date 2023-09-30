/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

function ForgotPassword() {
  return (
    <View
      style={{
        marginTop: 40,
        marginHorizontal: 25,
        paddingBottom: 20,
        alignItems: 'center',
      }}>
      <TouchableOpacity>
        <Text style={{marginTop: 50, color: '#483729', letterSpacing: 2}}>
          forgot password ?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/watches-trader/icon/signin.png')}
          style={{
            marginVertical: 10,
            height: 25,
            width: 25,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ForgotPassword;
