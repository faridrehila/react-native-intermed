import React from 'react';
import {StackNavigator} from 'react-navigation';
import {navigateOnce} from '../../util/navigationUtil';

import FeedsScreen from './FeedsScreen/FeedsScreen';
import SourceScreen from './SourceScreen/SourceScreen';
import _const from '../../lib/const';
import HeaderRightFeedScreen from './FeedScreen/HeaderRightFeedScreen';
import FeedScreen from './FeedScreen/index';
import ToggleSideBarMenu from '../_Shared/SideBarMenu/ToggleSideBarMenu';
import ThemeSwitch from '../_Shared/ThemeSwitch';
import ThemedHeaderTile from '../_Shared/ThemedComponents/ThemedHeaderTile';

const FeedsNavigator = StackNavigator(
  {
    FeedsScreen: {
      screen: FeedsScreen,
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
    FeedScreen: {
      screen: FeedScreen,
      navigationOptions: ({navigation, screenProps}) => ({
        headerRight: <HeaderRightFeedScreen navigation={navigation} />,
        tabBarVisible: false,
        headerStyle: {
          backgroundColor: screenProps.background,
        },
        headerTintColor: screenProps.foreground,
      }),
      path: ':feedUrl/:id',
    },
    SourceScreen: {
      screen: SourceScreen,
      navigationOptions: ({navigation, screenProps}) => ({
        headerTitle: <ThemedHeaderTile title={navigation.state.params.name} />,
        headerStyle: {
          backgroundColor: screenProps.background,
        },
        headerTintColor: screenProps.foreground,
      }),
      path: 'source/:id/:name',
    },
  },
  {
    initialRouteName: 'FeedsScreen',
    headerMode: 'screen',
  },
);

FeedsNavigator.router.getStateForAction = navigateOnce(
  FeedsNavigator.router.getStateForAction,
);

export default FeedsNavigator;
