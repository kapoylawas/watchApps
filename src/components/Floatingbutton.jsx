/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function Floatingbutton() {
  const navigation = useNavigation();
  return (
    <View>
      {/* Konten lain dalam komponen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Quote')}>
        <Image
          source={require('../assets/watches-trader/icon/quote.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute', // Membuat tombol mengambang
    bottom: 10, // Atur jarak dari bawah layar
    right: -10, // Atur jarak dari kanan layar
    backgroundColor: '#D39001', // Ganti warna sesuai dengan kebutuhan
    borderRadius: 100, // Agar tombol terlihat bulat
    width: 50,
    height: 50,
    paddingLeft: 7,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999999,
    elevation: 2,
  },
  icon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginRight: 7,
  },
});
