/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import ButtonBackOption from '../../components/ButtonBackOption';

export default function ContactDetailsScreen() {
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
    </SafeAreaView>
  );
}
