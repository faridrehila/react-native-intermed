import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import _const from '../../../../lib/const';
import ListItemImage from './ListItemImage';
import ListItemBody from './ListItemBody';
import ThemedTouchable from '../../ThemedComponents/ThemedTouchable';

export default function ListItem({
  id,
  title,
  link,
  image,
  source,
  duration,
  navigation,
  onPressItem,
}) {
  return (
    <ThemedTouchable
      style={styles.container}
      onPress={() => onPressItem({id, link, title, image})}>
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
        />
      </View>
    </ThemedTouchable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 3,
    borderBottomColor: _const.COLOR_SHADE3,
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
  onPressItem: PropTypes.func,
};
