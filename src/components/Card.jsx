import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Card = () => {
  return (
    <LinearGradient
      colors={['#D39001', '#694C20']} // Warna gradient
      style={styles.card}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Text style={styles.texttesting}>Today Leads</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.texttesting}>All Leads</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.texttesting}>All Deals</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.bottomText}>Total Leads Today</Text>
            <Text style={styles.numberText}>5,2%</Text>
          </View>
          {/* <View style={styles.line}></View> */}
          <View>
            <Text style={styles.bottomText}>Leads</Text>
            <Text style={styles.rightText}>17 Leads</Text>
            <Text style={styles.bottomText}>Deal</Text>
            <Text style={styles.rightText}>2 Deal</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row', // Untuk mengatur teks dan gambar secara horizontal
    alignItems: 'center',
    height: 'auto',
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
    // backgroundColor: 'white',
    justifyContent: 'center',
    top: -35,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  textContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    // borderColor: '#ccc',
  },
  texttesting: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomText: {
    fontSize: 14,
    color: 'white',
  },
  numberText: {
    fontSize: 30,
    color: 'white',
  },
  rightText: {
    fontWeight: 'bold',
    color: 'white',
  },
  line: {
    height: 80,
    flex: 0.1,
    backgroundColor: 'white',
    // marginHorizontal: 5,
  },
});

export default Card;
