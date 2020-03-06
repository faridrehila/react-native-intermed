import React from 'react';
import {StyleSheet, TouchableHighlight, View, Text} from 'react-native';
import PropTypes from 'prop-types';

export default function HeaderScreen({title, right, left}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>{/* <Text>left menu</Text> */}</View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.containerRight}>
        {right &&
          right.map(cta => (
            <TouchableHighlight onPress={cta.onPress} key={cta.title}>
              <Text style={{color: cta.isEnabled ? 'red' : 'black'}}>
                {cta.title}
              </Text>
            </TouchableHighlight>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    maxHeight: 60,
    minHeight: 60,
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
  },
  title: {fontSize: 22, fontWeight: 'bold', textAlign: 'center'},
  containerLeft: {width: '30%'},
  containerRight: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

HeaderScreen.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.array,
  title: PropTypes.string,
};
