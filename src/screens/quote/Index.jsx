/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native';
import InputQuote from '../../components/InputQuote';

export default function QuoteScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <MaterialIcons
              name="close"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 30,
                height: 30,
                borderRadius: 45,
                padding: -1,
              }}
              size={30}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#483729',
            }}>
            QUOTE TO :
          </Text>
        </View>
        <InputQuote />
      </ScrollView>
    </View>
  );
}
