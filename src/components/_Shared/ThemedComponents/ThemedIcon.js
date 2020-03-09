import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import {ThemeContext, LIGHT_THEME} from '../../../context/ThemeProvider';

export default function ThemedIcon({name, color = 'black', size}) {
  const {currentTheme} = useContext(ThemeContext);

  return (
    <Icon
      name={name}
      size={size}
      color={currentTheme === LIGHT_THEME ? color : 'white'}
    />
  );
}

ThemedIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.any,
  size: PropTypes.number,
};
