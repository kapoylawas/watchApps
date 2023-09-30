/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import React from 'react';

//import useNavigation
import {useNavigation} from '@react-navigation/native';

//import material icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//import momen js
import 'moment/locale/id';

import LinearGradient from 'react-native-linear-gradient';

export default function Schedule({data}) {
  //ini navigation
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#D39001', '#694C20']} // Warna gradient
      style={styles.card}
      useAngle={true}
      angle={135}>
      <View style={styles.rowItemCenter}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            <Text>Meet with </Text>
            <Text style={{fontWeight: 'bold'}}>Mr. Ramzy</Text>
          </Text>
          <View style={styles.row}>
            <Image
              source={require('../assets/watches-trader/icon/loc-1.png')}
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
                marginRight: 7,
              }}
            />
            <Text style={styles.subTitle}>
              Excelso - SUB A Yani {'\n'}5 September 2023 - 12:30
            </Text>
          </View>
        </View>
        <MaterialIcons name="launch" size={40} style={styles.image} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row', // Untuk mengatur teks dan gambar secara horizontal
    alignItems: 'center',
  },
  image: {
    color: 'white',
    marginLeft: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: 'white', // Warna teks
    fontSize: 18,
    marginBottom: 15,
  },
  subTitle: {
    marginTop: -3,
    color: 'white',
    marginBottom: 10,
    width: 230,
    lineHeight: 20,
  },
  row: {
    flexDirection: 'row',
  },
  rowItemCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconUser: {
    marginRight: 10,
    color: '#FFF',
  },
});
