import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import React from 'react';

//import useNavigation
import {useNavigation} from '@react-navigation/native';

//import material icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//import momen js
import 'moment/locale/id';

import LinearGradient from 'react-native-linear-gradient';

export default function Schedule({data}) {
  //ini navigation
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#D39001', '#694C20']} // Warna gradient
      style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Meet with Mr.Ramzy</Text>
        <View style={styles.containerUser}>
          <MaterialIcons name="map" style={styles.iconUser} size={28} />
          <Text style={styles.text}>Surabaya</Text>
        </View>
      </View>
      <Image
        source={require('../assets/icons/newspaper.png')}
        style={styles.image}
      />
    </LinearGradient>
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
