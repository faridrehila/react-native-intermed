import React, {useContext} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import {ThemeContext, DARK_THEME} from '../../../context/ThemeProvider';
import _const from '../../../lib/const';

export default function ThemedHeaderTile({title}) {
  const {currentTheme} = useContext(ThemeContext);

  return (
    <Text
      style={[
        _const.INTERMED_TITLE_MOBILE,
        currentTheme === DARK_THEME && {color: 'white'},
      ]}>
      {title}
    </Text>
  );
}

ThemedHeaderTile.propTypes = {
  title: PropTypes.string.isRequired,
};
