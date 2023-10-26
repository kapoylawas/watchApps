import CheckBox from '@react-native-community/checkbox';
import React, {useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ButtonSave from './ButtonSave';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dropdown} from 'react-native-element-dropdown';
import Loading from './Loding';

export default function InputQuote() {
  const [data, setData] = useState('');
  const textInputRef = useRef(null);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  const [loadingProduct, setLoadingProduct] = useState(true);
  const [value, setValue] = useState(null);
  const [product, setProduct] = useState([]);

  const getDataProduct = async () => {
    setLoadingProduct(true);
    const token = await AsyncStorage.getItem('@tokenLogin');
    fetch(`http://10.50.1.162:8000/api/v1/product-api`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json())
      .then(json => {
        setProduct(json.data);
        setLoadingProduct(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getDataProduct();
  }, []);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView showsVerticalScrollIndicator={false}>
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
          />
        </View>
        <View style={style.container}>
          <Text style={style.text}>Phone</Text>
          <Text style={style.text}>Whatsapp?</Text>
        </View>
        <View style={style.container}>
          <TextInput style={style.input} placeholder="0812345678xxx" />
          <CheckBox
            style={style.input}
            value={isChecked}
            onValueChange={handleCheckBoxChange}
          />
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
        {loadingProduct ? (
          <Loading />
        ) : (
          <Dropdown
            data={product}
            labelField="nama"
            valueField="id"
            search
            placeholder="Pilih Product"
            onChange={item => {
              setValue(item.id);
            }}
            value={value}
          />
        )}
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
    </ScrollView>
  );
}

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
