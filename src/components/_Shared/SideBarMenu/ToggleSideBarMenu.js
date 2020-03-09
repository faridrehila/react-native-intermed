import React from 'react';
import {TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {openSideBar, closeSideBar} from '../../../redux/actions/sideBarActions';
import _const from '../../../lib/const';
import ThemedIcon from '../ThemedComponents/ThemedIcon';

function ToggleSideBarMenu({
  isSideBarOpen,
  reduxOpenSideBar,
  reduxCloseSideBar,
}) {
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
        <ThemedIcon name="menu" color={_const.COLOR_MAINRED} size={32} />
      </View>
    </TouchableHighlight>
  );
}

ToggleSideBarMenu.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ToggleSideBarMenu);
