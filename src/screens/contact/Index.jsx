/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import ButtonBackOption from '../../components/ButtonBackOption';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ContactScreen() {
  const [loadingContact, setLoadingContact] = useState(true);
  const [dataContact, setDataContact] = useState([]);

  console.log('data contact =>', dataContact);

  const navigation = useNavigation();

  const goContactDetails = () => {
    navigation.navigate('ContactDetails');
  };

  const getDataContact = async () => {
    setLoadingContact(true);
    const token = await AsyncStorage.getItem('@tokenLogin');
    fetch(`http://10.50.1.162:8000/api/v1/customer`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json())
      .then(json => {
        setDataContact(json.data);
        setLoadingContact(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getDataContact();
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <View
        style={{
          paddingTop: 17,
          paddingHorizontal: 15,
        }}>
        <ButtonBackOption backTo={'Home'} />
      </View>
      <View style={{paddingBottom: 50, paddingTop: 20, paddingHorizontal: 25}}>
        <FlatList
          data={dataContact}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={goContactDetails}>
              <View style={styles.container}>
                <View
                  style={{
                    backgroundColor: '#E7E5E0',
                    padding: 5,
                    elevation: 6,
                    borderRadius: 100,
                  }}>
                  <Image
                    source={require('../../assets/watches-trader/icon/user.png')}
                    style={{
                      height: 40,
                      width: 40,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.nameText}>{item.fullname}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingVertical: 20,
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },
  nameText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
