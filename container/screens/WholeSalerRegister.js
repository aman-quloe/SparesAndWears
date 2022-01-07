import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import logo from '../assets/icons/logo.png';

const WholeSalerRegister = () => {
  const [name, setname] = useState('');
  const [mobile, setmobile] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [email, setemail] = useState('');
  const [gst_number, setgst_number] = useState('');
  const [delievery_address, setdelievery_address] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [pin_code, setpin_code] = useState('');
  const [code, setcode] = useState('');

  const registerHandler = async () => {
    const registerFormData = new FormData();
    registerFormData.append('name', name);
    registerFormData.append('email', email);
    registerFormData.append('password', password);
    registerFormData.append('mobile', mobile);
    registerFormData.append('gst_number', gst_number);
    registerFormData.append('delivery_address', delievery_address);
    registerFormData.append('city', city);
    registerFormData.append('state', state);
    registerFormData.append('pin_code', pin_code);
    registerFormData.append('code', code);

    let response = await axios({
      method: 'post',
      url: 'https://www.sparesandwears.com/AndroidCon/addWholeSeller.php',
      data: registerFormData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response.data);
    if (response.data.success == 'true') {
      Alert.alert('Registered Successfully ! ', '', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      // if user is not valid

      Alert.alert('Registration Failed !', '', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

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
              placeholderTextColor="grey"
              value={name}
              onChangeText={setname}
              style={{
                backgroundColor: '#ffff',
                borderWidth: 1,
                color: 'black',
                height: 40,
                marginVertical: '2%',
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="grey"
              value={email}
              onChangeText={setemail}
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                color: 'black',
                borderWidth: 1,
                height: 40,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>

            <TextInput
              placeholder="Password"
              placeholderTextColor="grey"
              value={password}
              onChangeText={setpassword}
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 40,
                color: 'black',
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
              placeholderTextColor="grey"
              value={confirmpassword}
              onChangeText={setconfirmpassword}
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                color: 'black',
                borderWidth: 1,
                height: 40,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="Authorized Person"
              placeholderTextColor="grey"
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 40,
                color: 'black',
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor="grey"
              value={mobile}
              onChangeText={setmobile}
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                borderWidth: 1,
                color: 'black',
                height: 40,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="GST No"
              placeholderTextColor="grey"
              value={gst_number}
              onChangeText={setgst_number}
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 40,
                color: 'black',
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="Delivery Address"
              placeholderTextColor="grey"
              value={delievery_address}
              onChangeText={setdelievery_address}
              style={{
                marginVertical: '2%',
                color: 'black',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 40,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="City"
              placeholderTextColor="grey"
              value={city}
              onChangeText={setcity}
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                color: 'black',
                borderWidth: 1,
                height: 40,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="State"
              placeholderTextColor="grey"
              value={state}
              onChangeText={setstate}
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                color: 'black',
                borderWidth: 1,
                height: 40,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="Pin Code"
              placeholderTextColor="grey"
              value={pin_code}
              onChangeText={setpin_code}
              style={{
                marginVertical: '2%',
                color: 'black',
                backgroundColor: '#ffff',
                borderWidth: 1,
                height: 40,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TextInput
              placeholder="Dealer/Distributor code"
              placeholderTextColor="grey"
              value={code}
              onChangeText={setcode}
              style={{
                marginVertical: '2%',
                backgroundColor: '#ffff',
                color: 'black',
                borderWidth: 1,
                height: 40,
                marginHorizontal: '5%',
                borderRadius: 5,
              }}></TextInput>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                alignSelf: 'flex-end',
                marginHorizontal: '6%',
              }}></TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={registerHandler}
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
