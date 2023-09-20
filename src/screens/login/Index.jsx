/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, Text, View, StatusBar} from 'react-native';
import TextInputEmail from '../../components/TextInputEmail';
import LoginButton from '../../components/LoginButton';
import ForgotPassword from '../../components/ForgotPassword';

const Login = () => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#F3F2EF'}}>
      <StatusBar backgroundColor={'#F3F2EF'} barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 90,
        }}>
        <Image
          source={require('../../assets/icons/logojam.png')}
          style={{width: 100, height: 100}}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#D39001'}}>
          WATCHES
        </Text>
        <Text style={{fontWeight: 'bold'}}>TRADER</Text>
      </View>
      <TextInputEmail
        state={email}
        set={SetEmail}
        icon="envelope"
        placeholder="Input Email"
        secureTextEntry={false}
      />
      <TextInputEmail
        state={password}
        set={SetPassword}
        icon="lock"
        placeholder="Input Password"
        secureTextEntry={true}
      />
      <LoginButton text="Login" color="#694C20" />
      <ForgotPassword />
    </View>
  );
};

export default Login;
