/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const FormLeads = props => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, paddingBottom: 30}}>
      <View style={style.container}>
        <Text style={style.textLeft}>Name</Text>
        <Text style={style.textRight}>Phone Number</Text>
      </View>
      <View style={style.container}>
        <TextInput
          style={style.inputLeft}
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
        <TextInput
          style={style.inputRight}
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
      </View>
      <View style={style.container}>
        <Text style={style.textLeft}>Gender</Text>
      </View>
      <View style={style.container}>
        <TextInput
          style={style.inputLeft}
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
      </View>
      <View style={style.container}>
        <Text style={style.textLeft}>Inquiry</Text>
      </View>
      <View style={style.container}>
        <TextInput
          style={style.inputLeft}
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
      </View>
      <View style={style.container}>
        <Text style={style.textLeft}>2nd Inquiry</Text>
      </View>
      <View style={style.container}>
        <TextInput
          style={style.inputLeft}
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
      </View>
      <View style={style.container}>
        <Text style={style.textLeft}>Price</Text>
        <Text style={style.textRight}>Priority</Text>
      </View>
      <View style={style.container}>
        <TextInput
          style={style.inputLeft}
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
        <TextInput
          style={style.inputRight}
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
      </View>
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: '#E7E5E0',
          paddingVertical: 10,
          marginTop: 20,
          marginHorizontal: 150,
          borderRadius: 5,
          elevation: 2,
        }}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text
          style={{
            color: '#483729',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 10,
          }}>
          ADD ACTION
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 50,
              borderRadius: 10,
              backgroundColor: '#E7E5E0',
              padding: 2,
              marginLeft: 10,
            }}
            size={38}
            color="#000">
            <Text
              color="#000"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
              }}>
              Cancel
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 50,
              borderRadius: 10,
              backgroundColor: '#E7E5E0',
              padding: 2,
              marginLeft: 10,
            }}
            size={38}
            color="#000">
            <Text
              color="#000"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
              }}>
              Save
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Menggunakan flexDirection: 'row' untuk mengatur tata letak horizontal
    justifyContent: 'space-between', // Menggunakan justifyContent: 'space-between' untuk menjaga jarak antara input
    paddingHorizontal: 16, // Menggunakan paddingHorizontal untuk memberikan ruang di sisi kiri dan kanan
    alignItems: 'center', // Menggunakan alignItems: 'center' untuk menengahkan input secara vertikal
  },
  textLeft: {
    flex: 1, // Menggunakan flex: 1 untuk memungkinkan input mengisi ruang yang tersedia
    marginRight: 8, // Memberikan sedikit ruang antara input kiri dan kanan
    color: '#000',
    fontWeight: 'bold',
  },
  textRight: {
    flex: 1, // Menggunakan flex: 1 untuk memungkinkan input mengisi ruang yang tersedia
    marginLeft: 8, // Memberikan sedikit ruang antara input kiri dan kanan
    color: '#000',
    fontWeight: 'bold',
  },
  inputLeft: {
    flex: 1, // Menggunakan flex: 1 untuk memungkinkan input mengisi ruang yang tersedia
    marginRight: 8, // Memberikan sedikit ruang antara input kiri dan kanan
    borderBottomWidth: 1,
  },
  inputRight: {
    flex: 1, // Menggunakan flex: 1 untuk memungkinkan input mengisi ruang yang tersedia
    marginLeft: 8, // Memberikan sedikit ruang antara input kiri dan kanan
    borderBottomWidth: 1,
  },
});
export default FormLeads;
