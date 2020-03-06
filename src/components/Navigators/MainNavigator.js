import React from 'react';
import {StackNavigator} from 'react-navigation';

import FeedsEpicNavigator from '../FeedsEpic/FeedsEpicNavigator';
import _const from '../../lib/const';

export default StackNavigator(
  {
    FeedsEpic: {
      screen: FeedsEpicNavigator,
      path: 'articles',
      navigationOptions: {header: null},
    },
  },
  {
    initialRouteName: 'FeedsEpic',
    swipeEnabled: false,
    animationEnabled: false,
  },
);
