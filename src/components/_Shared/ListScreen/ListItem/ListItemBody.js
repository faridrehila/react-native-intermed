import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import ListItemBodyDetails from './ListItemBodyDetails';
import ThemedText from '../../ThemedComponents/ThemedText';

export default function ListItemBody({
  id,
  title,
  source,
  duration,
  navigation,
  onPressBookmark,
}) {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>{title}</ThemedText>

      <ListItemBodyDetails
        readTime={duration}
        source={source}
        id={id}
        navigation={navigation}
        onPressBookmark={onPressBookmark}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 5,
    width: '70%',
  },
  title: {
    maxWidth: '90%',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

ListItemBody.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  source: PropTypes.object,
  duration: PropTypes.string,
  navigation: PropTypes.object,
  onPressBookmark: PropTypes.func,
};
