/* eslint-disable react-native/no-inline-styles */
import CheckBox from '@react-native-community/checkbox';
import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dropdown} from 'react-native-element-dropdown';
import Loading from './Loding';

export default function InputQuote({onSubmit}) {
  // const [data, setData] = useState('');
  const textInputRef = useRef(null);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  const [loadingProduct, setLoadingProduct] = useState(true);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [expDate, setExpDate] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [renmark, setRenmark] = useState('');

  const [value, setValue] = useState(null);
  const [product, setProduct] = useState([]);

  const getDataProduct = async () => {
    setLoadingProduct(true);
    const token = await AsyncStorage.getItem('@tokenLogin');
    // console.log(token);
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
        console.log(json);
        setLoadingProduct(false);
      })
      .catch(err => console.log(err));
  };

  const handleSubmit = () => {
    const params = {
      customer_id: 1,
      name: name,
      address: 'Surabaya',
      email: email,
      phone_number: phone,
      product_id: value,
      product_code: 'KMZ-WA88',
      product_name: 'Steel Watch - Leather',
      product_base_price: 10000000,
      product_price: price,
      product_pict_url: '-',
      expired_at: expDate,
      discount: discount,
      renmark: renmark,
      updated_by: 1,
      gender: 'L',
      city: '-',
      phone_number_2: '-',
    };
    console.log(params);
  };

  useEffect(() => {
    // LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
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
            style={style.input}
            placeholder="Customer Name"
            value={name}
            onChangeText={value => setName(value)}
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
            value={phone}
            onChangeText={value => setPhone(value)}
          />
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
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <TextInput
            style={style.input}
            placeholder="dd/mm/yyyy"
            value={expDate}
            onChangeText={value => setExpDate(value)}
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
            value={price}
            onChangeText={value => setPrice(value)}
          />
          <TextInput
            style={style.input}
            placeholder="Discount Amount"
            value={discount}
            onChangeText={value => setDiscount(value)}
          />
        </View>
        <View style={style.container}>
          <Text style={style.text}>Remark</Text>
        </View>
        <View style={style.container}>
          <TextInput
            ref={textInputRef}
            style={style.input}
            value={renmark}
            onChangeText={value => setRenmark(value)}
          />
        </View>
        {/* <ButtonSave onPress={() => handleSubmit()} /> */}
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: '#E7E5E0',
            paddingVertical: 10,
            marginTop: 40,
            marginBottom: 30,
            borderRadius: 15,
            elevation: 2,
          }}
          onPress={() => handleSubmit()}>
          <Text
            style={{
              color: '#483729',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              letterSpacing: 2,
            }}>
            SEND
          </Text>
        </TouchableOpacity>
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
