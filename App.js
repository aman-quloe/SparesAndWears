import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Login from './container/screens/Login';
import RetailerRegister from './container/screens/RetailerRegister';
import WholeSalerRegister from './container/screens/WholeSalerRegister';
import Home from './container/screens/Home';
import EmptyCart from './container/screens/EmptyCart';
import BottomTabNavigator from './container/navigation/BottomTabNavigator';
import Categories from './container/screens/Catagories';
import GiftCard from './container/screens/GiftCard';
import NewProducts from './container/screens/NewProducts';
import OtherProducts from './container/screens/OtherProducts';
import Orders from './container/screens/Orders';
import Welcome from './container/screens/Welcome';
import Navigator from './container/navigation/Navigator';
import Sports from './container/screens/Sports';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#0074b2" />
      <Navigator />
      {/* <Home /> */}
      {/* <BottomTabNavigator /> */}
      {/* <Categories /> */}
      {/* <EmptyCart /> */}
      {/* <GiftCard /> */}
      {/* <NewProducts /> */}
      {/* <OtherProducts /> */}
      {/* <Orders /> */}
      {/* <Welcome /> */}
      {/* <RetailerRegister /> */}
      {/* <WholeSalerRegister /> */}
      {/* <Login /> */}
      {/* <Sports /> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
