import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {navigateOnce} from '../../util/navigationUtil';

import FeedsScreen from './FeedsScreen/FeedsScreen';
import SourceScreen from './SourceScreen/SourceScreen';
import _const from '../../lib/const';
import HeaderRightFeedScreen from './FeedScreen/HeaderRightFeedScreen';
import FeedScreen from './FeedScreen/index';

const renderBackBtn = () => {
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <View style={{marginLeft: 10}}>
      <Text>Back</Text>
    </View>
  </TouchableOpacity>;
};

const FeedsNavigator = StackNavigator(
  {
    FeedsScreen: {
      screen: FeedsScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle: 'Feed',
        //headerRight: <HeaderRightFeedScreen navigation={navigation} />,
        tabBarVisible: false,
      }),

      path: '',
    },
    FeedScreen: {
      screen: FeedScreen,
      navigationOptions: ({navigation}) => ({
        headerLeft: renderBackBtn(),
        headerRight: <HeaderRightFeedScreen navigation={navigation} />,
        tabBarVisible: false,
      }),
      path: ':feedUrl',
    },
    SourceScreen: {
      screen: SourceScreen,
      navigationOptions: ({navigation}) => ({
        headerLeft: renderBackBtn(),
        headerTitle: (
          <Text style={_const.INTERMED_TITLE_MOBILE}>
            {navigation.state.params.name}
          </Text>
        ),
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
