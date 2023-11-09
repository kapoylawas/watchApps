/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import ButtonBackOption from '../../components/ButtonBackOption';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/Loding';
import Api from '../../api/Api';

export default function ContactScreen() {
  const [loadingContact, setLoadingContact] = useState(true);
  const [dataContact, setDataContact] = useState([]);
  const [nextPageURL, setNextPageURL] = useState(null);
  const [loadingLoadMore, setLoadingLoadMore] = useState(false);

  const navigation = useNavigation();

  const goContactDetails = () => {
    navigation.navigate('ContactDetails');
  };

  const getDataContact = async () => {
    //set loading true
    setLoadingContact(true);
    const token = await AsyncStorage.getItem('@tokenLogin');
    await Api.get('/customer', {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }).then(response => {
      //assign data to state
      setDataContact(response.data.data);

      // //assign nextPageURL to state
      setNextPageURL(response.data.data.next_page_url);

      //set loading false
      setLoadingContact(false);
    });
  };

  //method getNextData
  const getNextData = async () => {
    //set loading true
    setLoadingLoadMore(true);

    if (nextPageURL != null) {
      await Api.get(nextPageURL).then(response => {
        //assign data to state
        setDataContact([...dataContact, ...response.data.data]);

        //assign nextPageURL to state
        setNextPageURL(response.data.data.next_page_url);

        //set loading false
        setLoadingLoadMore(false);
      });
    } else {
      // no data next page
      setLoadingLoadMore(false);
    }
  };

  useEffect(() => {
    getDataContact();
  }, []);

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
        {loadingContact ? (
          <Loading />
        ) : (
          <>
            <FlatList
              data={dataContact}
              keyExtractor={item => item.id}
              scrollEnabled={false}
              onEndReached={getNextData}
              onEndReachedThreshold={0.5}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ContactDetails', {
                      id: item.id,
                    })
                  }>
                  <View style={styles.container}>
                    <View
                      style={{
                        backgroundColor: '#E7E5E0',
                        padding: 5,
                        elevation: 6,
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
                      <Text style={styles.nameText}>{item.fullname}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
            {loadingLoadMore ? <Loading /> : null}
          </>
        )}
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
    marginLeft: 10,
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
