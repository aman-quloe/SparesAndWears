import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import axios from 'axios';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import logo from '../assets/icons/logo.png';

const RetailerRegister = ({navigation}) => {
  const [fullname, setfullname] = useState('');
  const [mobile, setmobile] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');

  const registerHandler = async () => {
    const registerFormData = new FormData();
    registerFormData.append('fullname', fullname);
    registerFormData.append('username', username);
    registerFormData.append('password', password);
    registerFormData.append('mobile', mobile);

    // await axios
    //   .post(
    //     'https://www.sparesandwears.com/AndroidCon/signup.php',
    //     registerFormData,
    //   )
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(err => console.log(err.response));

    let response = await axios({
      method: 'post',
      url: 'https://www.sparesandwears.com/AndroidCon/signup.php',
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
          justifyContent: 'center',

          borderRadius: 5,
          backgroundColor: '#e9e5e4',
          height: 560,
        }}>
        <Text
          style={{
            margin: 40,
            color: '#c4171d',
            fontSize: 30,
            fontStyle: 'italic',
            fontWeight: '700',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          Retailer Registration
        </Text>
        <View style={styles.container}>
          <TextInput
            placeholder="Name"
            placeholderTextColor="grey"
            style={{
              backgroundColor: '#ffff',
              color: 'black',
              borderWidth: 1,
              height: 40,
              marginVertical: '2%',
              marginHorizontal: '5%',
              borderRadius: 5,
            }}
            value={fullname}
            onChangeText={setfullname}></TextInput>
          <TextInput
            placeholder="Mobile No."
            placeholderTextColor="grey"
            style={{
              color: 'black',
              marginVertical: '2%',
              backgroundColor: '#ffff',
              borderWidth: 1,
              height: 40,
              marginHorizontal: '5%',
              borderRadius: 5,
            }}
            value={mobile}
            onChangeText={setmobile}></TextInput>
          <TextInput
            placeholder="Email ID"
            placeholderTextColor="grey"
            style={{
              color: 'black',
              marginVertical: '2%',
              backgroundColor: '#ffff',
              borderWidth: 1,
              height: 40,
              marginHorizontal: '5%',
              borderRadius: 5,
            }}
            value={username}
            onChangeText={setusername}></TextInput>
          <TextInput
            placeholder="Password"
            placeholderTextColor="grey"
            style={{
              color: 'black',
              marginVertical: '2%',
              backgroundColor: '#ffff',
              borderWidth: 1,
              height: 40,
              marginHorizontal: '5%',
              borderRadius: 5,
            }}
            value={password}
            onChangeText={setpassword}></TextInput>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="grey"
            style={{
              color: 'black',
              marginVertical: '2%',
              backgroundColor: '#ffff',
              borderWidth: 1,
              height: 40,
              marginHorizontal: '5%',
              borderRadius: 5,
            }}
            value={confirmpassword}
            onChangeText={setconfirmpassword}></TextInput>

          <TouchableOpacity
            activeOpacity={0.8}
            // onPress={() => navigation.navigate('Login', {name: 'Login'})}
            onPress={registerHandler}
            style={{
              marginHorizontal: '3%',
              height: 45,
              borderRadius: 6,
              backgroundColor: '#c4171d',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#ffff', fontSize: 18}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RetailerRegister;

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
    height: 420,
    paddingVertical: 20,
  },
});
