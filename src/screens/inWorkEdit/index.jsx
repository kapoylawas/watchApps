/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import ButtonBackOption from '../../components/ButtonBackOption';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function InWorkEditScreen() {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingTop: 17, paddingHorizontal: 15, marginBottom: 30}}>
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
                Ramzy{' '}
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
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 10,
                marginTop: -15,
              }}>
              <Text style={styles.text}>Assign to</Text>
              <View
                style={{
                  backgroundColor: '#483729',
                  alignItems: 'center',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  elevation: 4,
                }}>
                <Text style={{color: 'white'}}>Joe</Text>
              </View>
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
                <Text style={styles.subText}> 0812345678xxx</Text>
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
                  GMT-MASTER II <Icon name={'check'} size={16} color="green" />
                </Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.text}>Price</Text>
                <Text style={styles.subText}> IDR 20.000.000</Text>
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
                  Yacht-Master <Icon name={'close'} size={16} color="red" />
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
                <Text style={styles.subText}>SKU-123456</Text>
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
          <View style={styles.containerBottom}>
            <Text style={styles.leftText}>P R O G E S</Text>
            <Text style={styles.rightText}>Due Date : 5 September 2023</Text>
          </View>
          <View style={styles.line} />
          {/* BOTTOM */}
          <View style={styles.containerLast}>
            <View style={styles.row}>
              <View style={{width: 170, marginRight: 10}}>
                <View style={styles.card2}></View>
                <View style={styles.card1}>
                  <Text style={{fontWeight: 'bold', color: '#000'}}>
                    EXCELSO - SUB A Yani
                  </Text>
                  <Text>Unsure about the product.</Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#E7E5E0',
                    paddingVertical: 5,
                    borderRadius: 5,
                    elevation: 2,
                    marginVertical: 50,
                    width: 150,
                    alignSelf: 'center',
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    marginLeft: 30,
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
              {/* gariss */}
              <View style={styles.lingkaranAtas}></View>
              <View style={styles.garis}></View>
              <View style={styles.lingkaranBawah}></View>
              <View style={{width: 120, right: 10, marginTop: 15}}>
                <Text style={styles.leftText}>EXPENSE</Text>
                <Text>IDR 230.000</Text>
              </View>
            </View>
          </View>
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
  card1: {
    backgroundColor: '#E7E5E0',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
    marginTop: -70,
    elevation: 5,
  },
  card2: {
    width: 160,
    height: 60,
    backgroundColor: '#483729',
    borderRadius: 10,
    top: 100, // Sesuaikan posisi top sesuai kebutuhan
    left: 0,
    marginBottom: 60,
    alignSelf: 'center',
  },
  containerBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  leftText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  rightText: {
    fontSize: 12,
    color: 'black',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
  },
  containerLast: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  garis: {
    width: 2, // Lebar garis
    height: 200, // Panjang garis
    backgroundColor: 'black', // Warna garis
    marginTop: 60,
    right: 10,
  },
  lingkaranAtas: {
    width: 20, // Diameter lingkaran atas
    height: 20, // Diameter lingkaran atas
    backgroundColor: 'black', // Warna lingkaran atas
    borderRadius: 10, // Membuatnya menjadi lingkaran
    // position: 'absolute',
    top: 40, // Mengatur posisi lingkaran atas di atas garis
    left: 20,
  },
  lingkaranBawah: {
    width: 20, // Diameter lingkaran bawah
    height: 20, // Diameter lingkaran bawah
    backgroundColor: 'black', // Warna lingkaran bawah
    borderRadius: 10, // Membuatnya menjadi lingkaran
    position: 'absolute',
    bottom: 0, // Mengatur posisi lingkaran bawah di bawah garis
    left: 220,
  },
});
