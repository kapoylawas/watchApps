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

export default function ScheduleScreen() {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [dates, setDates] = useState([]);

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
});
