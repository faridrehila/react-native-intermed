import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Splash from '../SplashEpic/SplashScreen/SplashScreen';
import MainNavigator from './MainNavigator';

const AppNavigator = createStackNavigator({
  AuthLoading: {
    screen: Splash,
    navigationOptions: {
      header: null,
    },
  },
  App: {
    screen: MainNavigator,
    navigationOptions: {
      header: null,
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
