import React from 'react';
import {StackNavigator} from 'react-navigation';
import {navigateOnce} from '../../util/navigationUtil';

import _const from '../../lib/const';
import ThemedHeaderTile from '../_Shared/ThemedComponents/ThemedHeaderTile';
import RadiosScreen from './RadiosScreen';
import ThemeSwitch from '../_Shared/ThemeSwitch';
import ToggleSideBarMenu from '../_Shared/SideBarMenu/ToggleSideBarMenu';

const RadiosEpicNavigator = StackNavigator(
  {
    RadiosScreen: {
      screen: RadiosScreen,
      navigationOptions: ({navigation, screenProps}) => ({
        headerTitle: <ThemedHeaderTile title={'Intermed'} />,
        headerLeft: <ToggleSideBarMenu />,
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

RadiosEpicNavigator.router.getStateForAction = navigateOnce(
  RadiosEpicNavigator.router.getStateForAction,
);

export default RadiosEpicNavigator;
