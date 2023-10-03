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
import ButtonBackOption from '../../components/ButtonBackLeads';

export default function LeadsEditScreen() {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <ScrollView
        style={{paddingBottom: 100, marginBottom: 10}}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingTop: 17, paddingHorizontal: 15}}>
          <ButtonBackOption />
          <View style={styles.container}>
            <View
              style={{
                backgroundColor: '#E7E5E0',
                padding: 10,
                marginRight: 3,
                elevation: 4,
                borderRadius: 35,
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
              <Text
                style={{color: '#483729', fontWeight: 'bold', fontSize: 20}}>
                Ramzy{' '}
                <Image
                  source={require('../../assets/watches-trader/icon/pencil.png')}
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
              </Text>
              <Text style={{color: '#483729', fontSize: 10}}>
                <Image
                  source={require('../../assets/watches-trader/icon/add.png')}
                  style={{
                    height: 10,
                    width: 10,
                  }}
                />{' '}
                Ramzy
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#E7E5E0',
                alignItems: 'center',
                borderRadius: 10,
                marginRight: 10,
                flexDirection: 'row',
                paddingHorizontal: 10,
                height: 40,
                marginTop: 10,
                elevation: 5,
              }}>
              <Text style={styles.subText}>Assign to</Text>
            </View>
          </View>
          {/* phone number */}
          <View style={styles.container}>
            <Text style={styles.text}>Phone number</Text>
            <View style={{marginLeft: -15}}>
              <Image
                source={require('../../assets/watches-trader/icon/pencil.png')}
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: 'contain',
                  marginTop: 1,
                }}
              />
            </View>
            <Text
              style={{
                color: '#483729',
                fontSize: 12,
                marginLeft: -100,
                marginTop: 20,
              }}>
              {' '}
              0812345678xxx
            </Text>
            <View style={styles.right}>
              <Image
                source={require('../../assets/watches-trader/crown/jm.png')}
                style={{
                  height: 100,
                  width: 90,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{alignItems: 'center'}}>SKU-123456</Text>
              <View>
                <Text
                  style={{
                    alignItems: 'center',
                    marginLeft: 12,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  {' '}
                  Unworn
                </Text>
              </View>
            </View>
          </View>
          {/* inquiry */}
          <View style={{marginTop: -105, marginLeft: 5}}>
            <Text style={{color: '#483729', fontWeight: 'bold'}}>
              Inquiry{' '}
              <Image
                source={require('../../assets/watches-trader/icon/pencil.png')}
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: 'contain',
                  marginTop: 1,
                }}
              />
            </Text>
            <Text style={{color: '#483729', fontSize: 12, marginLeft: 12}}>
              {' '}
              GMT-MASTER II{' '}
              <Image
                source={require('../../assets/watches-trader/icon/centang.png')}
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: 'contain',
                  marginTop: 1,
                }}
              />
            </Text>
          </View>
          {/* 2ND INQUIRY */}
          <View style={{marginTop: 11, marginLeft: 5}}>
            <Text style={{color: '#483729', fontWeight: 'bold'}}>Price </Text>
            <Text style={{color: '#483729', fontSize: 12, marginLeft: 12}}>
              {' '}
              IDR 123456{' '}
            </Text>
          </View>
          <View style={{marginTop: 11, marginLeft: 5}}>
            <Text style={{color: '#483729', fontWeight: 'bold'}}>
              2nd Inquiry{' '}
            </Text>
            <Text style={{color: '#483729', fontSize: 12, marginLeft: 12}}>
              {' '}
              Yacht-Master{' '}
              <Image
                source={require('../../assets/watches-trader/icon/silang.png')}
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: 'contain',
                  marginTop: 1,
                }}
              />
            </Text>
          </View>

          {/* PRICE AND PRIORTY */}
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text
                style={{color: '#483729', fontWeight: 'bold', fontSize: 20}}>
                Price{' '}
              </Text>
              <Text
                style={{color: '#483729', fontSize: 20, alignItems: 'center'}}>
                {' '}
                -
              </Text>
            </View>
            <View style={{marginRight: 20, marginTop: 5}}>
              <Text
                style={{color: '#483729', fontWeight: 'bold', fontSize: 20}}>
                Priority{' '}
              </Text>
              <Image
                source={require('../../assets/watches-trader/icon/pencil.png')}
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: 'contain',
                  marginTop: 5,
                  marginLeft: 20,
                }}
              />
            </View>
          </View>
          {/* card */}
          <View style={styles.card}>
            <View style={styles.cardContainer}>
              <Text>
                <Text style={{fontWeight: 'bold'}}>14:20</Text>{' '}
                <Text>Halo</Text>
              </Text>
            </View>
            <View>
              <Text>
                <Text style={{fontWeight: 'bold'}}>14:21</Text>{' '}
                <Text>Saya minta pricelist untuk jm tangan</Text>
              </Text>
            </View>
            <View style={{marginTop: 60, marginLeft: 250}}>
              <Text>
                <Text style={{fontSize: 9}}>Last update 29 Aug 2023</Text>
              </Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#E7E5E0',
              paddingVertical: 15,
              marginHorizontal: 150,
              borderRadius: 10,
              marginTop: -90,
              elevation: 5,
            }}>
            <Text
              style={{
                color: '#000',
                textAlign: 'center',
                letterSpacing: 2,
              }}>
              SEE ALL
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 50, marginTop: 50}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E7E5E0',
              paddingVertical: 5,
              marginHorizontal: 110,
              borderRadius: 10,
              elevation: 5,
            }}>
            <Text
              style={{
                color: '#000',
                textAlign: 'center',
                letterSpacing: 2,
              }}>
              <Image
                source={require('../../assets/watches-trader/icon/add.png')}
                style={{
                  height: 10,
                  width: 10,
                }}
              />{' '}
              ADD ACTION
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 50, marginTop: 10}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E7E5E0',
              paddingVertical: 15,
              marginHorizontal: 140,
              borderRadius: 10,
              elevation: 5,
            }}>
            <Text
              style={{
                color: '#000',
                textAlign: 'center',
                letterSpacing: 2,
              }}>
              SAVE
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#FFF',
    paddingVertical: 20,
  },
  containerButton: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  cardContainer: {
    marginTop: 20,
  },
  textContainer: {
    flex: 2,
    marginHorizontal: 20,
    marginTop: 5,
  },
  subText: {
    color: '#483729',
    marginTop: 2,
  },
  text: {
    color: '#483729',
    fontWeight: 'bold',
    marginLeft: 5,
    marginHorizontal: 20,
  },
  right: {
    marginLeft: 190,
    marginTop: 1,
  },
  card: {
    width: 360,
    backgroundColor: '#E7E5E0',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 70,
    marginTop: 1,
    elevation: 5,
  },
});
