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

const Shop = () => {
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
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                width: width,
                height: 230,
                backgroundColor: '#ffff',
              }}>
              <Text
                style={{
                  margin: 5,
                  color: '#c4171d',
                  fontSize: 30,
                  fontStyle: 'italic',
                  fontWeight: '700',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                Automotive
              </Text>
              <View
                style={{
                  width: width,
                  height: 170,
                  backgroundColor: '#b2dbef',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: '70%',
                    height: 34,
                    borderWidth: 1,
                    borderRadius: 17,
                    backgroundColor: '#ffff',
                    flexDirection: 'row',
                  }}>
                  <TextInput style={{width: '80%'}}></TextInput>
                  <View
                    style={{
                      backgroundColor: '#c4171d',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '20%',
                      borderTopRightRadius: 17,
                      borderBottomRightRadius: 17,
                    }}>
                    <AntDesign name="caretdown" size={22} color="#ffff" />
                  </View>
                </View>
                <View
                  style={{
                    width: '70%',
                    height: 34,
                    borderWidth: 1,
                    borderRadius: 17,
                    backgroundColor: '#ffff',
                    flexDirection: 'row',
                  }}>
                  <TextInput style={{width: '80%'}}></TextInput>
                  <View
                    style={{
                      backgroundColor: '#c4171d',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '20%',
                      borderTopRightRadius: 17,
                      borderBottomRightRadius: 17,
                    }}>
                    <AntDesign name="caretdown" size={22} color="#ffff" />
                  </View>
                </View>
                <View
                  style={{
                    width: '70%',
                    height: 34,
                    borderWidth: 1,
                    borderRadius: 17,
                    backgroundColor: '#ffff',
                    flexDirection: 'row',
                  }}>
                  <TextInput style={{width: '80%'}}></TextInput>
                  <View
                    style={{
                      backgroundColor: '#c4171d',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '20%',
                      borderTopRightRadius: 17,
                      borderBottomRightRadius: 17,
                    }}>
                    <AntDesign name="caretdown" size={22} color="#ffff" />
                  </View>
                </View>
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
                <TouchableOpacity
                  style={{
                    backgroundColor: '#c4171d',
                    height: 28,
                    width: 100,
                    backgroundColor: '#c4171d',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 3,
                  }}>
                  <Text style={{color: '#ffff'}}>ADD TO CART</Text>
                </TouchableOpacity>
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
                <TouchableOpacity
                  style={{
                    backgroundColor: '#c4171d',
                    height: 28,
                    width: 100,
                    backgroundColor: '#c4171d',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 3,
                  }}>
                  <Text style={{color: '#ffff'}}>ADD TO CART</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Shop;

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
