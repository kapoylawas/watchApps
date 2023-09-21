/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Floatingbutton() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Konten lain dalam komponen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Quote')}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Untuk mengatur posisi tombol
    // Gantilah flex dan style lain sesuai dengan kebutuhan Anda
  },
  button: {
    position: 'absolute', // Membuat tombol mengambang
    bottom: -140, // Atur jarak dari bawah layar
    right: 5, // Atur jarak dari kanan layar
    backgroundColor: '#D39001', // Ganti warna sesuai dengan kebutuhan
    borderRadius: 30, // Agar tombol terlihat bulat
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
});
