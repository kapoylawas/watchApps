/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
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
import LeadsButton from '../../components/LeadsButton';
import ButtonBackOption from '../../components/ButtonBackOption';

export default function LeadsScreen() {
  const navigation = useNavigation();

  // Fungsi untuk kembali ke halaman Home
  const goToHome = () => {
    navigation.navigate('Home');
  };

  const goLeadsEdits = () => {
    navigation.navigate('LeadEdit');
  };

  const goInWork = () => {
    navigation.navigate('InWork');
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
        {/* tombol search */}
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
            }}
            onPress={goToHome}>
            <Image
              source={require('../../assets/watches-trader/icon/search.png')}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          {/* bisa scroll */}
          <ScrollView
            style={{
              height: 40,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.headerButtonActive}
              onPress={goToHome}>
              <Text style={styles.headerButtonTextActive}>Leads</Text>
              <View style={styles.headerButtonCounter}>
                <Text style={{color: '#fff'}}>1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton} onPress={goInWork}>
              <Text style={styles.headerButtonText}>In Work</Text>
              <View style={styles.headerButtonCounter}>
                <Text style={{color: '#fff'}}>0</Text>
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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.card}>
          <View style={{paddingBottom: 50, paddingTop: 20}}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Today</Text>
            </View>
            {/* BUTTON TO PAGES LEADS */}
            <TouchableOpacity onPress={goLeadsEdits}>
              <View style={styles.container}>
                <Image
                  source={require('../../assets/watches-trader/icon/user.png')}
                  style={{
                    height: 40,
                    width: 40,
                    resizeMode: 'contain',
                  }}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.nameText}>Ramzy</Text>
                  <Text style={styles.subText} numberOfLines={1}>
                    Saya minta daftar harga jam tipe ini dengan strap ini yasajd
                    iajsd iajsd ajsdj asbdj ash jdh asjdh ds
                  </Text>
                </View>
                <Text style={styles.subText}>14:20</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.container}>
              <Image
                source={require('../../assets/watches-trader/icon/user.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Ramzy</Text>
                <Text style={styles.subText} numberOfLines={1}>
                  Saya minta daftar harga jam tipe ini dengan strap ini yasajd
                  iajsd iajsd ajsdj asbdj ash jdh asjdh ds
                </Text>
              </View>
              <Text style={styles.subText}>14:20</Text>
            </View>
            <View style={styles.container}>
              <Image
                source={require('../../assets/watches-trader/icon/user.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Ramzy</Text>
                <Text style={styles.subText} numberOfLines={1}>
                  Saya minta daftar harga jam tipe ini dengan strap ini yasajd
                  iajsd iajsd ajsdj asbdj ash jdh asjdh ds
                </Text>
              </View>
              <Text style={styles.subText}>14:20</Text>
            </View>
            <View style={styles.container}>
              <Image
                source={require('../../assets/watches-trader/icon/user.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Ramzy</Text>
                <Text style={styles.subText} numberOfLines={1}>
                  Saya minta daftar harga jam tipe ini dengan strap ini yasajd
                  iajsd iajsd ajsdj asbdj ash jdh asjdh ds
                </Text>
              </View>
              <Text style={styles.subText}>14:20</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Yesterday</Text>
            </View>
            <View style={styles.container}>
              <Image
                source={require('../../assets/watches-trader/icon/user.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Ramzy</Text>
                <Text style={styles.subText} numberOfLines={1}>
                  Saya minta daftar harga jam tipe ini dengan strap ini yasajd
                  iajsd iajsd ajsdj asbdj ash jdh asjdh ds
                </Text>
              </View>
              <Text style={styles.subText}>14:20</Text>
            </View>
            <View style={styles.container}>
              <Image
                source={require('../../assets/watches-trader/icon/user.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Ramzy</Text>
                <Text style={styles.subText} numberOfLines={1}>
                  Saya minta daftar harga jam tipe ini dengan strap ini yasajd
                  iajsd iajsd ajsdj asbdj ash jdh asjdh ds
                </Text>
              </View>
              <Text style={styles.subText}>14:20</Text>
            </View>
            <View style={styles.container}>
              <Image
                source={require('../../assets/watches-trader/icon/user.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Ramzy</Text>
                <Text style={styles.subText} numberOfLines={1}>
                  Saya minta daftar harga jam tipe ini dengan strap ini yasajd
                  iajsd iajsd ajsdj asbdj ash jdh asjdh ds
                </Text>
              </View>
              <Text style={styles.subText}>14:20</Text>
            </View>
            <View style={styles.container}>
              <Image
                source={require('../../assets/watches-trader/icon/user.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Ramzy</Text>
                <Text style={styles.subText} numberOfLines={1}>
                  Saya minta daftar harga jam tipe ini dengan strap ini yasajd
                  iajsd iajsd ajsdj asbdj ash jdh asjdh ds
                </Text>
              </View>
              <Text style={styles.subText}>14:20</Text>
            </View>
            <View style={styles.container}>
              <Image
                source={require('../../assets/watches-trader/icon/user.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Ramzy</Text>
                <Text style={styles.subText} numberOfLines={1}>
                  Saya minta daftar harga jam tipe ini dengan strap ini yasajd
                  iajsd iajsd ajsdj asbdj ash jdh asjdh ds
                </Text>
              </View>
              <Text style={styles.subText}>14:20</Text>
            </View>
            <View style={styles.container}>
              <Image
                source={require('../../assets/watches-trader/icon/user.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Ramzy</Text>
                <Text style={styles.subText} numberOfLines={1}>
                  Saya minta daftar harga jam tipe ini dengan strap ini yasajd
                  iajsd iajsd ajsdj asbdj ash jdh asjdh ds
                </Text>
              </View>
              <Text style={styles.subText}>14:20</Text>
            </View>
            <View style={styles.container}>
              <Image
                source={require('../../assets/watches-trader/icon/user.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Ramzy</Text>
                <Text style={styles.subText} numberOfLines={1}>
                  Saya minta daftar harga jam tipe ini dengan strap ini yasajd
                  iajsd iajsd ajsdj asbdj ash jdh asjdh ds
                </Text>
              </View>
              <Text style={styles.subText}>14:20</Text>
            </View>
            <View style={styles.container}>
              <Image
                source={require('../../assets/watches-trader/icon/user.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Ramzy</Text>
                <Text style={styles.subText} numberOfLines={1}>
                  Saya minta daftar harga jam tipe ini dengan strap ini yasajd
                  iajsd iajsd ajsdj asbdj ash jdh asjdh ds
                </Text>
              </View>
              <Text style={styles.subText}>14:20</Text>
            </View>
            <View style={styles.container}>
              <Image
                source={require('../../assets/watches-trader/icon/user.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'contain',
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>Ramzy</Text>
                <Text style={styles.subText} numberOfLines={1}>
                  Saya minta daftar harga jam tipe ini dengan strap ini yasajd
                  iajsd iajsd ajsdj asbdj ash jdh asjdh ds
                </Text>
              </View>
              <Text style={styles.subText}>14:20</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <LeadsButton />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    height: 600,
    backgroundColor: '#E7E5E0',
    borderRadius: 10, // Mengatur border radius untuk membuat card menjadi oval
    paddingHorizontal: 20,
    marginTop: 10,
  },
  text: {
    color: '#8E6413', // Warna emas
    textAlign: 'center', // Center-align the text
    fontSize: 15,
    fontWeight: 'bold',
  },
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
  nameText: {
    color: '#483729',
    fontWeight: 'bold',
  },
  subText: {
    color: '#483729',
  },
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#FFF',
    paddingVertical: 20,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  dateContainer: {
    alignItems: 'center',
    marginTop: -10,
    marginBottom: -10,
  },
  dateText: {
    color: '#483729',
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 3,
  },
});
