/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function UserScreen() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F3F2EF',
        paddingTop: 17,
        paddingHorizontal: 15,
        paddingBottom: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            source={require('../../assets/watches-trader/icon/close.png')}
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor={'#F3F2EF'} barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}>
        <Image
          source={require('../../assets/watches-trader/icon/user.png')}
          style={{
            height: 100,
            width: 100,
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#483729',
            marginTop: 10,
            letterSpacing: 1,
          }}>
          JHON DOE
        </Text>
        <Text style={{fontWeight: 'bold'}}>Employee</Text>
      </View>
      <View style={{marginTop: 270, paddingBottom: 20}}>
        <TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              color: '#483729',
              letterSpacing: 1,
            }}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#483729',
            paddingVertical: 15,
            marginTop: 20,
            borderRadius: 10,
            elevation: 2,
          }}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text
            style={{
              letterSpacing: 1,
              color: '#fff',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            SAVE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
