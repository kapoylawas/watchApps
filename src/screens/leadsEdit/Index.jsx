/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonBackOption from '../../components/ButtonBackOption';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../api/Api';
import Loading from '../../components/Loding';

export default function LeadsEditScreen({route}) {
  //destruct id
  const {id} = route.params;
  console.log('data id =>', id);

  const [loadingLeads, setLoadingLeads] = useState(true);
  const [dataLeads, setDataLeads] = useState('');
  console.log('data leads details =>', dataLeads);

  const getDataLeads = async () => {
    //set loading true
    setLoadingLeads(true);
    const token = await AsyncStorage.getItem('@tokenLogin');
    await Api.get(`/lead/${id}`, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }).then(response => {
      //assign data to state
      setDataLeads(response.data.data);

      //set loading false
      setLoadingLeads(false);
    });
  };

  useEffect(() => {
    getDataLeads();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingTop: 17, paddingHorizontal: 15}}>
          <ButtonBackOption backTo={'Leads'} />
          <View style={styles.headerContainer}>
            <View
              style={{
                backgroundColor: '#E7E5E0',
                padding: 10,
                elevation: 4,
                borderRadius: 100,
              }}>
              <Image
                source={require('../../assets/watches-trader/crown/gold.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={styles.nameContainer}>
              <Text
                style={{
                  color: '#483729',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginRight: 5,
                  flex: 1,
                }}>
                {loadingLeads ? (
                  <Loading />
                ) : (
                  <Text style={styles.text}>{dataLeads.customer_name}</Text>
                )}{' '}
                <Image
                  source={require('../../assets/watches-trader/icon/pencil.png')}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                  }}
                />
              </Text>
              <Text style={{color: '#483729'}}>
                <Icon name={'mars'} size={16} color="#59b1d4" /> Male
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#E7E5E0',
                alignItems: 'center',
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 10,
                elevation: 4,
              }}>
              <Text style={styles.text}>Assign to</Text>
            </View>
          </View>
          {/* phone number */}
          <View style={styles.rowContent}>
            <View style={{flex: 1, marginHorizontal: 10}}>
              <View style={styles.container}>
                <Text style={styles.text}>
                  Phone Number{' '}
                  <Image
                    source={require('../../assets/watches-trader/icon/pencil.png')}
                    style={{
                      height: 15,
                      width: 15,
                      resizeMode: 'contain',
                      marginTop: 1,
                    }}
                  />
                </Text>
                <Text style={styles.subText}>
                  {dataLeads.customer_phone_number}
                </Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.text}>
                  Inquiry{' '}
                  <Image
                    source={require('../../assets/watches-trader/icon/pencil.png')}
                    style={{
                      height: 15,
                      width: 15,
                      resizeMode: 'contain',
                      marginTop: 1,
                    }}
                  />
                </Text>
                <Text style={styles.subText}>
                  {' '}
                  {dataLeads.product_code}{' '}
                  <Icon name={'check'} size={16} color="green" />
                </Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.text}>Price</Text>
                <Text style={styles.subText}>{dataLeads.price}</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.text}>
                  2nd Inquiry{' '}
                  <Image
                    source={require('../../assets/watches-trader/icon/pencil.png')}
                    style={{
                      height: 15,
                      width: 15,
                      resizeMode: 'contain',
                      marginTop: 1,
                    }}
                  />
                </Text>
                <Text style={styles.subText}>
                  {' '}
                  {dataLeads.secondary_product_name}{' '}
                  <Icon name={'close'} size={16} color="red" />
                </Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.text}>Price</Text>
                <Text style={styles.subText}> -</Text>
              </View>
            </View>
            {/* right */}
            <View style={{margin: 10}}>
              <View style={styles.contentImage}>
                <Image
                  source={require('../../assets/watches-trader/crown/jm.png')}
                  style={{
                    height: 150,
                    width: 150,
                    resizeMode: 'contain',
                    marginVertical: 10,
                  }}
                />
                <Text style={styles.subText}>{dataLeads.product_code}</Text>
                <View>
                  <Text style={styles.text}>Unworn</Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 5,
                  alignItems: 'center',
                  alignSelf: 'flex-end',
                }}>
                <Text style={styles.text}>Priority</Text>
                <Image
                  source={require('../../assets/watches-trader/icon/pencil.png')}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    marginTop: 5,
                  }}
                />
              </View>
            </View>
          </View>
          {/* card */}
          <View style={styles.card}>
            <Text
              style={[
                {fontSize: 12, textAlign: 'center', marginBottom: 10},
                styles.subText,
              ]}>
              Today
            </Text>
            <View style={styles.msgContainer}>
              <Text style={[{}, styles.text]}>14:21 </Text>
              <Text style={[{flex: 1}, styles.subText]}>
                Saya minta pricelist untuk jm tanganij adisjd iajs dija sidj
                aisd
              </Text>
            </View>
            <Text
              style={[
                {fontSize: 10, textAlign: 'right', marginTop: 20},
                styles.subText,
              ]}>
              Last update 29 Aug 2023
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#E7E5E0',
              paddingVertical: 10,
              borderRadius: 10,
              marginTop: -20,
              elevation: 10,
              width: 100,
              alignSelf: 'center',
            }}>
            <Text
              style={[
                {
                  textAlign: 'center',
                  letterSpacing: 1,
                },
                styles.text,
              ]}>
              SEE ALL
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#E7E5E0',
              paddingVertical: 10,
              borderRadius: 10,
              elevation: 2,
              marginVertical: 40,
              width: 180,
              alignSelf: 'center',
              flexDirection: 'row',
              paddingHorizontal: 15,
            }}>
            <Image
              source={require('../../assets/watches-trader/icon/add.png')}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={[
                {
                  textAlign: 'center',
                  flex: 1,
                },
                styles.text,
              ]}>
              ADD ACTION
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  rowName: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  container: {
    marginVertical: 10,
  },
  containerButton: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  msgContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
  },
  nameContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  subText: {
    color: '#483729',
  },
  text: {
    color: '#483729',
    fontWeight: 'bold',
  },
  contentImage: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  card: {
    backgroundColor: '#E7E5E0',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginTop: 20,
    elevation: 5,
  },
});
