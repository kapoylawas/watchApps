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
import LinearGradient from 'react-native-linear-gradient';
import CardInWork from '../../components/CardInWork';

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
        {/* card top */}
        <View
          style={{
            marginTop: 15,
            backgroundColor: '#E7E5E0',
            paddingVertical: 10,
            marginHorizontal: 10,
            borderRadius: 10,
            elevation: 8,
          }}>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              letterSpacing: 2,
            }}>
            {' '}
          </Text>
        </View>
        {/* card gradian user */}
        <TouchableOpacity>
          <LinearGradient
            colors={['#D39001', '#694C20']} // Warna gradient
            style={styles.card}
            useAngle={true}
            angle={135}>
            <View style={styles.rowItemCenter}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>
                  <Text style={{fontWeight: 'bold'}}>
                    Mr. Ramzy {''}
                    <Image
                      source={require('../../assets/watches-trader/crown/gold.png')}
                      style={{
                        height: 20,
                        width: 20,
                        resizeMode: 'contain',
                      }}
                    />
                  </Text>
                  {''}
                </Text>
                <Text style={styles.subTitle}>08573351238xxx</Text>
                <View style={styles.row}>
                  <View style={styles.number}>
                    <Text style={{color: '#000'}}>1</Text>
                  </View>
                  {''}
                  <Text style={{color: '#fff'}}>Action</Text>
                </View>
              </View>
              <View style={{width: 120}}>
                <Image
                  source={require('../../assets/watches-trader/crown/jm.png')}
                  style={styles.image}
                />
                <Text style={{color: '#fff'}}>GMT-MASTER II</Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <View
          style={{
            paddingTop: 13,
            paddingHorizontal: 15,
          }}>
          <CardInWork />
        </View>
        <View
          style={{
            paddingTop: 140,
            paddingHorizontal: 15,
          }}>
          <CardInWork />
        </View>
        <View style={{marginTop: 100, marginBottom: 30}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E7E5E0',
              paddingVertical: 10,
              borderRadius: 10,
              elevation: 2,
              marginVertical: 40,
              width: 110,
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={[
                {
                  textAlign: 'center',
                  flex: 1,
                },
                styles.text,
              ]}>
              MORE
            </Text>
          </TouchableOpacity>
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
  card: {
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row', // Untuk mengatur teks dan gambar secara horizontal
    alignItems: 'center',
    marginTop: 10,
    elevation: 10,
    marginHorizontal: 10,
  },
  rowItemCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: 100,
  },
  title: {
    color: 'white', // Warna teks
    fontSize: 18,
    marginBottom: 15,
  },
  subTitle: {
    color: 'white',
    marginBottom: 10,
    width: 230,
    lineHeight: 20,
    fontSize: 12,
    marginLeft: 10,
  },
  number: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: '#E7E5E0',
    marginLeft: 10,
    marginRight: 7,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    marginVertical: 10,
    marginLeft: 40,
  },
});
