import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

// import Bookmark from '../Bookmark';
import ShareComponent from '../../_Shared/ShareComponent';

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
      {/* <Bookmark
      id={navigation.state.params.feed.id}
      data={navigation.state.params.feed}
      color={'#fff'}
    /> */}
      <ShareComponent />
    </View>
  );
}

HeaderRightFeedScreen.propTypes = {
  navigation: PropTypes.object,
};
