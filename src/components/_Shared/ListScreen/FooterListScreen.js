import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import _const from '../../../lib/const';

export default function FooterListScreen({loadingNextPage}) {
  if (!loadingNextPage) return null;

  return (
    <View style={styles.containerFooter}>
      <ActivityIndicator animating size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerFooter: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: _const.COLOR_BORDER_TILE,
  },
});

FooterListScreen.propTypes = {
  loadingNextPage: PropTypes.bool,
};
