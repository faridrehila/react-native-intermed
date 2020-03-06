import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import ShareComponent from '../../_Shared/ShareComponent';
import Bookmark from '../../_Shared/Bookmark';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    minWidth: 100,
  },
});

export default function HeaderRightFeedScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Bookmark feedId={navigation.state.params.id} />
      <ShareComponent />
    </View>
  );
}

HeaderRightFeedScreen.propTypes = {
  navigation: PropTypes.object,
};
