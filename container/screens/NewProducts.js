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
import Loading from '../assets/icons/Loading.mp4';
import img from '../assets/images/homeimg.jpg';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import axios from 'axios';

const NewProducts = () => {
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);

  const fetchHandler = async () => {
    await axios
      .get('https://www.sparesandwears.com/AndroidCon/fetch_newProducts.php')
      .then(response => {
        console.log(response.data.success);
        if (response.data.success == 'true') {
          setdata(response.data.data);
          setLoading(false);
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
                  margin: 26,
                  color: '#c4171d',
                  fontSize: 22,
                  fontStyle: 'italic',
                  fontWeight: '700',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                New Products
              </Text>
              <View
                style={{
                  width: width,
                  height: 90,
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

                <Text style={{fontWeight: '600', fontSize: 16}}>
                  {`Rs. ${item.MRP}`}
                </Text>
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
          );
        }}
      />
    </View>
  );
};

export default NewProducts;

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
