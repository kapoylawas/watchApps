/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native';
import ButtonBackOption from '../../components/ButtonBackOption';

export default function ContactScreen() {
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
      <View style={{paddingBottom: 50, paddingTop: 20, paddingHorizontal: 25}}>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: '#E7E5E0',
              padding: 5,
              elevation: 6,
              borderRadius: 100,
            }}>
            <Image
              source={require('../../assets/watches-trader/crown/silver.png')}
              style={{
                height: 40,
                width: 40,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>Budi</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View
            style={{
              padding: 4,
              elevation: 5,
              borderRadius: 100,
            }}>
            <Image
              source={require('../../assets/watches-trader/icon/user.png')}
              style={{
                height: 40,
                width: 40,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>John Doe</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.container}>
            <View
              style={{
                backgroundColor: '#E7E5E0',
                padding: 5,
                elevation: 6,
                borderRadius: 100,
              }}>
              <Image
                source={require('../../assets/watches-trader/crown/gold.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>Ramzy</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.container}>
          <View
            style={{
              padding: 4,
              elevation: 5,
              borderRadius: 100,
            }}>
            <Image
              source={require('../../assets/watches-trader/icon/user.png')}
              style={{
                height: 40,
                width: 40,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>Zamroni</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingVertical: 20,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },
  nameText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
