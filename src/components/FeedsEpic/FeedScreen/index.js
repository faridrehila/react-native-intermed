import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import PropTypes from 'prop-types';

export default function FeedScreen({
  navigation: {
    state: {
      params: {feedUrl},
    },
  },
}) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <WebView source={{uri: feedUrl}} />
    </View>
  );
}

FeedScreen.propTypes = {
  navigation: PropTypes.object,
};
