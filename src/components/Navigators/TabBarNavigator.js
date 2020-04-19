import React, {useEffect} from 'react';
import {TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
import TrackPlayer from 'react-native-track-player';

import ThemedView from '../_Shared/ThemedComponents/ThemedView';
import ThemedIcon from '../_Shared/ThemedComponents/ThemedIcon';
import _const from '../../lib/const';
import RadioPlayer from '../_Shared/RadioPlayer';

function TabBarNavigator(props) {
  const {navigation} = props;

  const playbackState = TrackPlayer.usePlaybackState();

  const routes = [
    {
      icon: 'library-books',
      name: 'FeedsEpic',
    },
    {
      icon: 'radio',
      name: 'RadiosEpic',
    },
    {
      icon: 'radio',
      name: 'FormEpic',
    },
  ];

  const currentRouteName =
    navigation.state.routes[navigation.state.index].routeName;
  const currentTab = navigation.state.routes[navigation.state.index];

  if (currentTab.index !== 0) {
    return <View />;
  }
  return (
    <ThemedView
      style={{
        height:
          playbackState === TrackPlayer.STATE_NONE ||
          playbackState === TrackPlayer.STATE_STOPPED
            ? 50
            : 140,
        backgroundColor: 'white',
        elevation: 1,
        shadowRadius: 2,
        shadowOpacity: 0.1,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        borderTopColor: 'lightgrey',
        borderTopWidth: 1,
      }}>
      <RadioPlayer />
      <ThemedView
        style={{
          height: 50,
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        {routes.map(route => (
          <TouchableHighlight
            underlayColor={'lighgrey'}
            onPress={() => navigation.navigate(route.name)}>
            <View>
              <ThemedIcon
                name={route.icon}
                size={currentRouteName === route.name ? 35 : 30}
                color={
                  currentRouteName === route.name
                    ? _const.COLOR_MAINRED
                    : 'gray'
                }
              />
            </View>
          </TouchableHighlight>
        ))}
      </ThemedView>
    </ThemedView>
  );
}

TabBarNavigator.propTypes = {
  navigation: PropTypes.any,
};
export default TabBarNavigator;
