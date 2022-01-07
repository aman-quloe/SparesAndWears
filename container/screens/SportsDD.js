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
  Button,
} from 'react-native';
import Logo from '../assets/icons/logo.png';
import Login from './Login';
import product from '../assets/images/product.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import sport1 from '../assets/images/sport1.jpg';
import sport2 from '../assets/images/sport2.jpg';
import img from '../assets/images/homeimg.jpg';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import axios from 'axios';

import DropDownPicker from 'react-native-dropdown-picker';

const SportYoga = () => {
  const [data, setdata] = useState('');
  // const [loading, setLoading] = useState(true);
  const [category, setcategory] = useState();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {label: 'Yoga', value: 'yoga'},
    {label: 'Door', value: 'door'},
    {label: 'Gym', value: 'gym'},
    {label: 'Colored', value: 'colored'},
  ]);

  const fetchYogaHandler = async () => {
    await axios
      .get('https://www.sparesandwears.com/AndroidCon/sports_yoga.php')
      .then(response => {
        console.log(response.data.success);
        if (response.data.success == 'true') {
          setdata(response.data.data);
          console.log(response.data.data);
          // setLoading(false);
        }
      })
      .catch(err => console.log(err.response.data));
  };

  const fetchDoorHandler = async () => {
    await axios
      .get('https://www.sparesandwears.com/AndroidCon/sports_door.php')
      .then(response => {
        console.log(response.data.success);
        if (response.data.success == 'true') {
          setdata(response.data.data);
          console.log(response.data.data);
          // setLoading(false);
        }
      })
      .catch(err => console.log(err.response.data));
  };

  const fetchGymHandler = async () => {
    await axios
      .get('https://www.sparesandwears.com/AndroidCon/sports_gym.php')
      .then(response => {
        console.log(response.data.success);
        if (response.data.success == 'true') {
          setdata(response.data.data);
          console.log(response.data.data);
          // setLoading(false);
        }
      })
      .catch(err => console.log(err.response.data));
  };

  const fetchColoredHandler = async () => {
    await axios
      .get('https://www.sparesandwears.com/AndroidCon/sports_colored.php')
      .then(response => {
        console.log(response.data.success);
        if (response.data.success == 'true') {
          setdata(response.data.data);
          console.log(response.data.data);
          // setLoading(false);
        }
      })
      .catch(err => console.log(err.response.data));
  };

  // useEffect(() => {
  //   fetchHandler();
  //   return () => {};
  // }, []);
  // return loading == true ? (
  //   <Text>Loading...</Text>
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
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        ListHeaderComponent={() => {
          return (
            <View
              style={{
                width: width,
                height: 130,
                backgroundColor: '#ffff',
              }}>
              {/* <Button title="yoga" onPress={fetchYogaHandler}></Button>
              <Button title="door mat" onPress={fetchDoorHandler}></Button>
              <Button
                title="colored mat"
                onPress={fetchColoredHandler}></Button> */}

              <DropDownPicker
                style={{
                  width: 170,
                  borderColor: 'gray',
                  borderWidth: 0.5,
                  height: 40,
                  alignSelf: 'center',
                  position: 'absolute',
                }}
                dropDownContainerStyle={{
                  width: 150,
                  borderColor: 'gray',
                  borderWidth: 0.5,
                  height: 150,
                  alignSelf: 'center',
                }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                onChangeValue={
                  value == 'yoga'
                    ? fetchYogaHandler
                    : value == 'colored'
                    ? fetchColoredHandler
                    : value == 'door'
                    ? fetchDoorHandler
                    : fetchGymHandler
                }
                // setItems={setItems}
              />
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
                Sports and Leisure Flooring
              </Text>
              <View
                style={{
                  width: width,
                  height: 80,
                  backgroundColor: '#b2dbef',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                {/* <Picker
                  selectedValue={category}
                  onValueChange={itemValue => setcategory(itemValue)}
                  style={{
                    width: '70%',
                    height: 34,
                    borderWidth: 1,
                    borderRadius: 17,
                    backgroundColor: '#ffff',
                    flexDirection: 'row',
                  }}>
                  <Picker.Item label="Select Category" value="" />
                  <Picker.Item
                    label="Yoga Mat"
                    value={('Yoga Mat', fetchYogaHandler)}
                  />
                  <Picker.Item label="Door Mat" value={fetchDoorHandler} />
                  <Picker.Item label="Gym Mat" value={fetchGymHandler} />
                  <Picker.Item
                    label="Colored Granules"
                    value={fetchColoredHandler}
                  />

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
                </Picker> */}
              </View>
            </View>
          );
        }}
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
            setvalue(value + 1);
            settotal(total + 1);
          };

          const decrement = () => {
            setvalue(value - 1);
            settotal(total - 1);
          };
          return (
            <View style={{alignItems: 'center'}}>
              <View style={styles.shadowboxlarge}>
                <Image
                  source={{
                    uri: `https://sparesandwears.com/admin-panel/product_images/${item.ImageName}`,
                  }}
                  style={{
                    width: '96%',
                    height: 120,
                    resizeMode: 'contain',
                  }}
                />
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.producttitle}>{item.Title}</Text>
                  <Text style={styles.productcompany}>{item.Company}</Text>
                  <Text style={styles.productmodel}>{item.Vehicle_Model}</Text>
                  <Text style={{fontWeight: '600', fontSize: 14}}>
                    {`Rs. ${item.MRP}`}
                  </Text>
                  <TouchableOpacity
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
          );
        }}
      />
    </View>
  );
};

export default SportYoga;

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
  boxtext: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },
  producttitle: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
});
