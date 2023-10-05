/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonBackOption from '../../components/ButtonBackOption';
import {useNavigation} from '@react-navigation/native';

export default function InWorkScreen() {
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.navigate('Home');
  };
  const goLeads = () => {
    navigation.navigate('Leads');
  };
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: '#E7E5E0',
              padding: 10,
              marginRight: 10,
            }}>
            <Image
              source={require('../../assets/watches-trader/icon/search.png')}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          {/* scroll menu */}
          <ScrollView
            style={{
              height: 40,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.headerButton} onPress={goLeads}>
              <Text style={styles.headerButtonText}>Leads</Text>
              <View style={styles.headerButtonCounter}>
                <Text style={{color: '#fff'}}>1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButtonActive}>
              <Text style={styles.headerButtonTextActive}>In Work</Text>
              <View style={styles.headerButtonCounter}>
                <Text style={{color: '#fff'}}>17</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton} onPress={goToHome}>
              <Text style={styles.headerButtonText}>Deals</Text>
              <View style={styles.headerButtonCounter}>
                <Text style={{color: '#fff'}}>2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton} onPress={goToHome}>
              <Text style={styles.headerButtonText}>Archived</Text>
              <View style={styles.headerButtonCounter}>
                <Text style={{color: '#fff'}}>2</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerButton: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E7E5E0',
    marginRight: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headerButtonText: {
    color: '#483729',
  },
  headerButtonActive: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#483729',
    marginRight: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headerButtonTextActive: {
    color: '#FFF',
  },
  headerButtonCounter: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    borderRadius: 10,
    backgroundColor: '#D39001',
    marginLeft: 10,
  },
});
