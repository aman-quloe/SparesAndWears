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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Loading from '../assets/icons/Loading.mp4';
import img from '../assets/images/homeimg.jpg';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import Product from '../../model/product';
import axios from 'axios';

import {useSelector, useDispatch} from 'react-redux';
import * as cartActions from '../../store/actions/cart';

const AutomotiveTwowheeler = () => {
  // const products = useSelector()


  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);

  const [value, setvalue] = useState(0);
  const [total, settotal] = useState(0);

  const loadedProducts=[];

  const increment = () => {
    setvalue(value + 1);
    settotal(total + 1);
  };

  const decrement = () => {
    setvalue(value - 1);
    settotal(total - 1);
  };

  const fetchHandler = async () => {
    await axios
      .get(
        'https://sparesandwears.com/AndroidCon/fetchAutomotiveTwoWheeler.php',
      )
      .then(response => {
        console.log(response.data.success);
        if (response.data.success == 'true') {
          setdata(response.data.data);
          setLoading(false);

          for(const key in data){
            loadedProducts.push(
              new Product(
                key,
                data[key].Title,
                data[key].Company,
                data[key].Vehicle_Model,
                data[key].MRP,
                
              )

            )
          }
          

          
        }
      })
      .catch(err => console.log(err.response.data));
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
          );
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.shadowboxlarge}>
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
                <Text style={styles.producttitle}>{item.Company}</Text>
                <Text style={styles.producttitle}>{item.Vehicle_Model}</Text>
                <Text style={{fontWeight: '600', fontSize: 16}}>
                  {`Rs. ${item.MRP}`}
                </Text>

                <View style={{flexDirection: 'row', width: '40%'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#dddddd',
                      borderRadius: 5,
                      width: '80%',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}>
                    <TouchableOpacity onPress={decrement}>
                      <Ionicons name="remove" size={18} color="black" />
                    </TouchableOpacity>
                    <Text style={{fontWeight: '500', color: 'black'}}>
                      {value}
                    </Text>

                    <TouchableOpacity onPress={increment}>
                      <Ionicons name="add" size={18} color="black" />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#c4171d',
                      height: 28,
                      width: 100,
                      marginHorizontal:10,
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
          );
        }}
      />
    </View>
  );
};

export default AutomotiveTwowheeler;

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
