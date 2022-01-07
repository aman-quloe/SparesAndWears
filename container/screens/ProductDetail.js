import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Logo from '../assets/icons/logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hcv from '../assets/images/hcv.png';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import axios from 'axios';

const ProductDetail = props => {
  const [title, setTitle] = useState();
  const [company, setCompany] = useState();
  const [description, setDescription] = useState();
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState();
  const productId = props.route.params.productId;
  const productPrice = props.route.params.productPrice;
  const uname = props.route.params.uname;
  console.log(productId);

  const [value, setValue] = useState(1);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    } else {
      setValue(1);
    }
  };

  const fetchDetailHandler = async () => {
    await axios
      .get(
        `https://sparesandwears.com/AndroidCon/productDetail.php?id=${productId}`,
      )
      .then(response => {
        if (response.data.success == 'true') {
          console.log(response.data.data[0]);
          setLoading(false);
          setTitle(response.data.data[0].Title);
          setCompany(response.data.data[0].Company);
          setDescription(response.data.data[0].Description);
          setImage(response.data.data[0].ImageName);

          // setTitle(response.data.data[0].Title);

          // setLoading(false);
        }
      })
      .catch(err => console.log(err.response.data));
  };

  const addToCartHandler = async productId => {
    console.log(productId);
    const addToCartData = new FormData();
    addToCartData.append('username', uname);
    addToCartData.append('product_id', productId);
    addToCartData.append('quantity', value);

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
    fetchDetailHandler();
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

        <TouchableOpacity style={{paddingRight: '1%'}}>
          <FontAwesome name="bars" size={18} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{width: width, height: height, backgroundColor: '#badff1'}}>
        <View
          style={{
            marginTop: '15%',
            width: width * 0.9,
            height: height * 0.6,
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: width * 0.74,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => {
                addToWishlist(productId);
              }}>
              <AntDesign
                name="heart"
                size={26}
                backgroundColor="green"
                color={'grey'}
                style={{}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '80%',
              height: '40%',
            }}>
            <Image
              source={{
                uri: `https://sparesandwears.com/admin-panel/product_images/${image}`,
              }}
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
          </View>
          <Text
            style={{
              width: '80%',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
              color: 'black',
              paddingTop: '3%',
            }}>
            {title}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              paddingTop: '2%',
              color: 'black',
              fontWeight: 'bold',
            }}>
            {company}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              color: 'grey',
              paddingTop: '2%',
            }}>
            {productPrice}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
              fontSize: 12,
              paddingTop: '3%',
              width: '50%',
            }}>
            <AntDesign name="star" size={18} color="black" />
            <AntDesign name="star" size={18} color="black" />
            <AntDesign name="star" size={18} color="black" />
            <AntDesign name="star" size={18} color="black" />
            <AntDesign name="star" size={18} color="black" />
          </View>
          <View
            style={{
              width: '70%',
              height: '10%',
              borderRadius: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '5%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#dddddd',
                borderRadius: 5,
                width: '45%',
                height: '65%',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity activeOpacity={0.8} onPress={decrement}>
                <Ionicons name="remove" size={18} color="black" />
              </TouchableOpacity>
              <Text style={{fontWeight: '500', color: 'black'}}>{value}</Text>

              <TouchableOpacity activeOpacity={0.8} onPress={increment}>
                <Ionicons name="add" size={18} color="black" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => addToCartHandler(productId)}
              style={{
                borderRadius: 5,
                backgroundColor: '#c4171d',
                height: '65%',
                width: '45%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white'}}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: '65%',
            width: width * 0.9,
            height: height * 0.4,
            backgroundColor: '#ffff',

            
            marginTop: '8%',
            borderWidth: 1,
            borderColor: 'black',
            alignSelf: 'center',
            marginBottom: '8%',
          }}>
          <Text
            style={{
              fontSize: 14,
              paddingTop: '2%',
              paddingLeft: '2%',
              fontWeight: 'bold',
              color: 'black',
            }}>
            Description
          </Text>
          <Text
            style={{
              fontSize: 14,
              paddingTop: '2%',
              paddingLeft: '2%',
            }}>
            {description}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;

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
});
