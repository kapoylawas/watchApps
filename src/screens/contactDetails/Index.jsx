/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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

export default function ContactDetailsScreen({route}) {
  //destruct id
  const {id} = route.params;
  console.log('data id =>', id);
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <ScrollView
        style={{paddingBottom: 100, marginBottom: 10}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingTop: 17,
            paddingHorizontal: 15,
          }}>
          <ButtonBackOption backTo={'Home'} />
        </View>
        <View style={styles.logoContainer}>
          <View
            style={{
              backgroundColor: '#E7E5E0',
              padding: 5,
              elevation: 7,
              borderRadius: 100,
            }}>
            <Image
              source={require('../../assets/watches-trader/crown/gold.png')} // Adjust the path to your logo image
              style={styles.logo}
            />
          </View>
          <Text style={styles.nameText}>Ramzy</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <TouchableOpacity style={styles.headerButton}>
              <Image
                source={require('../../assets/watches-trader/icon/message.png')} // Adjust the path to your logo image
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Image
                source={require('../../assets/watches-trader/icon/call.png')} // Adjust the path to your logo image
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Image
                source={require('../../assets/watches-trader/icon/email.png')} // Adjust the path to your logo image
                style={styles.email}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Image
                source={require('../../assets/watches-trader/icon/message.png')} // Adjust the path to your logo image
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* card top */}
        <View
          style={{
            marginTop: 25,
            backgroundColor: '#E7E5E0',
            paddingVertical: 20,
            marginHorizontal: 25,
            borderRadius: 10,
            elevation: 5,
          }}>
          <Text
            style={{
              color: '#000',
              left: 35,
            }}>
            0812123123123
          </Text>
          <View style={styles.container}>
            <View style={styles.containerInput}>
              <View style={styles.garis} />
              {/* <View style={styles.garis} /> */}
              <Text style={{right: 50}}>ramzy@gmail.com</Text>
            </View>
          </View>
          <Text
            style={{
              color: '#000',
              left: 35,
            }}>
            0812123123123
          </Text>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View style={styles.containerNoCard}>
            <Text style={styles.nameTs}>Transaction</Text>
            <View style={styles.garisNoCard} />
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
            backgroundColor: '#E7E5E0',
            paddingVertical: 20,
            marginHorizontal: 25,
            borderRadius: 10,
            elevation: 5,
          }}>
          <View style={styles.row}>
            <Image
              source={require('../../assets/watches-trader/crown/jm.png')}
              style={{
                height: 50,
                width: 50,
                resizeMode: 'contain',
                marginRight: 7,
              }}
            />
            <Text style={styles.subTitle}>
              Tudor{'\n'}Royal{'\n'}M28503-0007
            </Text>
            <Text style={{marginLeft: -20}}>Excelso{'\n'}IDR 55.755</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
            backgroundColor: '#E7E5E0',
            paddingVertical: 20,
            marginHorizontal: 25,
            borderRadius: 10,
            elevation: 5,
          }}>
          <Text></Text>
        </View>
        <View
          style={{
            marginTop: 25,
            backgroundColor: '#E7E5E0',
            paddingVertical: 20,
            marginHorizontal: 25,
            borderRadius: 10,
            elevation: 5,
          }}>
          <Text></Text>
        </View>
        <View
          style={{
            marginTop: 25,
            backgroundColor: '#E7E5E0',
            paddingVertical: 20,
            marginHorizontal: 25,
            borderRadius: 10,
            elevation: 5,
            marginBottom: 30,
          }}>
          <Text></Text>
        </View>
        <View style={styles.logoContainer}>
          <Text style={styles.nameBottom}>SEE ALL</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  logo: {
    width: 70, // Adjust the width as needed
    height: 70, // Adjust the height as needed
    resizeMode: 'contain',
  },
  icon: {
    width: 30, // Adjust the width as needed
    height: 30, // Adjust the height as needed
  },
  email: {
    width: 35, // Adjust the width as needed
    height: 30, // Adjust the height as needed
  },
  quote: {
    width: 40, // Adjust the width as needed
    height: 30, // Adjust the height as needed
  },
  nameText: {
    color: '#483729',
    fontWeight: 'bold',
    fontSize: 20,
    top: 10,
  },
  headerButton: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#E7E5E0',
    marginRight: 10,
    flexDirection: 'row',
    paddingHorizontal: 25,
    height: 50,
  },
  headerButtonText: {
    color: '#483729',
  },
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E7E5E0',
    paddingVertical: 5,
  },
  containerInput: {
    flex: 1,
    flexDirection: 'row', // Menggunakan flexDirection: 'row' untuk mengatur tata letak horizontal
    justifyContent: 'space-between', // Menggunakan justifyContent: 'space-between' untuk menjaga jarak antara input
    alignItems: 'center', // Menggunakan alignItems: 'center' untuk menengahkan input secara vertikal
    marginLeft: 20,
  },
  garis: {
    width: 140, // Panjang garis
    height: 1, // Lebar garis
    backgroundColor: '#fff', // Warna garis
  },
  containerNoCard: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingVertical: 5,
  },
  garisNoCard: {
    width: 250, // Panjang garis
    height: 1, // Lebar garis
    backgroundColor: '#000', // Warna garis
    top: 23,
    left: 20,
  },
  nameTs: {
    color: '#483729',
    fontWeight: 'bold',
    fontSize: 15,
    top: 10,
  },
  row: {
    flexDirection: 'row',
  },
  subTitle: {
    marginTop: -3,
    color: 'black',
    marginBottom: 10,
    width: 230,
    lineHeight: 20,
  },
  nameBottom: {
    color: '#483729',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    top: 10,
    marginBottom: 40,
  },
});
