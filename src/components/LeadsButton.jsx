import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LeadsButton() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Your app content goes here */}

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('Inputleads')}>
        <Icon name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Set your desired background color
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20, // Adjust the bottom distance as needed
    right: 20, // Adjust the right distance as needed
    backgroundColor: '#D39001', // Set your desired button color
    borderRadius: 30, // Make it round
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8, // Add elevation for a shadow (Android only)
  },
});
