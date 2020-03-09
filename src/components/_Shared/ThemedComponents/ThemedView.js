import React, {useContext} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {ThemeContext} from '../../../context/ThemeProvider';

export default function ThemedView({children, style = {}}) {
  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={{
        ...style,
        backgroundColor: theme.background,
      }}>
      {children}
    </View>
  );
}

ThemedView.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.any.isRequired,
};
