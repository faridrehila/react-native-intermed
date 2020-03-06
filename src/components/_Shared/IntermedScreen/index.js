import React from 'react';
import {View, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';
import {connect} from 'react-redux';

import _const from '../../../lib/const';
import _queries from '../../../api/feeds/queries';
import SideBarMenu from '../SideBarMenu';

function IntermedScreen({children, navigation, isSideBarOpen}) {
  const menu = <SideBarMenu navigation={navigation} />;

  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={_const.COLOR_MAINRED}
        barStyle="light-content"
      />
      <SideMenu menu={menu} isOpen={isSideBarOpen}>
        {children}
      </SideMenu>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    isSideBarOpen: state.sideBarReducer.isSideBarOpen,
  };
};

IntermedScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  isSideBarOpen: PropTypes.bool,
};

export default connect(mapStateToProps, null)(IntermedScreen);
