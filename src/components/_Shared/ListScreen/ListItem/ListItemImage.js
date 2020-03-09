import React, {useContext} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import _const from '../../../../lib/const';
import {ThemeContext} from '../../../../context/ThemeProvider';

export default function ListItemImage({image}) {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      {!!image && image.includes('http') ? (
        <Image
          style={[
            styles.imageStyle,
            {
              backgroundColor: theme.placeholderView,
            },
          ]}
          source={{
            uri: image,
          }}
        />
      ) : (
        <View style={{flex: 1, backgroundColor: theme.placeholderView}} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: _const.COLOR_SHADE1},
  imageStyle: {
    flex: 1,
    width: 130,
    height: 130,
  },
});

ListItemImage.propTypes = {
  image: PropTypes.string,
};
