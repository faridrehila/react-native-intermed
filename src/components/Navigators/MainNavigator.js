import React from 'react';
import {StackNavigator} from 'react-navigation';

import FeedsEpicNavigator from '../FeedsEpic/FeedsEpicNavigator';
import _const from '../../lib/const';
import RadiosEpicNavigator from '../RadioEpic/RadioEpicNavigator';

export default StackNavigator(
  {
    FeedsEpic: {
      screen: ({navigation, screenProps}) => (
        <FeedsEpicNavigator screenProps={screenProps} />
      ),
      path: 'articles',
      navigationOptions: {header: null},
    },
    RadiosEpic: {
      screen: ({navigation, screenProps}) => (
        <RadiosEpicNavigator screenProps={screenProps} />
      ),
      path: 'radios',
      navigationOptions: {header: null},
    },
  },
  {
    initialRouteName: 'RadiosEpic',
    swipeEnabled: false,
    animationEnabled: false,
  },
);
