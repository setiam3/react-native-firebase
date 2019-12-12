import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';

import firebase from 'react-native-firebase';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SplashPage from './src/containers/SplashPage';
import Signup from './src/containers/Signup';
import Home from './src/containers/Home';
import Login from './src/containers/Login';

const App=createStackNavigator(
  {
    SplashPage:{
      screen:SplashPage,
      navigationOptions:{
        header:null,
      }
    },
    Signup:{
      screen:Signup,
      navigationOptions:{
        header:null,
      }
    },
    Home:{
      screen:Home,
      navigationOptions:{
        header:null,
      }
    },
    Login:{
      screen:Login,
      navigationOptions:{
        header:null,
      }
    }
  },{
    initialRouteName:'SplashPage',
  }
);

export default createAppContainer(App);