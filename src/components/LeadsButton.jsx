import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LeadsButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => navigation.navigate('Inputleads')}>
      <Icon name="plus" size={30} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute', // Membuat tombol mengambang
    bottom: 10, // Atur jarak dari bawah layar
    right: 10, // Atur jarak dari kanan layar
    backgroundColor: '#D39001', // Ganti warna sesuai dengan kebutuhan
    borderRadius: 100, // Agar tombol terlihat bulat
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999999,
    elevation: 2,
  },
});
