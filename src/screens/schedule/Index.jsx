/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonBackOption from '../../components/ButtonBackOption';
import moment from 'moment';
import Api from '../../api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Loading from '../../components/Loding';

export default function ScheduleScreen() {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [dates, setDates] = useState([]);
  const [loadingDate, setLoadingDate] = useState(true);
  const [dataDate, setDataDate] = useState([]);
  console.log('secedule by date =>', dataDate);

  const tanggal = selectedDate;
  const dateAwal = new Date(tanggal);

  const tanggalAkhir = dateAwal.toLocaleString('sv-SE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  console.log('tanggal =>', tanggalAkhir);

  useEffect(() => {
    // Generate an array of 5 dates including the selected date
    const generatedDates = [];
    for (let i = -2; i <= 2; i++) {
      const date = moment(selectedDate).add(i, 'days');
      generatedDates.push(date);
    }
    setDates(generatedDates);
  }, [selectedDate]);

  const handleDateClick = date => {
    setSelectedDate(date);
  };

  const getDataContact = async () => {
    //set loading true
    setLoadingDate(true);
    const token = await AsyncStorage.getItem('@tokenLogin');
    await Api.get(`/schedule-on/${tanggalAkhir}`, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }).then(response => {
      //assign data to state
      setDataDate(response.data.data);

      //set loading false
      setLoadingDate(false);
    });
  };

  useEffect(() => {
    getDataContact();
  }, [selectedDate]);

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

      <View style={styles.container}>
        {dates.map((date, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleDateClick(date)}
            style={[
              styles.dateItem,
              moment(date).isSame(selectedDate, 'day') && styles.activeDate,
            ]}>
            <Text>{moment(date).format('D')}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {loadingDate ? (
        <Loading />
      ) : dataDate.length > 0 ? (
        <FlatList
          data={dataDate}
          keyExtractor={item => item.toString()}
          renderItem={({item, index}) => (
            <LinearGradient
              colors={['#694C20']} // Warna gradient
              style={styles.card}
              useAngle={true}
              angle={135}>
              <View style={styles.rowItemCenter}>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>
                    <Text>Meet with </Text>
                    <Text style={{fontWeight: 'bold'}}>asdasd</Text>
                  </Text>
                  <View style={styles.row}>
                    <Image
                      source={require('../../assets/watches-trader/icon/loc-1.png')}
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
          )}
        />
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>Data Tidak Di Temukan</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  dateItem: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  activeDate: {
    backgroundColor: '#8E6413',
    color: 'white',
  },
  card: {
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row', // Untuk mengatur teks dan gambar secara horizontal
    alignItems: 'center',
    marginBottom: 7,
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
  containerKosong: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 5,
    color: '#333333',
  },
});
