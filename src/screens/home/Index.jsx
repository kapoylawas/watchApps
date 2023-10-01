/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//import material icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Cardform from '../../components/Card';
import Schedule from '../../components/Schedule';
import DateCard from '../../components/DateCard';
import Floatingbutton from '../../components/Floatingbutton';
import ButtonBiodata from '../../components/ButtonBiodata';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        style={{paddingTop: 10, paddingHorizontal: 15, paddingBottom: 70}}
        showsVerticalScrollIndicator={false}>
        <ButtonBiodata />
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/icons/logojam.png')} // Adjust the path to your logo image
            style={styles.logo}
          />
        </View>
        <View style={styles.sectionContainer}>
          <MaterialIcons name="today" style={styles.dateIcon} size={20} />
          <Text style={styles.dateText}>28 AUG 2023</Text>
        </View>
        <View>
          <Cardform />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.postText}>UPCOMING SCHEDULE</Text>
        </View>
        <View>
          <Schedule />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.postText}>DUE DATE</Text>
        </View>
        <View>
          <DateCard />
        </View>
        <View
          style={[
            styles.sectionContainer,
            styles.textCenter,
            styles.endSection,
          ]}>
          <Text style={styles.postText}>SEE ALL</Text>
        </View>
      </ScrollView>
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
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: -15,
  },
  logo: {
    width: 120, // Adjust the width as needed
    height: 120, // Adjust the height as needed
    resizeMode: 'contain',
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
  sectionContainer: {
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
  textCenter: {
    alignSelf: 'center',
  },
  endSection: {
    marginBottom: 180,
  },
});
