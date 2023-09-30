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
        <Text style={style.text}>Name</Text>
      </View>
      <View style={style.container}>
        <TextInput
          ref={textInputRef}
          value={data}
          onChangeText={text => setData(text)}
          style={style.input}
          placeholder="Customer Name"
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
      </View>
      <View style={style.container}>
        <Text style={style.text}>Phone</Text>
        <Text style={style.text}>Whatsapp?</Text>
      </View>
      <View style={style.container}>
        <TextInput
          style={style.input}
          placeholder="0812345678xxx"
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
        <CheckBox
          style={style.input}
          value={isChecked}
          onValueChange={handleCheckBoxChange}
        />
        {/* <Text>{isChecked ? 'Checked' : 'Unchecked'}</Text> */}
      </View>
      <View style={style.container}>
        <Text style={style.text}>Email</Text>
        <Text style={style.text}>Expiry Dates</Text>
      </View>
      <View style={style.container}>
        <TextInput
          style={style.input}
          placeholder="jhondoe@gmail.com"
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
        <TextInput
          style={style.input}
          placeholder="dd/mm/yyyy"
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
          style={style.input}
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
      </View>
      <View style={style.container}>
        <Text style={style.text}>Price</Text>
        <Text style={style.text}>Discount</Text>
      </View>
      <View style={style.container}>
        <TextInput
          style={style.input}
          placeholder="Price Amount"
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
        <TextInput
          style={style.input}
          placeholder="Discount Amount"
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
          style={style.input}
          // Tambahkan properti atau logika lain yang Anda butuhkan di sini
        />
      </View>
      <ButtonSave />
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
    alignItems: 'center', // Menggunakan alignItems: 'center' untuk menengahkan input secara vertikal
  },
  text: {
    flex: 1, // Menggunakan flex: 1 untuk memungkinkan input mengisi ruang yang tersedia
    marginRight: 10, // Memberikan sedikit ruang antara input kiri dan kanan
    marginTop: 30,
    color: '#483729',
    fontWeight: 'bold',
  },
  input: {
    flex: 1, // Menggunakan flex: 1 untuk memungkinkan input mengisi ruang yang tersedia
    // padding: 8,
    marginRight: 10,
    borderBottomWidth: 1,
  },
});

export default InputQuote;
