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
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <View style={styles.card}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/watches-trader/logo/logo-white.png')}
              style={{
                width: 70,
                height: 70,
                resizeMode: 'contain',
              }}
            />
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              ever since the 1500s, when an unknown printer took a galley of
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: '#483729',
    borderRadius: 150,
    paddingHorizontal: 30,
    paddingBottom: 100,
    paddingTop: 50,
    alignSelf: 'center',
    marginVertical: 70,
  },
  text: {
    marginTop: 30,
    color: '#D39000', // Warna emas
    textAlign: 'center', // Center-align the text
  },
});
