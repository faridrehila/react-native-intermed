import React, {useState, createContext} from 'react';
import PropTypes from 'prop-types';
import _const from '../lib/const';

export const ThemeContext = createContext();

const themes = {
  light: {
    foreground: '#000000',
    background: 'white',
    fontColor: 'black',
    statusBar: _const.COLOR_MAINRED,
    placeholderView: _const.COLOR_SHADE1,
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    fontColor: 'white',
    statusBar: 'black',
    placeholderView: 'darkgrey',
  },
};

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(themes.light);
  const [currentTheme, setCurrentTheme] = useState(LIGHT_THEME);

  function toggleTheme() {
    setTheme(currentTheme === LIGHT_THEME ? themes.dark : themes.light);
    setCurrentTheme(currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
  }

  const ctx = {
    theme,
    currentTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={{...ctx}}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ThemeProvider;
