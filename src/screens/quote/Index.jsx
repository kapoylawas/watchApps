/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native';
import InputQuote from '../../components/InputQuote';

export default function QuoteScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{paddingTop: 23, paddingHorizontal: 23, paddingBottom: 0}}
      showsVerticalScrollIndicator={false}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            source={require('../../assets/watches-trader/icon/close.png')}
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#483729',
            letterSpacing: 1,
          }}>
          QUOTE TO :
        </Text>
      </View>
      <InputQuote />
    </ScrollView>
  );
}
