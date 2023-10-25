/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Image,
  View,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ForgotPassword from '../../components/ForgotPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      pesanErrors: [],
    };
  }

  saveToken = async value => {
    try {
      await AsyncStorage.setItem('@tokenLogin', value);
    } catch (e) {
      // saving error
    }
  };

  saveId = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@idLogin', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  prosesLogin = () => {
    fetch('http://10.50.1.162:8000/api/v1/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (json.success.code == '200') {
          this.saveToken(json.success.data.token);
          this.saveId(json.success.data.id);
          this.props.navigation.navigate('HomeScreen');
        } else if (json.errors.code == 401) {
          this.setState({pesanErrors: json.errors});
        }
      })
      .catch(err => console.log(err));
  };

  render() {
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
          {this.state.pesanErrors ? (
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'red',
              }}>
              {this.state.pesanErrors.detail}
            </Text>
          ) : (
            ''
          )}
          <View
            style={{flexDirection: 'row', marginHorizontal: 50, marginTop: 10}}>
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
              <Icon name="envelope" size={19} color="#483729" />
            </View>
            <TextInput
              icon="envelope"
              placeholder="Email"
              style={{
                backgroundColor: '#fff',
                flex: 1,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 15,
                elevation: 2,
                paddingLeft: 20,
              }}
              value={this.state.email}
              onChangeText={value => this.setState({email: value})}
            />
          </View>

          <View
            style={{flexDirection: 'row', marginHorizontal: 50, marginTop: 10}}>
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
              <Icon name="lock" size={19} color="#483729" />
            </View>
            <TextInput
              placeholder="Password"
              style={{
                backgroundColor: '#fff',
                flex: 1,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 15,
                elevation: 2,
                paddingLeft: 20,
              }}
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={value => this.setState({password: value})}
            />
          </View>
          {/* <LoginButton text="SIGN IN" color="#483729" /> */}
          <TouchableOpacity
            style={{
              backgroundColor: '#483729',
              paddingVertical: 15,
              marginTop: 20,
              marginHorizontal: 50,
              borderRadius: 15,
              elevation: 2,
            }}
            onPress={() => this.prosesLogin()}>
            <Text
              style={{color: '#fff', textAlign: 'center', letterSpacing: 2}}>
              SIGN IN
            </Text>
          </TouchableOpacity>
          <ForgotPassword />
        </View>
      </ScrollView>
    );
  }
}

export default Login;
