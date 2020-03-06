import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import _const from '../../../../lib/const';

export default function ListItemImage({image}) {
  return (
    <View style={styles.container}>
      {!!image && image.includes('http') ? (
        <Image
          resizeMode="cover"
          style={{flex: 1, width: 130, height: 130}}
          source={{
            uri: image,
          }}
        />
      ) : (
        <View style={styles.emptyImage} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: _const.COLOR_SHADE1},
  imageStyle: {
    flex: 1,
    minHeight: 120,
    width: '100',
    height: '100',
  },
  emptyImage: {flex: 1, backgroundColor: _const.COLOR_SHADE1},
});

ListItemImage.propTypes = {
  image: PropTypes.string,
};
