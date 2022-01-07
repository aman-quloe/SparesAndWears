import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import Logo from '../assets/icons/logo.png';
import Login from './Login';
import product from '../assets/images/product.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Loading from '../assets/icons/Loading.mp4';
import img from '../assets/images/homeimg.jpg';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

const AcTapes = ({navigation}) => {
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);
  const [zone, setZone] = useState();
  const [uname, setUname] = useState();
  const [value, setvalue] = useState(0);
  const [total, settotal] = useState(0);

  const fetchHandler = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        console.log(value);
        setUname(value);
        const loginFormData = new FormData();
        loginFormData.append('username', value);

        let response = await axios({
          method: 'post',
          url: 'https://sparesandwears.com/AndroidCon/fetchAcTapAdhesives.php',
          data: loginFormData,
          headers: {
            'Content-Type': 'multipart/form-data',
          } /** headers is given to give credential in formdata */,
        });

        let userzone = '';

        console.log(response.data.success);
        if (response.data.success == 'true') {
          setZone(response.data.zone);
          setdata(response.data.data);
          console.log(response.data.zone);
          setLoading(false);
          userzone = response.data.zone;

          setZone(userzone);
        }
      }
    } catch (e) {
      // error reading value
    }
  };

  const addToCartHandler = async productId => {
    console.log(productId);
    const addToCartData = new FormData();
    addToCartData.append('username', uname);
    addToCartData.append('product_id', productId);
    addToCartData.append('quantity', '1');

    /** login credential in form of formdata  */
    let response = await axios({
      method: 'post',
      url: 'https://sparesandwears.com/AndroidCon/addToCart.php',
      data: addToCartData,
      headers: {
        'Content-Type': 'multipart/form-data',
      } /** headers is given to give credential in formdata */,
    });
    console.log(response.data);
  };

  const addToWishlist = async productId => {
    console.log(productId);

    const addToWishlistData = new FormData();
    addToWishlistData.append('username', uname);
    addToWishlistData.append('productid', productId);

    /** login credential in form of formdata  */
    let response = await axios({
      method: 'post',
      url: 'https://www.sparesandwears.com/AndroidCon/addWishtlist.php',
      data: addToWishlistData,
      headers: {
        'Content-Type': 'multipart/form-data',
      } /** headers is given to give credential in formdata */,
    });
    console.log(response.data);
    // setIsWishlist(true);
  };

  useEffect(() => {
    fetchHandler();
    return () => {};
  }, []);

  return loading == true ? (
    <Text>Loading....</Text>
  ) : (
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
            placeholderTextColor="grey"
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

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        ListHeaderComponent={() => {
          return (
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
                  fontSize: 22,
                  fontStyle: 'italic',
                  fontWeight: '700',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                Air Conditioning & Refrigeration
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
          );
        }}
        renderItem={({item}) => {
          const productPrice = `Rs. ${
            zone == 'north'
              ? item.north_price
              : zone == 'south'
              ? item.south_price
              : zone == 'east'
              ? item.east_price
              : zone == 'west'
              ? item.west_price
              : item.MRP
          }`;

          const increment = () => {
            setvalue(value + 1);
            settotal(total + 1);
          };

          const decrement = () => {
            setvalue(value - 1);
            settotal(total - 1);
          };
          return (
            <TouchableOpacity
              style={styles.shadowboxlarge}
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate('ProductDetail', {
                  productId: item.srno,
                  productPrice: productPrice,
                  uname: uname,
                })
              }>
              <Image
                source={{
                  uri: `https://sparesandwears.com/admin-panel/product_images/${item.ImageName}`,
                }}
                style={{
                  width: '40%',
                  height: 120,
                  resizeMode: 'contain',
                }}
              />

              <View style={{width: '60%'}}>
                <Text style={styles.producttitle}>{item.Title}</Text>

                <Text style={{fontWeight: '600', fontSize: 16}}>
                  {productPrice}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#dddddd',
                      borderRadius: 5,
                      width: '30%',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={decrement}>
                      <Ionicons name="remove" size={18} color="black" />
                    </TouchableOpacity>
                    <Text style={{fontWeight: '500', color: 'black'}}>
                      {value}
                    </Text>

                    <TouchableOpacity activeOpacity={0.8} onPress={increment}>
                      <Ionicons name="add" size={18} color="black" />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      addToCartHandler(item.srno);
                    }}
                    activeOpacity={0.8}
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
                  <TouchableOpacity
                    onPress={() => {
                      addToWishlist(item.srno);
                    }}>
                    <AntDesign
                      name="heart"
                      size={22}
                      backgroundColor="green"
                      color={'grey'}
                      style={{}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default AcTapes;

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
  productcompany: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  productmodel: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});
