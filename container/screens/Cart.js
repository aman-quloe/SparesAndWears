import React, {useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import img from '../assets/images/homeimg.jpg';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Cart = ({navigation}) => {
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);
  const [zone, setZone] = useState();
  const [uname, setUname] = useState();
  const [itemId, setItemId] = useState();
  const [subTotal, setSubTotal] = useState();

  // const [value, setvalue] = useState(0);
  // const [total, settotal] = useState(0);

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
          url: 'https://sparesandwears.com/AndroidCon/cartProduct.php',
          data: loginFormData,
          headers: {
            'Content-Type': 'multipart/form-data',
          } /** headers is given to give credential in formdata */,
        });

        let userzone = '';
        console.log(response.data.data);

        console.log(response.data.success);
        if (response.data.success == 'true') {
          setZone(response.data.zone);
          setdata(response.data.data);
          console.log(response.data.zone);

          setLoading(false);
          userzone = response.data.zone;
          setZone(userzone);

          const total = response.data.data.reduce((currentTotal, item) => {
            return (
              currentTotal +
              parseInt(
                ` ${
                  zone == 'north'
                    ? item.north_price
                    : zone == 'south'
                    ? item.south_price
                    : zone == 'east'
                    ? item.east_price
                    : zone == 'west'
                    ? item.west_price
                    : item.MRP
                }`,
              )
            );
          }, 0);

          console.log('total ', total);
          setSubTotal(total);
        }
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    fetchHandler();
  }, []);

  // const increment = item => {
  //   setvalue(value + 1);
  // };

  // const decrement = item => {
  //   setvalue(value - 1);
  // };

  return loading == true ? (
    <Text>Loading....</Text>
  ) : (
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

        <FlatList
          data={data}
          keyExtractor={item => item.srno}
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

            // const priceArr = productPrice;
            // console.log(priceArr);

            const increment = () => {
              setvalue(value + 1);
              settotal(total + 1);
            };

            const decrement = () => {
              setvalue(value - 1);
              settotal(total - 1);
            };

            return (
              <View style={styles.shadowboxlarge}>
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={{
                    justifyContent: 'flex-end',
                    alignSelf: 'flex-end',
                  }}>
                  <AntDesign name="close" size={20} color="black" />
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{
                      width: '40%',
                      alignItems: 'center',
                    }}
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
                        width: '100%',

                        height: '90%',
                        resizeMode: 'contain',
                      }}
                    />
                  </TouchableOpacity>

                  <View style={{width: '60%'}}>
                    <Text style={styles.producttitle}>{item.Title}</Text>
                    <Text style={styles.productcompany}>{item.Company}</Text>
                    <Text style={styles.productmodel}>
                      {item.Vehicle_Model}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          backgroundColor: '#dddddd',
                          borderRadius: 5,
                          width: '33%',
                          height: 26,
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                        }}>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={decrement}>
                          <Ionicons name="remove" size={18} color="black" />
                        </TouchableOpacity>
                        <Text style={{fontWeight: '500', color: 'black'}}>
                          {item.quantity}
                        </Text>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={increment}>
                          <Ionicons name="add" size={18} color="black" />
                        </TouchableOpacity>
                      </View>
                      <Text
                        style={{
                          marginHorizontal: 14,
                          fontWeight: '600',
                          fontSize: 16,
                        }}>
                        {productPrice}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
          ListFooterComponent={() => {
            return (
              <View>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: 18, padding: 24}}>
                    Items in your Bag
                  </Text>
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
                      <Text style={{fontSize: 20, color: 'black'}}>
                        {'Rs.' + subTotal}
                      </Text>
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
                      <Text style={{fontSize: 20, color: 'black'}}>
                        {'Rs. ' + subTotal}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '600',
                          color: 'black',
                        }}>
                        Total Amount
                      </Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{
                        borderRadius: 3,
                        width: '45%',
                        backgroundColor: '#c4171d',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: '#ffff', fontWeight: '600'}}>
                        CONTINUE
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />

        {/* ................................... */}
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

    width: width / 1.05,
    margin: 5,
    height: 180,
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
    marginVertical: 3,
  },
});
