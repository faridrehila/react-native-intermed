import React from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

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
      <Text style={styles.textTime}>Lecture: {readTime} min.</Text>

      <TouchableHighlight onPress={navigateToSourceScreen}>
        <Text style={styles.textSource}>{name}</Text>
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
