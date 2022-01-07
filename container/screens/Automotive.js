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
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import {showMessage, hideMessage} from 'react-native-flash-message';

import axios from 'axios';

const Automotive = ({navigation}) => {
  const [data, setdata] = useState();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [items, setItems] = useState([
    {label: 'Two Wheelers', value: 'two'},
    {label: 'Passenger Cars', value: 'pc'},
    {label: 'HCVs', value: 'hcv'},
    {label: 'Three Wheelers', value: 'three'},
    {label: 'LCVs', value: 'lcv'},
    {label: 'Accessories', value: 'accessories'},
  ]);

  const [openCompany, setOpenCompany] = useState(false);
  const [valueCompany, setValueCompany] = useState();

  const [companyItem, setCompanyItem] = useState([]);
  const [brandFilter, setBrandFilter] = useState();

  const [zone, setZone] = useState();
  const [uname, setUname] = useState();
  const [itemValue, setItemValue] = useState(0);
  const [total, settotal] = useState(0);

  const fetchTwoWheelerHandler = async val => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        console.log(value);
        setUname(value);
        const loginFormData = new FormData();
        loginFormData.append('username', value);

        let response = await axios({
          method: 'post',
          url: 'https://sparesandwears.com/AndroidCon/fetchAutomotiveTwoWheeler.php',
          data: loginFormData,
          headers: {
            'Content-Type': 'multipart/form-data',
          } /** headers is given to give credential in formdata */,
        });

        let userzone = '';

        console.log(response.data.success);
        if (response.data.success == 'true') {
          const itemNames = response.data.data.map(item => {
            return item.Company;
          });
          setCompanyItem(itemNames);
          console.log('cname ', itemNames);
          var unique = itemNames.filter((v, i, a) => a.indexOf(v) === i);
          console.log('unique vale ', unique);

          // setBrandFilter(unique);

          const filteredItems = response.data.data.filter(item => {
            return item.Company == val;
          });

          console.log('filter vale ', filteredItems);

          setZone(response.data.zone);
          setdata(response.data.data);
          console.log(response.data.zone);
          setLoading(false);
          userzone = response.data.zone;

          setZone(userzone);

          // const filteredItems = data.filter(item => {
          //   return data.Company == 'Maruti';
          // });
          // setBrandFilter(filteredItems);
          // console.log(filteredItems);
        }
      }
    } catch (e) {
      // error reading value
    }
  };

  const fetchPcHandler = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        console.log(value);
        setUname(value);
        const loginFormData = new FormData();
        loginFormData.append('username', value);

        let response = await axios({
          method: 'post',
          url: 'https://www.sparesandwears.com/AndroidCon/automotive_pc.php',
          data: loginFormData,
          headers: {
            'Content-Type': 'multipart/form-data',
          } /** headers is given to give credential in formdata */,
        });

        let userzone = '';

        console.log(response.data.success);
        if (response.data.success == 'true') {
          console.log('ye vala ', response.data.success);
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

  const fetchHcvHandler = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        console.log(value);
        setUname(value);
        const loginFormData = new FormData();
        loginFormData.append('username', value);

        let response = await axios({
          method: 'post',
          url: 'https://sparesandwears.com/AndroidCon/fetchAutomotiveHCV.php',
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

  const fetchThreeWheelerHandler = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        console.log(value);
        setUname(value);

        const loginFormData = new FormData();
        loginFormData.append('username', value);

        let response = await axios({
          method: 'post',
          url: 'https://sparesandwears.com/AndroidCon/fetchAutomotiveThreeWheeler.php',
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

  const fetchLcvHandler = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        console.log(value);
        setUname(value);
        const loginFormData = new FormData();
        loginFormData.append('username', value);

        let response = await axios({
          method: 'post',
          url: 'https://www.sparesandwears.com/AndroidCon/automotive_lcv.php',
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

  const fetchAccessoriesHandler = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        console.log(value);
        setUname(value);
        const loginFormData = new FormData();
        loginFormData.append('username', value);

        let response = await axios({
          method: 'post',
          url: 'https://sparesandwears.com/AndroidCon/fetchAutomotiveAccessories.php',
          data: loginFormData,
          headers: {
            'Content-Type': 'multipart/form-data',
          } /** headers is given to give credential in formdata */,
        });

        let userzone = '';

        console.log(response.data.success);
        if (response.data.success == 'true') {
          console.log('from accesories ' + response.data.success);
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
              placeholder="Vehicle Type"
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
                height: 290,
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
                value == 'two'
                  ? fetchTwoWheelerHandler
                  : value == 'pc'
                  ? fetchPcHandler
                  : value == 'hcv'
                  ? fetchHcvHandler
                  : value == 'three'
                  ? fetchThreeWheelerHandler
                  : value == 'lcv'
                  ? fetchLcvHandler
                  : fetchAccessoriesHandler
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
          <View
            style={{
              width: '70%',
              height: 34,
              marginTop: open ? 260 : 0,
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
              placeholder="Brand"
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
              open={openCompany}
              value={valueCompany}
              items={items}
              setOpen={setOpenCompany}
              setValue={setValueCompany}
              onChangeValue={value => fetchTwoWheelerHandler(value)}
              // value == 'yoga'
              //   ? navigation.navigate('SportYoga')
              //   : value == 'colored'
              //   ? navigation.navigate('SportColored')
              //   : value == 'door'
              //   ? navigation.navigate('SportDoor')
              //   : navigation.navigate('SportGym')              }
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
              placeholder="Model"
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
                value == 'two'
                  ? fetchTwoWheelerHandler
                  : value == 'passsenger'
                  ? fetchPcHandler
                  : value == 'hcv'
                  ? fetchHcvHandler
                  : value == 'three'
                  ? fetchThreeWheelerHandler
                  : value == 'lcv'
                  ? fetchLcvHandler
                  : fetchAccessoriesHandler
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
          <View>
            <View>
              <View style={{width: '100%', height: 35}}>
                <Text
                  style={{
                    marginLeft: 20,
                    color: 'black',
                    fontSize: 20,
                    fontWeight: '400',
                  }}>
                  Categories
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={fetchTwoWheelerHandler}>
                  <View style={styles.category}>
                    <Image
                      source={twowheeler}
                      style={{
                        width: '100%',
                        height: 120,
                        resizeMode: 'contain',
                      }}
                    />
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={styles.producttitle}>Two Wheelers</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={fetchPcHandler}>
                  <View style={styles.category}>
                    <Image
                      source={car}
                      style={{
                        width: '100%',
                        height: 120,
                        resizeMode: 'contain',
                      }}
                    />
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={styles.producttitle}>Passenger Cars</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <TouchableOpacity activeOpacity={0.8} onPress={fetchHcvHandler}>
                  <View style={styles.category}>
                    <Image
                      source={hcv}
                      style={{
                        width: '100%',
                        height: 120,
                        resizeMode: 'contain',
                      }}
                    />
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={styles.producttitle}>HCVs</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={fetchThreeWheelerHandler}>
                  <View style={styles.category}>
                    <Image
                      // source={{
                      //   uri: `https://sparesandwears.com/admin-panel/product_images/${item.ImageName}`,
                      // }}
                      source={threewheeler}
                      style={{
                        width: '100%',
                        height: 120,
                        resizeMode: 'contain',
                      }}
                    />
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={styles.producttitle}>Three Wheelers</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <TouchableOpacity activeOpacity={0.8} onPress={fetchLcvHandler}>
                  <View style={styles.category}>
                    <Image
                      // source={{
                      //   uri: `https://sparesandwears.com/admin-panel/product_images/${item.ImageName}`,
                      // }}
                      source={lcv}
                      style={{
                        width: '100%',
                        height: 120,
                        resizeMode: 'contain',
                      }}
                    />
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={styles.producttitle}>LCVs</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={fetchAccessoriesHandler}>
                  <View style={styles.category}>
                    <Image
                      // source={{
                      //   uri: `https://sparesandwears.com/admin-panel/product_images/${item.ImageName}`,
                      // }}
                      source={acc}
                      style={{
                        width: '100%',
                        height: 120,
                        resizeMode: 'contain',
                      }}
                    />
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={styles.producttitle}>Accessories</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
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

          const increment = () => {
            setItemValue(itemValue + 1);
            settotal(total + 1);
          };

          const decrement = () => {
            setItemValue(itemValue - 1);
            settotal(total - 1);
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
                  <Text style={styles.productmodel}>{item.Vehicle_Model}</Text>

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
                        {itemValue}
                      </Text>

                      <TouchableOpacity activeOpacity={0.8} onPress={increment}>
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

export default Automotive;

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
