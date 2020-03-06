import React from 'react';
import {TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import {openSideBar, closeSideBar} from '../../../redux/actions/sideBarActions';
import _const from '../../../lib/const';

function HeaderLeft({isSideBarOpen, reduxOpenSideBar, reduxCloseSideBar}) {
  const toggleSideBar = () => {
    if (isSideBarOpen) {
      reduxCloseSideBar();
    } else {
      reduxOpenSideBar();
    }
  };

  return (
    <TouchableHighlight
      onPress={toggleSideBar}
      style={{marginLeft: 10}}
      underlayColor={'lightgrey'}>
      <View>
        <Icon name="menu" color={_const.COLOR_MAINRED} size={32} />
      </View>
    </TouchableHighlight>
  );
}

HeaderLeft.propTypes = {
  isSideBarOpen: PropTypes.bool,
  reduxCloseSideBar: PropTypes.func,
  reduxOpenSideBar: PropTypes.func,
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLeft);
