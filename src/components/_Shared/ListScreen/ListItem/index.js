import React from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

import _const from '../../../../lib/const';
import ListItemImage from './ListItemImage';
import ListItemBody from './ListItemBody';

export default function ListItem({
  id,
  title,
  link,
  image,
  source,
  duration,
  navigation,
  onPressBookmark,
  onPressItem,
}) {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => onPressItem(link, title)}>
      <View style={styles.subContainer}>
        <View style={{width: 130}}>
          <ListItemImage image={image} />
        </View>

        <ListItemBody
          id={id}
          title={title}
          source={source}
          duration={duration}
          navigation={navigation}
          onPressBookmark={onPressBookmark}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomColor: _const.COLOR_SHADE1,
    borderBottomWidth: 3,
    minHeight: 130,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

ListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  source: PropTypes.object,
  duration: PropTypes.string,
  navigation: PropTypes.object,
  onPressBookmark: PropTypes.func,
  onPressItem: PropTypes.func,
};
