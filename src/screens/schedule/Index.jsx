/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import ButtonBackOption from '../../components/ButtonBackOption';

export default function ScheduleScreen() {
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
      <Text>halaman scedule</Text>
    </SafeAreaView>
  );
}
