import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import logo from '../assets/icons/logo.png';

const WholeSalerRegister = () => {
  return (
    <View style={styles.screen}>
      <Image
        source={logo}
        style={{
          width: 110,
          height: 53,
          resizeMode: 'contain',
        }}></Image>

      <View
        style={{
          justifyContent: 'space-between',
          marginHorizontal: '12%',

          borderRadius: 5,
          backgroundColor: '#e9e5e4',
          height: 720,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              color: '#c4171d',
              fontSize: 30,
              fontStyle: 'italic',
              fontWeight: '700',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            Whole Saler Registration
          </Text>
          <View style={styles.container}>
            <TextInput
              placeholder="Full Name"
              style={{
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 35,
                marginVertical: '2%',
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="Email Address"
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 35,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>

            <TextInput
              placeholder="Password"
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 35,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <View
              style={{
                marginHorizontal: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CheckBox disabled={false} />
              <Text style={{fontSize: 10}}>Show Password</Text>
            </View>
            <TextInput
              placeholder="Confirm Password"
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 35,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="Authorized Person"
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 35,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="Mobile Number"
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 35,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="GST No"
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 35,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="Delivery Address"
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 35,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="City"
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 35,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="State"
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 35,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="Pin Code"
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 35,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="Dealer/Distributor code"
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 35,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                marginHorizontal: '6%',
              }}></TouchableOpacity>

            <TouchableOpacity
              style={{
                marginHorizontal: '3%',
                height: 40,
                borderRadius: 6,
                backgroundColor: '#c4171d',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#ffff', fontSize: 18}}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default WholeSalerRegister;

const styles = StyleSheet.create({
  screen: {
    width: width,
    height: height,

    backgroundColor: '#ffff',
  },
  container: {
    backgroundColor: '#e9e5e4',
    justifyContent: 'space-evenly',
    marginHorizontal: '3%',
    height: 750,
    paddingVertical: 20,
  },
});
