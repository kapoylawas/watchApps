/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FormLeadsScreen() {
  const navigation = useNavigation();

  // Fungsi untuk kembali ke halaman Home
  const goToLeads = () => {
    navigation.navigate('Leads');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
          padding: 15,
        }}>
        <TouchableOpacity onPress={goToLeads}>
          <Icon
            name="arrow-left"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 30,
              height: 30,
              borderRadius: 45,
              padding: 2,
            }}
            size={20}
            color="#000"
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{padding: 15, marginTop: -20, fontWeight: 'bold'}}>
            Date Created
          </Text>
          <Text style={{padding: 15, marginTop: -20, fontWeight: 'bold'}}>
            Date Created
          </Text>
        </View>
        <Text
          style={{
            padding: 15,
            marginTop: -30,
            marginRight: 100,
            fontWeight: 'bold',
          }}>
          29 August 2023
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row', // Untuk mengatur teks dan gambar secara horizontal
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 40, // Untuk membuat gambar menjadi lingkaran
    marginRight: 16, // Jarak antara gambar dan teks
  },
  textContainer: {
    flex: 1, // Untuk memungkinkan teks mengisi sisa ruang yang tersedia
  },
  text: {
    color: 'white', // Warna teks
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerUser: {
    flexDirection: 'row',
  },
  iconUser: {
    marginRight: 10,
    color: '#FFF',
  },
});
