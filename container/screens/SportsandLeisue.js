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
import twowheeler from '../assets/images/2W.png';
import threewheeler from '../assets/images/3W.png';
import acc from '../assets/images/acc.png';
import car from '../assets/images/car.png';
import lcv from '../assets/images/LCV.png';
import hcv from '../assets/images/hcv.png';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {showMessage, hideMessage} from 'react-native-flash-message';

const SportsandLeisure = ({navigation}) => {
  const [data, setdata] = useState();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [items, setItems] = useState([
    {label: 'Yoga', value: 'yoga'},
    {label: 'Door', value: 'door'},
    {label: 'Gym', value: 'gym'},
    {label: 'Colored', value: 'colored'},
  ]);

  const [zone, setZone] = useState();
  const [uname, setUname] = useState();
  const [itemValue, setItemValue] = useState(1);
  const [total, settotal] = useState(0);
  // const [loading, setLoading] = useState(true);

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

  const fetchYogaHandler = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        console.log(value);
        setUname(value);
        const loginFormData = new FormData();
        loginFormData.append('username', value);

        let response = await axios({
          method: 'post',
          url: 'https://www.sparesandwears.com/AndroidCon/sports_yoga.php',
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

  const fetchDoorHandler = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        console.log(value);
        setUname(value);
        const loginFormData = new FormData();
        loginFormData.append('username', value);

        let response = await axios({
          method: 'post',
          url: 'https://www.sparesandwears.com/AndroidCon/sports_door.php',
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

  const fetchGymHandler = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        console.log(value);
        setUname(value);
        const loginFormData = new FormData();
        loginFormData.append('username', value);

        let response = await axios({
          method: 'post',
          url: 'https://www.sparesandwears.com/AndroidCon/sports_gym.php',
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

  const fetchColoredHandler = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        console.log(value);
        setUname(value);
        const loginFormData = new FormData();
        loginFormData.append('username', value);

        let response = await axios({
          method: 'post',
          url: 'https://www.sparesandwears.com/AndroidCon/sports_colored.php',
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

  // useEffect(() => {
  //   fetchYogaHandler();
  //   return () => {};
  // }, []);

  // return loading == true ? (
  //   <Text>Loading....</Text>
  // ) :
  return (
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
      <View
        style={{
          width: width,
          backgroundColor: 'red',
          height: open ? 260 : 150,
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
          Sports and Leisure Flooring
        </Text>
        <View
          style={{
            width: width,
            height: 80,
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
            <DropDownPicker
              dropDownDirection="BOTTOM"
              // style={{
              //   width: 170,
              //   borderColor: 'gray',
              //   borderWidth: 0.5,
              //   height: 40,
              //   alignSelf: 'center',
              //   position: 'absolute',
              // }}
              // dropDownContainerStyle={{
              //   width: 150,
              //   borderColor: 'gray',
              //   borderWidth: 0.5,
              //   height: 150,
              //   alignSelf: 'center',
              // }}
              // dropDownDirection="BOTTOM"
              placeholder="Select Category"
              style={{
                borderColor: 'gray',
                borderRadius: 17,
                borderWidth: 1,
                height: 34,
                alignSelf: 'center',
                position: 'absolute',
              }}
              dropDownContainerStyle={{
                borderColor: 'black',
                position: 'absolute',
                borderWidth: 1,
                borderRadius: 17,
                backgroundColor: 'white',
                height: 150,
                alignSelf: 'center',
              }}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              onChangeValue={
                // value == 'yoga'
                //   ? navigation.navigate('SportYoga')
                //   : value == 'colored'
                //   ? navigation.navigate('SportColored')
                //   : value == 'door'
                //   ? navigation.navigate('SportDoor')
                //   : navigation.navigate('SportGym')
                value == 'yoga'
                  ? fetchYogaHandler
                  : value == 'colored'
                  ? fetchColoredHandler
                  : value == 'door'
                  ? fetchDoorHandler
                  : fetchGymHandler
              }
              // setItems={setItems}
            />
            {/* <TextInput
                      placeholder="Category"
                      style={{width: '80%'}}></TextInput>
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
                    </View> */}
          </View>
        </View>
      </View>
      <FlatList
        data={data}
        ListEmptyComponent={
          <ScrollView>
            <View>
              <View>
                <Text
                  style={{
                    marginLeft: 20,
                    color: 'black',
                    fontSize: 20,
                    fontWeight: '400',
                    alignSelf: 'flex-start',
                  }}>
                  Categories
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={fetchYogaHandler}>
                    <View style={styles.category}>
                      <Image
                        source={{
                          uri: 'https://www.sparesandwears.com/images/Yoga%20Mat.jpg',
                        }}
                        style={{
                          width: '100%',
                          height: 120,
                          resizeMode: 'contain',
                        }}
                      />
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={styles.producttitle}>Yoga Mats</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={fetchDoorHandler}>
                    <View style={styles.category}>
                      <Image
                        source={{
                          uri: 'https://www.sparesandwears.com/images/Door%20Mat.jpg',
                        }}
                        style={{
                          width: '100%',
                          height: 120,
                          resizeMode: 'contain',
                        }}
                      />
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={styles.producttitle}>Door Mats</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={fetchGymHandler}>
                    <View style={styles.category}>
                      <Image
                        source={{
                          uri: 'https://www.sparesandwears.com/images/Gym%20Mat%20or%20Rubber%20Tiles.jpg',
                        }}
                        style={{
                          width: '100%',
                          height: 120,
                          resizeMode: 'contain',
                        }}
                      />
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={styles.producttitle}>Gym Mats</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={fetchColoredHandler}>
                    <View style={styles.category}>
                      <Image
                        // source={{
                        //   uri: `https://sparesandwears.com/admin-panel/product_images/${item.ImageName}`,
                        // }}
                        source={{
                          uri: 'https://www.sparesandwears.com/images/EPDM%20Colored%20Granules.jpg',
                        }}
                        style={{
                          width: '100%',
                          height: 120,
                          resizeMode: 'contain',
                        }}
                      />
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={styles.producttitle}>
                          Colored Granules
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        }
        // ListHeaderComponent={() => {
        //   return (
        //     <View>

        //       <View>
        //         <Text
        //           style={{
        //             marginLeft: 20,
        //             color: 'black',
        //             fontSize: 20,
        //             fontWeight: '400',
        //             alignSelf: 'flex-start',
        //           }}>
        //           Categories
        //         </Text>
        //         <View
        //           style={{
        //             flexDirection: 'row',
        //             justifyContent: 'space-evenly',
        //           }}>
        //           <TouchableOpacity
        //             activeOpacity={0.8}
        //             onPress={() =>
        //               navigation.navigate('SportYoga', {name: 'SportYoga'})
        //             }>
        //             <View style={styles.shadowboxlarge}>
        //               <Image
        //                 source={{
        //                   uri: 'https://www.sparesandwears.com/images/Yoga%20Mat.jpg',
        //                 }}
        //                 style={{
        //                   width: '100%',
        //                   height: 120,
        //                   resizeMode: 'contain',
        //                 }}
        //               />
        //               <View
        //                 style={{
        //                   justifyContent: 'center',
        //                   alignItems: 'center',
        //                 }}>
        //                 <Text style={styles.producttitle}>Yoga Mats</Text>
        //               </View>
        //             </View>
        //           </TouchableOpacity>

        //           <TouchableOpacity
        //             activeOpacity={0.8}
        //             onPress={() =>
        //               navigation.navigate('SportDoor', {name: 'SportDoor'})
        //             }>
        //             <View style={styles.shadowboxlarge}>
        //               <Image
        //                 source={{
        //                   uri: 'https://www.sparesandwears.com/images/Door%20Mat.jpg',
        //                 }}
        //                 style={{
        //                   width: '100%',
        //                   height: 120,
        //                   resizeMode: 'contain',
        //                 }}
        //               />
        //               <View
        //                 style={{
        //                   justifyContent: 'center',
        //                   alignItems: 'center',
        //                 }}>
        //                 <Text style={styles.producttitle}>Door Mats</Text>
        //               </View>
        //             </View>
        //           </TouchableOpacity>
        //         </View>
        //         <View
        //           style={{
        //             flexDirection: 'row',
        //             justifyContent: 'space-evenly',
        //           }}>
        //           <TouchableOpacity
        //             activeOpacity={0.8}
        //             onPress={() =>
        //               navigation.navigate('SportGym', {name: 'SportGym'})
        //             }>
        //             <View style={styles.shadowboxlarge}>
        //               <Image
        //                 source={{
        //                   uri: 'https://www.sparesandwears.com/images/Gym%20Mat%20or%20Rubber%20Tiles.jpg',
        //                 }}
        //                 style={{
        //                   width: '100%',
        //                   height: 120,
        //                   resizeMode: 'contain',
        //                 }}
        //               />
        //               <View
        //                 style={{
        //                   justifyContent: 'center',
        //                   alignItems: 'center',
        //                 }}>
        //                 <Text style={styles.producttitle}>Gym Mats</Text>
        //               </View>
        //             </View>
        //           </TouchableOpacity>
        //           <TouchableOpacity
        //             activeOpacity={0.8}
        //             onPress={() =>
        //               navigation.navigate('SportColored', {
        //                 name: 'SportColored',
        //               })
        //             }>
        //             <View style={styles.shadowboxlarge}>
        //               <Image
        //                 // source={{
        //                 //   uri: `https://sparesandwears.com/admin-panel/product_images/${item.ImageName}`,
        //                 // }}
        //                 source={{
        //                   uri: 'https://www.sparesandwears.com/images/EPDM%20Colored%20Granules.jpg',
        //                 }}
        //                 style={{
        //                   width: '100%',
        //                   height: 120,
        //                   resizeMode: 'contain',
        //                 }}
        //               />
        //               <View
        //                 style={{
        //                   justifyContent: 'center',
        //                   alignItems: 'center',
        //                 }}>
        //                 <Text style={styles.producttitle}>
        //                   Colored Granules
        //                 </Text>
        //               </View>
        //             </View>
        //           </TouchableOpacity>
        //         </View>
        //       </View>
        //     </View>
        //   );
        // }}
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

          const increment = prodId => {
            let filteredData = data.filter((val, i) => {
              if (val.srno == prodId) {
                setItemValue(itemValue + 1);
              }
            });
          };

          const decrement = () => {
            if (itemValue > 1) {
              setItemValue(itemValue - 1);
            } else {
              setItemValue(1);
            }
          };
          return (
            <View style={styles.shadowboxlarge}>
              <TouchableOpacity
                style={{
                  justifyContent: 'flex-end',
                  alignSelf: 'flex-end',
                }}
                onPress={() => {
                  addToWishlist(item.srno);
                  showMessage({
                    message: 'Product added to wishlist successfully !',
                    type: 'info',
                  });
                }}>
                <AntDesign
                  name="heart"
                  size={22}
                  backgroundColor="green"
                  color={'grey'}
                  style={{}}
                />
              </TouchableOpacity>
              <View style={styles.container}>
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
                      <TouchableOpacity onPress={decrement}>
                        <Ionicons name="remove" size={18} color="black" />
                      </TouchableOpacity>
                      <Text style={{fontWeight: '500', color: 'black'}}>
                        {itemValue}
                      </Text>

                      <TouchableOpacity onPress={() => increment(item.srno)}>
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
          );
        }}
      />
    </View>
  );
};

export default SportsandLeisure;

const styles = StyleSheet.create({
  screen: {
    width: width,
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

  card: {
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
  category: {
    alignSelf: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#dddddd',
    width: width / 2.35,
    height: 200,

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
  container: {
    flexDirection: 'row',
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
