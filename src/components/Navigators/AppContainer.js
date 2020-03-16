import React from 'react';
import {createStackNavigator} from 'react-navigation';

import MainNavigator from './MainNavigator';
import SplashScreen from '../SplashEpic/SplashScreen/SplashScreen';

export default AppNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {},
      path: 'splash',
    },
    MainNavigator: {
      screen: ({navigation, screenProps}) => (
        <MainNavigator
          screenProps={{parentNavigation: navigation, ...screenProps}}
        />
      ),
      navigationOptions: {
        header: null,
      },
      path: 'app',
    },
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);
