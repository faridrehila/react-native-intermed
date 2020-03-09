import React from 'react';
import {TouchableHighlight, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import ThemedText from '../../ThemedComponents/ThemedText';

export default function ListItemBodyDetails({
  source: {id, name},
  readTime,
  navigation,
}) {
  const navigateToSourceScreen = () => {
    navigation.navigate('SourceScreen', {id, name});
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.textTime}>Lecture: {readTime} min.</ThemedText>

      <TouchableHighlight onPress={navigateToSourceScreen}>
        <ThemedText style={styles.textSource}>{name}</ThemedText>
      </TouchableHighlight>

      <View style={styles.bookmark}>
        {/*   <Bookmark id={id} data={data} onPressBookmark={onPressBookmark} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textSource: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

ListItemBodyDetails.propTypes = {
  source: PropTypes.object,
  readTime: PropTypes.string,
  navigation: PropTypes.object,
};
