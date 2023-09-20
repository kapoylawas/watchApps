/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function ForgotPassword() {
  return (
    <View style={{marginTop: 20, marginHorizontal: 25, paddingBottom: 20}}>
      <TouchableOpacity>
        <Text style={{textAlign: 'center', marginTop: 50, color: 'black'}}>
          FORGOT PASSWORD
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{textAlign: 'center'}}>
          <Icon name="arrow-right" size={30} color="#000" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgotPassword;
