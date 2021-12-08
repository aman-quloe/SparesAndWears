import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Login from './container/screens/Login';
import RetailerRegister from './container/screens/RetailerRegister';
import WholeSalerRegister from './container/screens/WholeSalerRegister';
import Home from './container/screens/Home';
import EmptyCart from './container/screens/EmptyCart';
import BottomTabNavigator from './container/navigation/BottomTabNavigator';

import GiftCard from './container/screens/GiftCard';
import NewProducts from './container/screens/NewProducts';
import OfferProducts from './container/screens/OfferProducts';
import Orders from './container/screens/Orders';
import Welcome from './container/screens/Welcome';
import Navigator from './container/navigation/Navigator';
import SportYoga from './container/screens/SportYoga';
import SportGym from './container/screens/SportGym';
import SportDoor from './container/screens/SportDoor';
import SportsLeisure from './container/screens/SportsLeisure';
import SportsDD from './container/screens/SportsDD'
import SportColored from './container/screens/SportColored';
import Automotive from './container/screens/Automotive';
import Shop from './container/screens/Shop';
// import AutomotivePc from './container/screens/AutomotivePc';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import cartReducer from './store/reducers/cartReducer';

const rootReducer = combineReducers({
  products: cartReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#0074b2" />
      {/* <Provider store={store}>
        <Navigator />
      </Provider> */}
      <Navigator/>
      {/* <Shop/> */}
      {/* <SportsDD/> */}
      {/* <Home /> */}
      {/* <BottomTabNavigator /> */}
      {/* <Categories /> */}
      {/* <EmptyCart /> */}
      {/* <GiftCard /> */}
      {/* <NewProducts /> */}
      {/* <OfferProducts /> */}
      {/* <Orders /> */}
      {/* <Welcome /> */}
      {/* <RetailerRegister /> */}
      {/* <WholeSalerRegister /> */}
      {/* <Login /> */}
      {/* <Sports /> */}
      {/* <SportDoor /> */}
      {/* <SportGym /> */}
      {/* <SportColored /> */}
      {/* <AutomotivePc /> */}
      {/* <Automotive /> */}
      {/* <SportsLeisure /> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
