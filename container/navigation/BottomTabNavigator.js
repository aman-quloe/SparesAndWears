import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Shop from '../screens/Shop';
import Cart from '../screens/Cart';
import Login from '../screens/Login';
import Orders from '../screens/Orders';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import UserPage from '../screens/UserPage';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#9d080e',

          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={'black'} size={20} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#9d080e',
          tabBarIcon: ({color, size}) => (
            <Feather name="shopping-bag" color={'black'} size={20} />
          ),
        }}
        name="Shop"
        component={Shop}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#9d080e',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="md-cart-outline" color={'black'} size={20} />
          ),
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#9d080e',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" color={'black'} size={20} />
          ),
        }}
        name="UserPage"
        component={UserPage}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
