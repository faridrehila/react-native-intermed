import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import ListItemBodyDetails from './ListItemBodyDetails';

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
      <Text style={styles.title}>{title}</Text>

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
    color: 'black',
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
