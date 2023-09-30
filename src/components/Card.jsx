/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Card = () => {
  return (
    <LinearGradient
      colors={['#D39001', '#694C20']} // Warna gradient
      style={styles.card}
      useAngle={true}
      angle={135}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.textContainerActive}>
            <Text style={styles.texttestingActive}>Today Leads</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.texttesting}>All Leads</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.texttesting}>All Deals</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{width: 170, marginRight: 10}}>
            <Text style={styles.bottomText}>Total Leads Today</Text>
            <Text style={styles.numberText}>5,2%</Text>
            <View style={styles.rowLeft}>
              <MaterialIcons
                name="arrow-upward"
                size={20}
                style={{
                  color: '#7CFC00',
                  fontWeight: 'bold',
                  marginRight: 2,
                }}
              />
              <Text style={styles.bottomText}>More than yesterday</Text>
            </View>
          </View>
          <View
            style={{
              borderColor: 'white',
              borderRightWidth: 1,
              height: 70,
              marginTop: 25,
            }}
          />
          <View style={{width: 120, marginLeft: 10}}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.bottomText}>Leads</Text>
              <Text style={styles.rightText}>17 Leads</Text>
              <Text style={styles.bottomText}>Deals</Text>
              <Text style={styles.rightText}>3 Deals</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row', // Untuk mengatur teks dan gambar secara horizontal
    alignItems: 'center',
  },
  //   textContainer: {
  //     flex: 1, // Untuk memungkinkan teks mengisi sisa ruang yang tersedia
  //   },
  text: {
    color: 'white', // Warna teks
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerUser: {
    flexDirection: 'row',
  },
  iconUser: {
    marginRight: 10,
    color: '#FFF',
  },
  container3: {
    flex: 1,
    flexDirection: 'row', // Membuat teks berjejer secara horizontal
    justifyContent: 'center', // Mengatur posisi teks ke tengah secara horizontal
    alignItems: 'center', // Mengatur posisi teks ke tengah secara vertikal
    // backgroundColor: 'white', // Latar belakang putih
  },
  textContainer3: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white', // Latar belakang abu-abu muda untuk teks
    borderRadius: 10,
    top: -5,
  },
  text3: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 23,
  },
  textContainer: {
    backgroundColor: '#e7e5df',
    borderRadius: 5,
    paddingVertical: 4,
    textAlign: 'center',
    width: 100,
  },
  texttesting: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#483729',
  },
  textContainerActive: {
    backgroundColor: '#483729',
    borderRadius: 5,
    paddingVertical: 4,
    textAlign: 'center',
    width: 100,
  },
  texttestingActive: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#e7e5df',
  },
  bottomText: {
    color: 'white',
  },
  numberText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 2,
    marginVertical: 10,
  },
  rightText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  line: {
    height: 80,
    flex: 0.1,
    backgroundColor: 'white',
    // marginHorizontal: 5,
  },
});

export default Card;
