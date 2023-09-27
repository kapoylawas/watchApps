/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LeadsScreen() {
  const navigation = useNavigation();

  // Fungsi untuk kembali ke halaman Home
  const goToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <TouchableOpacity onPress={goToHome}>
          <Icon
            name="arrow-left"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 30,
              height: 30,
              borderRadius: 45,
              padding: 2,
            }}
            size={20}
            color="#000"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToHome}>
          <Icon
            name="tasks"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 30,
              height: 30,
              borderRadius: 45,
              padding: 2,
            }}
            size={20}
            color="#000"
          />
        </TouchableOpacity>
      </View>
      {/* tombol search */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <TouchableOpacity onPress={goToHome}>
          <Icon
            name="search"
            style={{
              // justifyContent: 'center',
              alignItems: 'center',
              width: 45,
              height: 50,
              borderRadius: 10,
              backgroundColor: '#E7E5E0',
              padding: 2,
              marginLeft: 10,
            }}
            size={38}
            color="#000"
          />
        </TouchableOpacity>
        <ScrollView
          style={{marginRight: 5}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={goToHome}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 80,
                height: 50,
                borderRadius: 10,
                backgroundColor: '#E7E5E0',
                padding: 2,
                marginLeft: 10,
              }}
              size={38}
              color="#000">
              <Text
                color="#000"
                style={{justifyContent: 'center', alignItems: 'center'}}>
                Leads
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToHome}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 80,
                height: 50,
                borderRadius: 10,
                backgroundColor: '#E7E5E0',
                padding: 2,
                marginLeft: 10,
              }}
              size={38}
              color="#000">
              <Text
                color="#000"
                style={{justifyContent: 'center', alignItems: 'center'}}>
                Leads
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToHome}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 80,
                height: 50,
                borderRadius: 10,
                backgroundColor: '#E7E5E0',
                padding: 2,
                marginLeft: 10,
              }}
              size={38}
              color="#000">
              <Text
                color="#000"
                style={{justifyContent: 'center', alignItems: 'center'}}>
                Leads
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToHome}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 80,
                height: 50,
                borderRadius: 10,
                backgroundColor: '#E7E5E0',
                padding: 2,
                marginLeft: 10,
              }}
              size={38}
              color="#000">
              <Text
                color="#000"
                style={{justifyContent: 'center', alignItems: 'center'}}>
                Leads
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToHome}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 80,
                height: 50,
                borderRadius: 10,
                backgroundColor: '#E7E5E0',
                padding: 2,
                marginLeft: 10,
              }}
              size={38}
              color="#000">
              <Text
                color="#000"
                style={{justifyContent: 'center', alignItems: 'center'}}>
                Leads
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View style={styles.card}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 'auto',
            }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 380,
    height: 530,
    backgroundColor: '#E7E5E0',
    borderRadius: 20, // Mengatur border radius untuk membuat card menjadi oval
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    color: '#8E6413', // Warna emas
    textAlign: 'center', // Center-align the text
    fontSize: 15,
  },
});
