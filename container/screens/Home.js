import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
} from 'react-native';
import Logo from '../assets/icons/logo.png';
import Login from './Login';
import AntDesign from 'react-native-vector-icons/AntDesign';
import automotive from '../assets/images/automotive.jpg';
import ac from '../assets/images/ac.jpg';
import sports from '../assets/images/sports.jpg';
import buy from '../assets/images/buy.jpg';
import wishlist from '../assets/images/wishlist.jpg';
import newproducts from '../assets/images/new.jpg';
import bnr from '../assets/images/bnr.jpg';
import bnr2 from '../assets/images/bnr2.jpg';
import img from '../assets/images/homeimg.jpg';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.screen}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('WholeSalerRegister', {
              name: 'WholeSalerRegister',
            })
          }
          style={{
            width: width,
            height: 25,
            justifyContent: 'center',
            backgroundColor: 'black',
            alignItems: 'center',
          }}>
          <Text style={{color: '#ffff', fontSize: 10}}>
            Click here to create a WHOLESALER account and avail discounted
            rates!
          </Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <Image
            source={Logo}
            style={{width: 110, height: 60, resizeMode: 'contain'}}
          />
          <View
            style={{
              width: '65%',
              height: 20,
              borderWidth: 1.6,
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <TextInput
              style={{width: '90%', padding: 1, fontSize: 12}}></TextInput>
            <View
              style={{
                backgroundColor: '#c4171d',
                justifyContent: 'center',
                alignItems: 'center',
                width: '10%',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}>
              <AntDesign name="search1" size={10} color="#ffff" />
            </View>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={img}
              style={{
                width: width,
                height: height / 4,
                resizeMode: 'contain',
              }}
            />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Automotive', {name: 'Automotive'})
                }>
                <View style={styles.shadowbox}>
                  <Text style={styles.boxtext}>Automotive</Text>
                  <Image
                    source={automotive}
                    style={{
                      width: '100%',
                      height: '80%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('AcRefrigeration', {
                    name: 'AcRefrigeration',
                  })
                }>
                <View style={styles.shadowbox}>
                  <Text style={styles.boxtext}>AC and Refrigeration</Text>
                  <Image
                    source={ac}
                    style={{
                      width: '100%',
                      height: '80%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SportsLeisure', {name: 'SportsLeisure'})
                }>
                <View style={styles.shadowbox}>
                  <Text style={styles.boxtext}>
                    Sports and Leisure Flooring
                  </Text>
                  <Image
                    source={sports}
                    style={{
                      width: '100%',
                      height: '80%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.shadowbox}>
                <Text style={styles.boxtext}>Buy Again</Text>
                <Image
                  source={buy}
                  style={{
                    width: '100%',
                    height: '80%',
                    resizeMode: 'contain',
                  }}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.shadowbox}>
                <Text style={styles.boxtext}>Wishlist</Text>
                <Image
                  source={wishlist}
                  style={{
                    width: '100%',
                    height: '80%',
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('NewProducts', {name: 'NewProducts'})
                }>
                <View style={styles.shadowbox}>
                  <Text style={styles.boxtext}>New Products</Text>
                  <Image
                    source={newproducts}
                    style={{
                      width: '100%',
                      height: '80%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.shadowboxlarge}>
              <Text style={styles.boxtext}>Top Selling</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: '50%'}}>
                  <Image
                    source={bnr}
                    style={{
                      width: '100%',
                      height: '90%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View style={{width: '50%'}}>
                  <Image
                    source={bnr2}
                    style={{
                      width: '100%',
                      height: '90%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    width: width,
    height: height,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eef5fc',
  },

  header: {
    paddingHorizontal: 10,
    width: '100%',
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shadowbox: {
    width: width / 2.4,
    margin: 10,
    height: 125,
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  shadowboxlarge: {
    width: width / 1.15,
    margin: 10,
    height: 120,
    backgroundColor: '#ffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  boxtext: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },
});
