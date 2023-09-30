import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DateCard = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#D39001', '#694C20']} // Warna gradien untuk kartu di kiri
        style={styles.cardLeft}
        useAngle={true}
        angle={135}>
        <Text style={styles.cardText}>-</Text>
      </LinearGradient>

      <LinearGradient
        colors={['#D39001', '#694C20']} // Warna gradien untuk kartu di kanan
        style={styles.cardRight}
        useAngle={true}
        angle={135}>
        <Text style={styles.cardText}>-</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flex: 1,
    borderRadius: 8,
    padding: 15,
    marginRight: 8,
    height: 80,
  },
  cardRight: {
    flex: 1,
    borderRadius: 8,
    padding: 15,
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
