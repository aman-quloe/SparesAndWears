import React from 'react';

import Login from '../screens/Login';
import RetailerRegister from '../screens/RetailerRegister';
import Home from '../screens/Home';
import Shop from '../screens/Shop';
import {NavigationContainer} from '@react-navigation/native';
import Catagories from '../screens/Catagories';
import NewProducts from '../screens/NewProducts';
import Sports from '../screens/Sports';
import Orders from '../screens/Orders';
import Welcome from '../screens/Welcome';
import GiftCard from '../screens/GiftCard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Bottom"
          component={BottomTabNavigator}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="RetailerRegister"
          component={RetailerRegister}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Shop"
          component={Shop}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Catagories"
          component={Catagories}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Sports"
          component={Sports}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="NewProducts"
          component={NewProducts}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Orders"
          component={Orders}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="GiftCard"
          component={GiftCard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
