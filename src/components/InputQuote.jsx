import CheckBox from '@react-native-community/checkbox';
import React, {useEffect, useRef, useState} from 'react';
import {Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import ButtonSave from './ButtonSave';

const InputQuote = props => {
  const [data, setData] = useState('');
  const textInputRef = useRef(null);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const keyboardListener = Keyboard.addListener('keyboardDidHide', () => {
      console.log('keyboard di minimaze');
      textInputRef.current.blur();
    });
    return () => {
      keyboardListener.remove();
    };
  }, []);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, paddingBottom: 30}}>
      <View style={style.container}>
        <Text style={style.text}>NAME</Text>
      </View>
      <View style={style.container}>
        <TextInput
          ref={textInputRef}
          value={data}
          onChangeText={text => setData(text)}
          style={style.inputLeft}
          placeholder="Masukkan Nama"
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
      </View>
      <View style={style.container}>
        <Text style={style.textLeft}>Phone</Text>
        <Text style={style.textRight}>Whatsapp?</Text>
      </View>
      <View style={style.container}>
        <TextInput
          style={style.inputLeft}
          placeholder="0812345678xxx"
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
        <CheckBox
          style={style.inputRight}
          value={isChecked}
          onValueChange={handleCheckBoxChange}
        />
        {/* <Text>{isChecked ? 'Checked' : 'Unchecked'}</Text> */}
      </View>
      <View style={style.container}>
        <Text style={style.textLeft}>Email</Text>
        <Text style={style.textRight}>Expiry Dates</Text>
      </View>
      <View style={style.container}>
        <TextInput
          style={style.inputLeft}
          placeholder="jhondoe@gmail.com"
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
        <TextInput
          style={style.inputRight}
          placeholder="dd/mm/y"
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
      </View>
      <View style={style.container}>
        <Text style={style.text}>Select Product</Text>
      </View>
      <View style={style.container}>
        <TextInput
          ref={textInputRef}
          value={data}
          onChangeText={text => setData(text)}
          style={style.inputLeft}
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
      </View>
      <View style={style.container}>
        <Text style={style.textLeft}>Price</Text>
      </View>
      <View style={style.container}>
        <TextInput
          style={style.inputLeft}
          placeholder="jhondoe@gmail.com"
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
        <TextInput
          style={style.inputRight}
          placeholder="dd/mm/y"
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
      </View>
      <View style={style.container}>
        <Text style={style.text}>Remark</Text>
      </View>
      <View style={style.container}>
        <TextInput
          ref={textInputRef}
          value={data}
          onChangeText={text => setData(text)}
          style={style.inputLeft}
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
      </View>
      <ButtonSave text="Login" color="#694C20" />
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    backgroundColor: '#ffff',
    padding: 9,
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row', // Menggunakan flexDirection: 'row' untuk mengatur tata letak horizontal
    justifyContent: 'space-between', // Menggunakan justifyContent: 'space-between' untuk menjaga jarak antara input
    paddingHorizontal: 16, // Menggunakan paddingHorizontal untuk memberikan ruang di sisi kiri dan kanan
    alignItems: 'center', // Menggunakan alignItems: 'center' untuk menengahkan input secara vertikal
  },
  text: {
    flex: 1, // Menggunakan flex: 1 untuk memungkinkan input mengisi ruang yang tersedia
    marginRight: 8, // Memberikan sedikit ruang antara input kiri dan kanan
    marginTop: 20,
    color: '#000',
  },
  textLeft: {
    flex: 1, // Menggunakan flex: 1 untuk memungkinkan input mengisi ruang yang tersedia
    marginRight: 8, // Memberikan sedikit ruang antara input kiri dan kanan
    marginTop: 20,
    color: '#000',
  },
  textRight: {
    flex: 1, // Menggunakan flex: 1 untuk memungkinkan input mengisi ruang yang tersedia
    marginLeft: 8, // Memberikan sedikit ruang antara input kiri dan kanan
    marginTop: 20,
    color: '#000',
  },
  inputLeft: {
    flex: 1, // Menggunakan flex: 1 untuk memungkinkan input mengisi ruang yang tersedia
    marginRight: 8, // Memberikan sedikit ruang antara input kiri dan kanan
    // padding: 8,
    borderBottomWidth: 1,
  },
  inputRight: {
    flex: 1, // Menggunakan flex: 1 untuk memungkinkan input mengisi ruang yang tersedia
    marginLeft: 8, // Memberikan sedikit ruang antara input kiri dan kanan
    borderBottomWidth: 1,
  },
});

export default InputQuote;
