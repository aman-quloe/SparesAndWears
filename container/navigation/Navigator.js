import React from 'react';

import Login from '../screens/Login';
import RetailerRegister from '../screens/RetailerRegister';
import Automotive from '../screens/Automotive';
import AutomotiveLcv from '../screens/AutomotiveLcv';
import AutomotivePc from '../screens/AutomotivePc';
import AutomotiveTwowheeler from '../screens/AutomotiveTwowheeler';
import AutomotiveThreewheeler from '../screens/AutomotiveThreewheeler';
import AutomotiveHcv from '../screens/AutomotiveHcv';
import AutomotiveAccessories from '../screens/AutomotiveAccessories';
import SportsLeisure from '../screens/SportsLeisure';
import SportYoga from '../screens/SportYoga';
import SportDoor from '../screens/SportDoor';
import SportGym from '../screens/SportGym';
import SportColored from '../screens/SportColored';
import AcRefrigeration from '../screens/AcRefrigeration';
import AcAcoustic from '../screens/AcAcoustic';
import AcThermal from '../screens/AcThermal';
import AcTapes from '../screens/AcTapes';
import Home from '../screens/Home';
import Shop from '../screens/Shop';
import {NavigationContainer} from '@react-navigation/native';

import NewProducts from '../screens/NewProducts';

import Orders from '../screens/Orders';
import Welcome from '../screens/Welcome';
import GiftCard from '../screens/GiftCard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import WholeSalerRegister from '../screens/WholeSalerRegister';

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
          name="WholeSalerRegister"
          component={WholeSalerRegister}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="RetailerRegister"
          component={RetailerRegister}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AutomotivePc"
          component={AutomotivePc}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Automotive"
          component={Automotive}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AutomotiveLcv"
          component={AutomotiveLcv}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AutomotiveTwowheeler"
          component={AutomotiveTwowheeler}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AutomotiveThreewheeler"
          component={AutomotiveThreewheeler}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AutomotiveHcv"
          component={AutomotiveHcv}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AutomotiveAccessories"
          component={AutomotiveAccessories}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="AcRefrigeration"
          component={AcRefrigeration}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="AcAcoustic"
          component={AcAcoustic}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="AcThermal"
          component={AcThermal}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="AcTapes"
          component={AcTapes}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SportsLeisure"
          component={SportsLeisure}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SportYoga"
          component={SportYoga}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="SportDoor"
          component={SportDoor}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SportGym"
          component={SportGym}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SportColored"
          component={SportColored}
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
