/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function InfoScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#3C3C3C'}}>
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
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 90,
        }}>
        <View style={styles.card}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 'auto',
            }}>
            <Image
              source={require('../../assets/icons/logojam.png')}
              style={{width: 100, height: 100}}
            />
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#D39001'}}>
              WATCHES
            </Text>
            <Text style={{fontWeight: 'bold'}}>TRADER</Text>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 400,
    backgroundColor: '#483729',
    borderRadius: 150, // Mengatur border radius untuk membuat card menjadi oval
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#8E6413', // Warna emas
    textAlign: 'center', // Center-align the text
    fontSize: 15,
  },
});
