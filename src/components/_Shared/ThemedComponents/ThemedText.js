import React, {useContext} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import {ThemeContext} from '../../../context/ThemeProvider';

export default function ThemedText({children, style = {}}) {
  const {theme} = useContext(ThemeContext);

  return (
    <Text
      style={{
        ...style,
        color: theme.fontColor,
      }}>
      {children}
    </Text>
  );
}

ThemedText.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.any.isRequired,
};
