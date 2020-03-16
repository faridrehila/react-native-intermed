import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import PropTypes from 'prop-types';
import {ThemeContext, DARK_THEME} from '../../../context/ThemeProvider';

export default function FeedScreen({
  navigation: {
    state: {
      params: {feedUrl},
    },
  },
}) {
  const {currentTheme} = useContext(ThemeContext);

  const jsCode =
    currentTheme === DARK_THEME
      ? `
    setTimeout(() => {      
      let body = document.getElementsByTagName('body');
      for (let e of body) { e.style.color = "white"; e.style.backgroundColor = "black"; }            
      document.body.style.backgroundColor = "black";

      let divs = document.getElementsByTagName('div');      
      for (let e of divs) { e.style.color = "white"; e.style.backgroundColor = "black"; }            

      let ps = document.getElementsByTagName('p');      
      for (let e of ps) { e.style.color = "white"; e.style.backgroundColor = "black"; }    
      
      let spans = document.getElementsByTagName('span');      
      for (let e of spans) { e.style.color = "white"; e.style.backgroundColor = "black"; }    

      document.f1.submit(); 
    }, 100);
`
      : ``;

  return (
    <View style={styles.container}>
      <WebView source={{uri: feedUrl}} injectedJavaScript={jsCode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

FeedScreen.propTypes = {
  navigation: PropTypes.object,
};
