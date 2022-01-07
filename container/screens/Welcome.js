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
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import img from '../assets/images/homeimg.jpg';
import {importSpecifier} from '@babel/types';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Welcome = () => {
  return (
    <>
      <View style={styles.screen}>
        <View style={styles.header}>
          <Image
            source={Logo}
            style={{width: 110, height: 60, resizeMode: 'contain'}}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: width,
              height: 400,
              justifyContent: 'space-between',
              backgroundColor: '#ffff',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: width,
                height: 90,
                backgroundColor: '#0074b2',
              }}></View>
            <Text style={{fontWeight: '500', fontSize: 17, color: '#0074b2'}}>
              WELCOME USER
            </Text>
            <View
              style={{
                margin: 20,
                borderBottomWidth: 1,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text style={{fontWeight: '500'}}>Your Name</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: 45,
                  height: 24,

                  backgroundColor: '#0074b2',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                }}>
                <Text style={{color: '#ffff'}}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                margin: 20,
                borderBottomWidth: 1,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text style={{fontWeight: '500'}}>email@mail.com</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: 45,
                  height: 24,

                  backgroundColor: '#0074b2',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                }}>
                <Text style={{color: '#ffff'}}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                margin: 20,
                borderBottomWidth: 1,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text style={{fontWeight: '500'}}>+91-0000000000</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: 45,
                  height: 24,

                  backgroundColor: '#0074b2',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                }}>
                <Text style={{color: '#ffff'}}>Edit</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: 160,
                height: 24,
                backgroundColor: '#0074b2',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 3,
              }}>
              <Text style={{color: '#ffff'}}>Change Password</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width,
              height: 390,
              backgroundColor: '#0074b2',
              marginTop: 50,
            }}>
            <View
              style={{
                height: 75,
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',

                  marginHorizontal: 36,
                }}>
                <Text style={styles.footertext}>Home</Text>
                <Text style={styles.footertext}>Privacy Policy</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',

                  marginHorizontal: 36,
                }}>
                <Text style={styles.footertext}>About</Text>
                <Text style={styles.footertext}>Refund Policy</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',

                  marginHorizontal: 36,
                }}>
                <Text style={styles.footertext}>Contact</Text>
                <Text style={styles.footertext}>FAQ's</Text>
              </View>
            </View>
            <View
              style={{
                width: width,
                marginVertical: 15,
                flexDirection: 'row',
                paddingHorizontal: 20,
                alignItems: 'center',
              }}>
              <View style={{width: '20%'}}>
                <Fontisto name="whatsapp" size={21} color="#ffff" />
              </View>
              <Text style={{color: '#ffff', fontSize: 12}}>
                +91-124-4731500, +91-124-4731600
              </Text>
            </View>
            <View
              style={{
                width: width,
                marginVertical: 15,
                flexDirection: 'row',
                paddingHorizontal: 20,
                alignItems: 'center',
              }}>
              <View style={{width: '20%'}}>
                <Entypo name="mail" size={21} color="#ffff" />
              </View>
              <Text style={{color: '#ffff', fontSize: 12}}>
                Marketing@sparesandwears.com
              </Text>
            </View>
            <View
              style={{
                width: width,
                marginVertical: 15,
                flexDirection: 'row',
                paddingHorizontal: 20,
                alignItems: 'center',
              }}>
              <View style={{width: '20%'}}>
                <Ionicons name="location-sharp" size={21} color="#ffff" />
              </View>
              <Text style={{color: '#ffff', fontSize: 12, width: '80%'}}>
                Corporate Office : Plot No. 32,Sector-18 HUDA, Gurgaon-122015
              </Text>
            </View>
            <View
              style={{
                width: width,
                marginVertical: 15,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity activeOpacity={0.8}>
                <AntDesign name="googleplus" size={32} color="#ffff" />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <AntDesign name="twitter" size={32} color="#ffff" />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <AntDesign name="instagram" size={32} color="#ffff" />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <Entypo name="facebook-with-circle" size={32} color="#ffff" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
                marginHorizontal: 70,
              }}>
              <Text style={{color: '#ffff', fontWeight: '700', fontSize: 12}}>
                ©2021 ALP
              </Text>
              <Text style={{color: '#ffff', fontWeight: '700', fontSize: 12}}>
                All Rights Reserved
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Welcome;

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
  footertext: {
    color: '#ffff',
  },
});
