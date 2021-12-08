import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Logo from '../assets/icons/logo.png';
import Login from './Login';
import product from '../assets/images/product.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';

import img from '../assets/images/homeimg.jpg';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Cart = () => {
  return (
    <>
      <View style={styles.screen}>
        <View style={styles.header}>
          <Image
            source={Logo}
            style={{width: 110, height: 60, resizeMode: 'contain'}}
          />
          <View
            style={{
              width: '50%',
              height: 34,
              borderWidth: 1,
              borderRadius: 17,
              flexDirection: 'row',
            }}>
            <TextInput
              placeholder="Search"
              style={{width: '80%', padding: 3}}></TextInput>
            <View
              style={{
                backgroundColor: '#c4171d',
                justifyContent: 'center',
                alignItems: 'center',
                width: '20%',
                borderTopRightRadius: 17,
                borderBottomRightRadius: 17,
              }}>
              <AntDesign name="search1" size={18} color="#ffff" />
            </View>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.shadowboxlarge}>
              <Image
                source={product}
                style={{
                  width: '40%',
                  height: 120,
                  resizeMode: 'contain',
                }}
              />
              <View style={{width: '60%'}}>
                <Text style={styles.producttitle}>
                  Scooter Foot Mat Epdm Rubber-Pleasure
                </Text>
                <Text style={{fontWeight: '600', color: 'black', fontSize: 16}}>
                  Hero
                </Text>
                <Text style={{fontWeight: '600', fontSize: 16}}>Rs. 175.0</Text>
              </View>
            </View>
            <View style={styles.shadowboxlarge}>
              <Image
                source={product}
                style={{
                  width: '40%',
                  height: 120,
                  resizeMode: 'contain',
                }}
              />
              <View style={{width: '60%'}}>
                <Text style={styles.producttitle}>
                  Scooter Foot Mat Epdm Rubber-Pleasure
                </Text>
                <Text style={{fontWeight: '600', color: 'black', fontSize: 16}}>
                  Hero
                </Text>
                <Text style={{fontWeight: '600', fontSize: 16}}>Rs. 175.0</Text>
              </View>
            </View>
            <Text style={{fontSize: 18, padding: 24}}>Items in your Bag</Text>
            <View
              style={{
                width: '100%',
                height: 55,
                borderTopWidth: 1,
                borderBottomWidth: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: '3%',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                  }}>
                  Subtotal
                </Text>
                <Text style={{fontSize: 20, color: 'black'}}>RS. 2374</Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',
                height: 40,
                borderRadius: 7,
                backgroundColor: 'black',
                margin: 30,
              }}>
              <Text style={{color: '#ffff', fontSize: 20}}>
                Overseas Coupon
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',
                height: 40,
                borderRadius: 7,
                backgroundColor: 'black',
                margin: 20,
              }}>
              <Text style={{color: '#ffff', fontSize: 20}}>
                Aeroflex Coupon
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#f5f5f5',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: '2%',
            }}>
            <View>
              <Text style={{fontSize: 20, color: 'black'}}>RS. 2374</Text>
              <Text style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
                Total Amount
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: 3,
                width: '45%',
                backgroundColor: '#c4171d',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#ffff', fontWeight: '600'}}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  screen: {
    width: width,
    height: height,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
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

  shadowboxlarge: {
    padding: 10,
    flexDirection: 'row',
    width: width / 1.05,
    margin: 5,
    height: 150,
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
  producttitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
});
