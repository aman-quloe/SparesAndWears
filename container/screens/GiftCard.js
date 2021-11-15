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
import cardred from '../assets/images/giftcoupon.jpg';
import cardblue from '../assets/images/giftcoupon2.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';

import img from '../assets/images/homeimg.jpg';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const GiftCard = () => {
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
            <TextInput placeholder="Search" style={{width: '80%'}}></TextInput>
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
          <View style={{height: 550, justifyContent: 'center'}}>
            <View
              style={{
                width: 260,
                height: 160,
                paddingVertical: 3,
                paddingHorizontal: 10,
                margin: 10,
                backgroundColor: '#9d080e',
                borderRadius: 6,
              }}>
              <Text style={{fontWeight: '900', color: '#fd9934'}}>
                GIFT CARD
              </Text>
              <View
                style={{
                  justifyContent: 'space-between',
                  width: '65%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 12,
                    color: '#ffff',
                    padding: 5,
                  }}>
                  Your Overseas coupon amount is ₹0
                </Text>
                <Image
                  source={cardred}
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                  }}></Image>
              </View>
            </View>
            <View
              style={{
                width: 260,
                height: 160,
                paddingVertical: 3,
                paddingHorizontal: 10,
                margin: 10,

                backgroundColor: '#024f79',
                borderRadius: 6,
              }}>
              <Text style={{fontWeight: '900', color: '#fd9934'}}>
                GIFT CARD
              </Text>
              <View
                style={{
                  justifyContent: 'space-between',
                  width: '65%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 12,
                    color: '#ffff',
                    padding: 5,
                  }}>
                  Your Aeroflex coupon amount is ₹0
                </Text>
                <Image
                  source={cardblue}
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                  }}></Image>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default GiftCard;

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
