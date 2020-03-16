import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import _const from '../../../lib/const';

class SplashScreen extends React.PureComponent {
  componentDidMount() {
    // TODO reset nav
    const self = this;
    setTimeout(function() {
      self.props.navigation.navigate('App');
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../../public/images/splash.jpg')}
          style={{width: 220, height: 260}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
