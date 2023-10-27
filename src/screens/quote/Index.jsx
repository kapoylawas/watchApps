/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native';
import Loading from '../../components/Loding';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dropdown} from 'react-native-element-dropdown';

export default function QuoteScreen({navigation}) {
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

  const [value, setValue] = useState('');
  const [product, setProduct] = useState([]);
  const [productID, setProductID] = useState('');
  const kodeBarang = productID ? productID.kode_barang : 0;
  console.log('id =>', value);
  console.log('data =>', productID);
  console.log(kodeBarang);

  const getDataProduct = async () => {
    setLoadingProduct(true);
    const token = await AsyncStorage.getItem('@tokenLogin');
    fetch(`http://10.50.1.162:8000/api/v1/product-api?mode=all&page=1`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json())
      .then(json => {
        setProduct(json.data);
        // console.log(json.data);
        setLoadingProduct(false);
      })
      .catch(err => console.log(err));
  };

  const getDataProductByid = async () => {
    // console.log(idProduct);
    const token = await AsyncStorage.getItem('@tokenLogin');
    fetch(
      `http://10.50.1.162:8000/api/v1/product-api?mode=id&value=${value}&page=1`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      },
    )
      .then(response => response.json())
      .then(json => {
        // console.log(json.data);
        setProductID(json.data);
      })
      .catch(err => console.log(err));
  };

  const saveData = async () => {
    const token = await AsyncStorage.getItem('@tokenLogin');
    await fetch('http://10.50.1.162:8000/api/v1/quotation', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        customer_id: 1,
        customer_name: name,
        address: 'Surabaya',
        email: email,
        phone_number: phone,
        product_id: value,
        product_code: kodeBarang,
        product_name: 'Steel Watch Leather',
        product_base_price: 221212,
        product_price: 12928928928,
        product_pict_url: 'testing',
        expired_at: expDate,
        price: price,
        discount: discount,
        remark: renmark,
        updated_by: 1,
        gender: 'L',
        city: 'testing',
        phone_number_2: 'testing',
        address: 'testing',
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.success.code == 200) {
          // Berhasil
          Alert.alert('Data berhasil disubmit');
          navigation.push('HomeScreen');
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getDataProduct();
    getDataProductByid();
  }, [value]);

  return (
    <ScrollView
      style={{paddingTop: 17, paddingHorizontal: 15}}
      showsVerticalScrollIndicator={false}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            source={require('../../assets/watches-trader/icon/close.png')}
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#483729',
            letterSpacing: 1,
          }}>
          QUOTE TO :
        </Text>
      </View>
      {/* <InputQuote onSubmit={handleSubmit} /> */}
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
          <View>
            {productID ? (
              <Text>Data: {productID.kode_barang}</Text>
            ) : (
              <Text>Kode Barang Tidak Ditemukan</Text>
            )}
          </View>
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
            onPress={() => saveData()}>
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
