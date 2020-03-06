import React from 'react';
import {StyleSheet, TouchableHighlight, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {openSideBar, closeSideBar} from '../../../redux/actions/sideBarActions';
import _const from '../../../lib/const';

function HeaderScreen({
  title,
  right,
  isSideBarOpen,
  reduxOpenSideBar,
  reduxCloseSideBar,
}) {
  console.log('this.pops', reduxCloseSideBar, reduxOpenSideBar);
  const toggleSideBar = () => {
    if (isSideBarOpen) {
      closeSideBar();
    } else {
      openSideBar();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}></View>
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
  isSideBarOpen: PropTypes.bool,
  right: PropTypes.array,
  title: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    isSideBarOpen: state.sideBarReducer.isSideBarOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reduxOpenSideBar: () => dispatch(openSideBar()),
    reduxCloseSideBar: () => dispatch(closeSideBar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderScreen);
