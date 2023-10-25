/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//import material icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Schedule from '../../components/Schedule';
import DateCard from '../../components/DateCard';
import Floatingbutton from '../../components/Floatingbutton';
import ButtonBiodata from '../../components/ButtonBiodata';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../../components/Card';
import Loading from '../../components/Loding';

export default function HomeScreen() {
  const [loadingLead, setLoadingLead] = useState(true);
  const [dataLead, setDataLead] = useState([]);

  const [loadingEmploye, setLoadingEmploye] = useState(true);
  const [dataEmploye, setEmploye] = useState([]);

  const getDataEmploye = async () => {
    setLoadingEmploye(true);
    const token1 = await AsyncStorage.getItem('@tokenLogin');
    const idAuth = await AsyncStorage.getItem('@idLogin');
    fetch(`http://10.50.1.162:8000/api/v1/today-lead?employeeId=${idAuth}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token1,
      },
    })
      .then(response => response.json())
      .then(json => {
        setEmploye(json.data);
        setLoadingEmploye(false);
      })
      .catch(err => console.log(err));
  };

  const getDataHome = async () => {
    setLoadingLead(true);
    const token = await AsyncStorage.getItem('@tokenLogin');
    fetch(`http://10.50.1.162:8000/api/v1/lead`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json())
      .then(json => {
        setDataLead(json.data);
        setLoadingLead(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getDataEmploye();
    getDataHome();
  }, []);
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
          {loadingEmploye ? <Loading /> : <Card data={dataEmploye} />}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.postText}>UPCOMING SCHEDULE</Text>
        </View>
        <View>
          <ScrollView showsScrollIndicator={false}>
            {loadingLead ? (
              <Loading />
            ) : (
              <FlatList
                data={dataLead}
                keyExtractor={item => item.id}
                scrollEnabled={false}
                renderItem={({item, index}) => (
                  <Schedule data={item} index={index} />
                )}
              />
            )}
          </ScrollView>
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
  // card atas
  card: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row', // Untuk mengatur teks dan gambar secara horizontal
    alignItems: 'center',
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
