import React from 'react';
import {View, StyleSheet} from 'react-native';
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
    <View style={styles.container}>
      <WebView source={{uri: feedUrl}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

FeedScreen.propTypes = {
  navigation: PropTypes.object,
};
