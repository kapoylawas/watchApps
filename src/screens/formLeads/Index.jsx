/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonBackLeads from '../../components/ButtonBackLeads';
import {SelectList} from 'react-native-dropdown-select-list';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FormLeadsScreen({navigation}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [secondInquiry, setSecondInquiry] = useState('');
  const [selected, setSelected] = useState('');
  const genders = [
    {key: 'M', value: 'Male'},
    {key: 'L', value: 'Female'},
  ];

  const saveData = async () => {
    const token = await AsyncStorage.getItem('@tokenLogin');
    await fetch('http://10.50.1.162:8000/api/v1/lead', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        customer_id: 1,
        customer_name: name,
        gender: selected,
        address: 'Surabaya',
        city: 'Surabaya',
        email: 'ramzy@gmail.com',
        phone_number: phone,
        phone_number_2: '',
        product_id: 1,
        product_code: 'KMZ-WA88',
        product_name: 'Steel Watch - Leather',
        product_base_price: 10000000,
        product_price: 15000000,
        product_pict_url: '',
        secondary_product_id: 2,
        secondary_product_code: 'KMZ-WA8A',
        secondary_product_name: 'Wooden Watch - Luxury',
        secondary_product_base_price: 12500000,
        secondary_product_price: 17500000,
        secondary_product_pict_url: 'testing',
        price: inquiry,
        secondary_price: secondInquiry,
        priority: 'N',
        employee_id: '',
        updated_by: 1,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.success.code == 200) {
          // Berhasil
          Alert.alert('Data berhasil disubmit');
          navigation.navigate('Leads');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={{paddingBottom: 100, marginBottom: 10}}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingTop: 17, paddingHorizontal: 15}}>
          <ButtonBackLeads />
          {/* date cread and assign to */}
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text
                style={{color: '#483729', fontWeight: 'bold', fontSize: 12}}>
                Date Created{' '}
              </Text>
              <Text
                style={{
                  color: '#483729',
                  fontSize: 12,
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                {' '}
                29 August 2023
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#E7E5E0',
                alignItems: 'center',
                borderRadius: 10,
                marginRight: 10,
                flexDirection: 'row',
                paddingHorizontal: 10,
                height: 40,
                marginTop: 5,
                elevation: 5,
              }}>
              <Text style={styles.textAssign}>Assign to</Text>
            </View>
          </View>
          {/* text input name and phone number */}
          <View style={styles.containerInput}>
            <Text style={styles.text}>Name</Text>
            <Text style={styles.text}>Phone Number</Text>
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={value => setName(value)}
            />
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={value => setPhone(value)}
            />
          </View>
          {/* select dropdown */}
          <View style={styles.containerTextSelect}>
            <Text style={styles.text}>Gender</Text>
          </View>
          <View style={styles.containerSelect}>
            <SelectList
              setSelected={val => setSelected(val)}
              data={genders}
              save="key"
              defaultOption={{key: 'M', value: 'Male'}}
            />
          </View>
          {/* inquiry */}
          <View style={styles.containerTextSelect}>
            <Text style={styles.text}>Inquiry</Text>
          </View>
          <View style={styles.containerInquiry}>
            <TextInput
              style={styles.inputInquiry}
              onChangeText={value => setInquiry(value)}
              value={inquiry}
            />
            <View style={styles.hide}>
              <Image
                source={require('../../assets/watches-trader/icon/search.png')}
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  marginTop: 1,
                }}
              />
            </View>
          </View>
          {/* price kosong */}
          <View style={styles.containerTextSelect}>
            <Text style={styles.text}>Price</Text>
          </View>
          <View style={styles.containerTextSelect}>
            <Text style={{marginLeft: 20, fontWeight: 'bold'}}>-</Text>
          </View>
          {/* 2nd inqury */}
          <View style={styles.containerTextSelect}>
            <Text style={styles.text}>2nd Inquiry</Text>
          </View>
          <View style={styles.containerInquiry}>
            <TextInput
              style={styles.inputInquiry}
              onChangeText={value => setSecondInquiry(value)}
              value={secondInquiry}
            />
            <View style={styles.hide}>
              <Image
                source={require('../../assets/watches-trader/icon/search.png')}
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  marginTop: 1,
                }}
              />
            </View>
          </View>
          {/* price and priority */}
          <View style={styles.containerInput}>
            <Text style={styles.text}>Price</Text>
            <Text style={styles.textPrioty}>Priority</Text>
          </View>
          <View style={styles.containerTextSelect}>
            <Text style={{marginLeft: 20, fontWeight: 'bold'}}>-</Text>
            <View style={{marginRight: 20}}>
              <Image
                source={require('../../assets/watches-trader/icon/pencil.png')}
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </View>
          {/* action border */}
          <View style={styles.container}>
            <View style={styles.containerInput}>
              <View style={styles.garis} />
              <View style={styles.garis} />
            </View>
          </View>
          <View style={styles.actionContainer}>
            <Text style={{fontWeight: 'bold'}}>ACTION</Text>
          </View>
          <View style={styles.containerTextAction}>
            <Text style={styles.centeredText}>
              New Leads with action will goes straight to "IN WORK" section
            </Text>
          </View>
          {/* button action */}
          <View style={{marginBottom: 50, marginTop: 50}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#E7E5E0',
                paddingVertical: 5,
                marginHorizontal: 110,
                borderRadius: 5,
                elevation: 3,
              }}>
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  letterSpacing: 2,
                }}>
                <Image
                  source={require('../../assets/watches-trader/icon/add.png')}
                  style={{
                    height: 10,
                    width: 10,
                  }}
                />{' '}
                ADD ACTION
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
              marginBottom: 10,
            }}>
            <TouchableOpacity>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 50,
                  borderRadius: 15,
                  backgroundColor: '#E7E5E0',
                  padding: 2,
                  marginLeft: 10,
                  elevation: 3,
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
            <TouchableOpacity onPress={() => saveData()}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 50,
                  borderRadius: 15,
                  backgroundColor: '#E7E5E0',
                  padding: 2,
                  marginLeft: 10,
                  elevation: 3,
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#FFF',
    paddingVertical: 20,
  },
  textContainer: {
    flex: 2,
    marginHorizontal: 20,
    marginTop: 5,
  },
  text: {
    flex: 1, // Menggunakan flex: 1 untuk memungkinkan input mengisi ruang yang tersedia
    color: '#483729',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  textPrioty: {
    flex: 1, // Menggunakan flex: 1 untuk memungkinkan input mengisi ruang yang tersedia
    color: '#483729',
    fontWeight: 'bold',
    marginLeft: 250,
  },
  input: {
    flex: 1, // Menggunakan flex: 1 untuk memungkinkan input mengisi ruang yang tersedia
    marginRight: 10,
    borderBottomWidth: 1,
  },
  garis: {
    width: 140, // Panjang garis
    height: 1, // Lebar garis
    backgroundColor: 'black', // Warna garis
  },
  containerInput: {
    flex: 1,
    flexDirection: 'row', // Menggunakan flexDirection: 'row' untuk mengatur tata letak horizontal
    justifyContent: 'space-between', // Menggunakan justifyContent: 'space-between' untuk menjaga jarak antara input
    alignItems: 'center', // Menggunakan alignItems: 'center' untuk menengahkan input secara vertikal
    marginLeft: 20,
  },
  containerTextSelect: {
    flex: 1,
    flexDirection: 'row', // Menggunakan flexDirection: 'row' untuk mengatur tata letak horizontal
    justifyContent: 'space-between', // Menggunakan justifyContent: 'space-between' untuk menjaga jarak antara input
    alignItems: 'center', // Menggunakan alignItems: 'center' untuk menengahkan input secara vertikal
    marginLeft: 20,
    marginTop: 7,
  },
  containerSelect: {
    flex: 1,
    flexDirection: 'row', // Menggunakan flexDirection: 'row' untuk mengatur tata letak horizontal
    justifyContent: 'space-between', // Menggunakan justifyContent: 'space-between' untuk menjaga jarak antara input
    alignItems: 'center', // Menggunakan alignItems: 'center' untuk menengahkan input secara vertikal
    marginLeft: 40,
    marginTop: 5,
  },
  containerInquiry: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  inputInquiry: {
    flex: 2,
    borderColor: 'gray',
    padding: 8,
    borderBottomWidth: 1,
  },
  hide: {
    flex: 2,
  },
  actionContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -35,
    marginLeft: 20,
  },
  dateText: {
    color: '#483729',
    // backgroundColor: '#000',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 3,
  },
  containerTextAction: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  centeredText: {
    textAlign: 'center', // Mengatur teks ke tengah
    fontSize: 8,
    fontWeight: 'bold',
  },
  textAssign: {
    color: '#483729',
    fontWeight: 'bold',
  },
});
