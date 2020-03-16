import React from 'react';
import {createStackNavigator} from 'react-navigation';

import _const from '../../lib/const';
import ThemedHeaderTile from '../_Shared/ThemedComponents/ThemedHeaderTile';
import RadiosScreen from './RadiosScreen';
import ThemeSwitch from '../_Shared/ThemeSwitch';

const RadiosEpicNavigator = createStackNavigator(
  {
    RadiosScreen: {
      screen: RadiosScreen,
      navigationOptions: ({navigation, screenProps}) => ({
        headerTitle: <ThemedHeaderTile title={'Intermed'} />,
        headerRight: <ThemeSwitch />,
        tabBarVisible: false,
        headerStyle: {
          backgroundColor: screenProps.background,
        },
      }),
      path: '',
    },
  },
  {
    initialRouteName: 'RadiosScreen',
    headerMode: 'screen',
  },
);

export default RadiosEpicNavigator;
