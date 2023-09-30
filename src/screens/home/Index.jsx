/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

//import material icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Cardform from '../../components/Card';
import Schedule from '../../components/Schedule';
import DateCard from '../../components/DateCard';
import Floatingbutton from '../../components/Floatingbutton';
import ButtonBiodata from '../../components/ButtonBiodata';

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{paddingTop: 23, paddingHorizontal: 23, paddingBottom: 23}}>
      <ButtonBiodata />
      <View style={styles.container}>
        <Image
          source={require('../../assets/icons/logojam.png')} // Adjust the path to your logo image
          style={styles.logo}
        />
      </View>
      <View style={styles.dateContainer}>
        <MaterialIcons name="today" style={styles.dateIcon} size={20} />
        <Text style={styles.dateText}>28 AUG 2023</Text>
      </View>
      <View>
        <Cardform />
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postText}>UPCOMING SCHEDULE</Text>
      </View>
      <View>
        <Schedule />
      </View>
      <View style={styles.dueDateContainer}>
        <Text style={styles.postText}>DUE DATE</Text>
      </View>
      <View>
        <DateCard />
      </View>
      <View style={{flex: 1}}>
        <Text>See All</Text>
      </View>
      <View>
        {/* Konten lain dalam komponen */}
        <Floatingbutton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  labelContainer: {
    marginTop: 5,
    flexDirection: 'row',
  },
  labelIcon: {
    marginRight: 20,
    color: '#333333',
  },
  labelText: {
    color: '#333333',
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 30,
  },
  logo: {
    width: 120, // Adjust the width as needed
    height: 120, // Adjust the height as needed
    resizeMode: 'contain',
  },
  dateContainer: {
    marginTop: 60,
    flexDirection: 'row',
    marginBottom: 5,
  },
  dateIcon: {
    marginRight: 5,
    color: '#483729',
  },
  dateText: {
    color: '#483729',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContainer: {
    marginTop: 20,
    marginBottom: 5,
    flexDirection: 'row',
  },
  postIcon: {
    marginRight: 5,
    color: '#483729',
  },
  postText: {
    color: '#483729',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  dueDateContainer: {
    marginTop: 20,
    marginBottom: 5,
    flexDirection: 'row',
  },
});
