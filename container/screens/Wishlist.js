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
import {showMessage, hideMessage} from 'react-native-flash-message';

import img from '../assets/images/homeimg.jpg';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Wishlist = ({navigation}) => {
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);
  const [zone, setZone] = useState();
  const [uname, setUname] = useState();
  const [itemId, setItemId] = useState();
  const [price, setPrice] = useState([]);

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
          url: 'https://www.sparesandwears.com/AndroidCon/fetchUserWishtlist.php',
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

            const increment = () => {
              setvalue(value + 1);
              settotal(total + 1);
            };

            const decrement = () => {
              setvalue(value - 1);
              settotal(total - 1);
            };
            const updatedPrice = ` ${
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

            return (
              <View style={{alignItems: 'center'}}>
                <View style={styles.shadowboxlarge}>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'flex-end',
                      alignSelf: 'flex-end',
                    }}
                    onPress={() => {
                      addToWishlist(item.srno);
                    }}>
                    <AntDesign
                      name="heart"
                      size={22}
                      backgroundColor="green"
                      color={'red'}
                      style={{marginHorizontal: 15}}
                    />
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
                        {/* <View
                        style={{
                          flexDirection: 'row',
                          backgroundColor: '#dddddd',
                          borderRadius: 5,
                          width: '40%',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                        }}>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={decrement(item, index)}>
                          <Ionicons name="remove" size={18} color="black" />
                        </TouchableOpacity>
                        <Text style={{fontWeight: '500', color: 'black'}}>
                          {value}
                        </Text>

                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={increment}>
                          <Ionicons name="add" size={18} color="black" />
                        </TouchableOpacity>
                      </View> */}
                        <Text
                          style={{
                            fontWeight: '600',
                            fontSize: 16,
                          }}>
                          {'Rs.' + updatedPrice}
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            backgroundColor: '#dddddd',
                            borderRadius: 5,
                            width: '30%',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                          }}>
                          <TouchableOpacity onPress={decrement}>
                            <Ionicons name="remove" size={18} color="black" />
                          </TouchableOpacity>
                          <Text style={{fontWeight: '500', color: 'black'}}>
                            {value}
                          </Text>

                          <TouchableOpacity
                            onPress={() => increment(item.srno)}>
                            <Ionicons name="add" size={18} color="black" />
                          </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                          onPress={() => {
                            addToCartHandler(item.srno);
                            showMessage({
                              message: 'Product added to cart successfully !',
                              type: 'info',
                              backgroundColor: '#c4171d',
                            });
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
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

export default Wishlist;

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
  },
});
