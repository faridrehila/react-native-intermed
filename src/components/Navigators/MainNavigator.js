import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';

import FeedsEpicNavigator from '../FeedsEpic/FeedsEpicNavigator';
import _const from '../../lib/const';
import RadiosEpicNavigator from '../RadioEpic/RadioEpicNavigator';
import TabBarNavigator from './TabBarNavigator';

export default createBottomTabNavigator(
  {
    FeedsEpic: {
      screen: FeedsEpicNavigator,
      path: 'articles',
      navigationOptions: {
        header: null,
      },
    },
    RadiosEpic: {
      screen: RadiosEpicNavigator,
      path: 'radios',
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'FeedsEpic',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarComponent: TabBarNavigator,
  },
);
