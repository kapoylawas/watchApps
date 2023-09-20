/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TextInputEmail = props => {
  return (
    <View>
      <View style={{flexDirection: 'row', marginHorizontal: 50, marginTop: 10}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            width: 50,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            elevation: 2,
          }}>
          <Icon name={props.icon} size={30} color="#000" />
        </View>
        <TextInput
          value={props.state}
          style={{
            backgroundColor: '#fff',
            flex: 1,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 15,
            elevation: 2,
            paddingLeft: 20,
          }}
          placeholder={props.placeholder}
          onChange={text => props.set(text)}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    </View>
  );
};

export default TextInputEmail;
