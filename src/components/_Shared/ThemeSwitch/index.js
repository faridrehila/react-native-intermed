import React, {useContext} from 'react';
import {TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import {ThemeContext, LIGHT_THEME} from '../../../context/ThemeProvider';

export default function ThemeSwitch() {
  const {toggleTheme, currentTheme} = useContext(ThemeContext);

  return (
    <TouchableHighlight
      underlayColor={'lightgray'}
      onPress={toggleTheme}
      style={{marginRight: 8}}>
      {currentTheme === LIGHT_THEME ? (
        <Icon name={'brightness-3'} size={24} />
      ) : (
        <Icon name={'wb-sunny'} size={24} color={'white'} />
      )}
    </TouchableHighlight>
  );
}
