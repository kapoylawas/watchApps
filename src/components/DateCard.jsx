import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DateCard = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#D39001', '#694C20']} // Warna gradien untuk kartu di kiri
        style={styles.cardLeft}>
        <Text style={styles.cardText}>Kartu Kiri</Text>
      </LinearGradient>

      <LinearGradient
        colors={['#D39001', '#694C20']} // Warna gradien untuk kartu di kanan
        style={styles.cardRight}>
        <Text style={styles.cardText}>Kartu Kanan</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 6,
    marginTop: -5,
  },
  cardLeft: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    marginRight: 8,
    height: 80,
  },
  cardRight: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    marginLeft: 8,
    height: 80,
  },
  cardText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DateCard;
