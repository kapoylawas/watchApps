/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function UserScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#F3F2EF'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <MaterialIcons
            name="close"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 30,
              height: 30,
              borderRadius: 45,
              padding: -1,
            }}
            size={30}
            color="#000"
          />
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor={'#F3F2EF'} barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 90,
        }}>
        <MaterialIcons
          name="person"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: '#483729',
          }}
          size={100}
          color="#fff"
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#483729',
            marginTop: 10,
          }}>
          JHON DOE
        </Text>
        <Text style={{fontWeight: 'bold'}}>Employee</Text>
      </View>
      <View style={{marginTop: 250, paddingBottom: 20}}>
        <TouchableOpacity>
          <Text style={{textAlign: 'center', color: 'black'}}>
            FORGOT PASSWORD
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#483729',
            paddingVertical: 15,
            marginTop: 10,
            marginHorizontal: 150,
            borderRadius: 30,
            elevation: 2,
          }}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text
            style={{color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>
            SAVE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
