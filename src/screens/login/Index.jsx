/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, Text, View, StatusBar, ScrollView} from 'react-native';
import TextInputEmail from '../../components/TextInputEmail';
import LoginButton from '../../components/LoginButton';
import ForgotPassword from '../../components/ForgotPassword';

const Login = () => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, backgroundColor: '#F3F2EF'}}>
        <StatusBar backgroundColor={'#F3F2EF'} barStyle="dark-content" />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 130,
            marginBottom: 50,
          }}>
          <Image
            source={require('../../assets/watches-trader/logo/logo-black.png')}
            style={{height: 130, resizeMode: 'contain'}}
          />
        </View>
        <TextInputEmail
          state={email}
          set={SetEmail}
          icon="envelope"
          placeholder="Email"
          secureTextEntry={false}
        />
        <TextInputEmail
          state={password}
          set={SetPassword}
          icon="lock"
          placeholder="Password"
          secureTextEntry={true}
        />
        <LoginButton text="SIGN IN" color="#483729" />
        <ForgotPassword />
      </View>
    </ScrollView>
  );
};

export default Login;
