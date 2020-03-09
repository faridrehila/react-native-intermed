import React, {useContext} from 'react';
import {TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

import {ThemeContext} from '../../../context/ThemeProvider';

export default function ThemedTouchable({onPress, children, style = {}}) {
  const {theme} = useContext(ThemeContext);

  return (
    <TouchableHighlight
      underlayColor="lightgrey"
      style={{
        ...style,
        backgroundColor: theme.background,
      }}
      onPress={onPress}>
      {children}
    </TouchableHighlight>
  );
}

ThemedTouchable.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  children: PropTypes.any.isRequired,
};
