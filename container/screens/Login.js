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

import AsyncStorage from '@react-native-async-storage/async-storage';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import logo from '../assets/icons/logo.png';

const Login = ({navigation}) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const loginHandler = async () => {
    // >>> checking username

    if (username.length == 0) {
      Alert.alert('Oops ', 'User Name could not be empty', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      // >>> password check
      if (password.length == 0) {
        Alert.alert('Oops ', 'password could not be empty', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      } else {
        /** login credential in form of formdata  */

        const loginFormData = new FormData();
        loginFormData.append('username', username);
        loginFormData.append('password', password);

        /** login credential in form of formdata  */
        let response = await axios({
          method: 'post',
          url: 'https://www.sparesandwears.com/AndroidCon/login.php',
          data: loginFormData,
          headers: {
            'Content-Type': 'multipart/form-data',
          } /** headers is given to give credential in formdata */,
        });
        console.log(response.data.success);

        if (response.data.success == 'true') {
          navigation.navigate('Bottom');
          try {
            await AsyncStorage.setItem('username', username);
          } catch (e) {
            // saving error
          }
        } else {
          // if user is not valid

          Alert.alert('Oops ', 'Invalid user name or password', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
      }
    }
  };

  return (
    <View style={styles.screen}>
      <Image
        source={logo}
        style={{width: 110, height: 53, resizeMode: 'contain'}}></Image>
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: '#badff1',
          height: 600,
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
          Login
        </Text>
        <View style={styles.container}>
          <TextInput
            placeholder="Email ID"
            placeholderTextColor="grey"
            style={{
              borderWidth: 1,
              height: 40,
              color: 'black',
              fontSize: 16,
              padding: 2,
              marginHorizontal: '5%',
              borderRadius: 5,
            }}
            value={username}
            onChangeText={setusername}></TextInput>
          <TextInput
            placeholder="Password"
            placeholderTextColor="grey"
            style={{
              borderWidth: 1,
              height: 40,
              color: 'black',
              fontSize: 16,
              padding: 2,
              marginHorizontal: '5%',
              borderRadius: 5,
            }}
            value={password}
            onChangeText={setpassword}></TextInput>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{alignSelf: 'flex-end', marginHorizontal: '6%'}}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 14,
                color: 'black',
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            // onPress={() => navigation.navigate('Home', {name: 'Home'})}
            onPress={loginHandler}
            style={{
              marginHorizontal: '3%',
              height: 45,
              borderRadius: 6,
              backgroundColor: '#c4171d',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#ffff', fontSize: 18}}>Sign In!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('RetailerRegister', {
                name: 'RetailerRegister',
              })
            }
            style={{
              marginHorizontal: '3%',
              borderRadius: 6,
              backgroundColor: '#0089ce',
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#ffff', fontSize: 18}}>
              Create New Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    width: width,
    height: height,

    backgroundColor: '#badff1',
  },
  container: {
    backgroundColor: '#ffff',
    justifyContent: 'space-evenly',
    margin: '4%',
    height: 400,
    paddingVertical: 30,
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
});
