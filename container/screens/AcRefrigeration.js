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
import AntDesign from 'react-native-vector-icons/AntDesign';
import thermal from '../assets/images/thermal.jpg';
import acoustic from '../assets/images/acoustic.png';
import tapes from '../assets/images/tapes.png';
import axios from 'axios';
import img from '../assets/images/homeimg.jpg';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const AcRefrigeration = ({navigation}) => {
  const [data, setdata] = useState();
  // const [loading, setLoading] = useState(true);

  // const fetchHandler = async () => {
  //   await axios
  //     .get(
  //       'https://www.sparesandwears.com/AndroidCon/fetchAcRefrigerationCategory.php',
  //     )
  //     .then(response => {
  //       console.log(response.data.success);
  //       if (response.data.success == 'true') {
  //         setdata(response.data.data);
  //         setLoading(false);
  //       }
  //     })
  //     .catch(err => console.log(err.response.data));
  // };

  // useEffect(() => {
  //   fetchHandler();
  //   return () => {};
  // }, []);

  // return loading == true ? (
  //   <Text>Loading....</Text>
  // ) : (
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

      <ScrollView>
        <View
          style={{
            width: width,
            height: 170,
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
              <TextInput
                placeholder="Category"
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
                <AntDesign name="caretdown" size={22} color="#ffff" />
              </View>
            </View>
          </View>
          <View style={{width: '100%', height: 50, padding: 10}}>
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
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AcThermal', {
                name: 'AcThermal',
              })
            }>
            <View style={styles.shadowboxlarge}>
              <Image
                // source={{
                //   uri: `https://sparesandwears.com/admin-panel/product_images/${item.ImageName}`,
                // }}
                source={thermal}
                style={{
                  width: '100%',
                  height: 120,
                  resizeMode: 'cover',
                }}
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.producttitle}>Thermal Insulation</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AcAcoustic', {
                name: 'AcAcoustic',
              })
            }>
            <View style={styles.shadowboxlarge}>
              <Image
                // source={{
                //   uri: `https://sparesandwears.com/admin-panel/product_images/${item.ImageName}`,
                // }}
                source={acoustic}
                style={{
                  width: '96%',
                  height: 120,
                  resizeMode: 'contain',
                }}
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.producttitle}>Acoustic Insulation</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AcTapes', {
                name: 'AcTapes',
              })
            }>
            <View style={styles.shadowboxlarge}>
              <Image
                // source={{
                //   uri: `https://sparesandwears.com/admin-panel/product_images/${item.ImageName}`,
                // }}
                source={tapes}
                style={{
                  width: '96%',
                  height: 120,
                  resizeMode: 'contain',
                }}
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.producttitle}>Tapes and Adhesives</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AcRefrigeration;

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
    margin: 15,
    padding: 10,
    backgroundColor: '#dddddd',
    width: width / 2,

    height: 170,

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
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});
