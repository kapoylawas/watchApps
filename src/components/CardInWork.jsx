import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CardInWork = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#EFEEEA', '#E7E5E0']} // Warna gradien untuk kartu di kiri
        style={styles.cardLeft}
        useAngle={true}
        angle={135}>
        <Text style={styles.cardText} />
      </LinearGradient>

      <LinearGradient
        colors={['#EFEEEA', '#E7E5E0']} // Warna gradien untuk kartu di kanan
        style={styles.cardRight}
        useAngle={true}
        angle={135}>
        <Text style={styles.cardText} />
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
    height: 120,
    elevation: 5,
  },
  cardRight: {
    flex: 1,
    borderRadius: 8,
    padding: 15,
    marginLeft: 8,
    height: 120,
    elevation: 5,
  },
  cardText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CardInWork;
