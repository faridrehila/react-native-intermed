import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useQuery} from '@apollo/react-hooks';

import {closeSideBar} from '../../../redux/actions/sideBarActions';
import _queries from '../../../api/feeds/queries';
import _const from '../../../lib/const';

function SideBarMenu({navigation, isSideBarOpen, reduxCloseSideBar}) {
  const {loading, data} = useQuery(_queries.GET_ALL_SOURCES);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isSideBarOpen ? 'white' : 'transparent'},
      ]}>
      {data &&
        data.sources.map(source => (
          <TouchableHighlight
            key={source.id}
            onPress={() => {
              navigation.navigate('SourceScreen', {
                name: source.name,
                id: source.id,
              });
              reduxCloseSideBar();
            }}
            style={styles.sourceTile}>
            <Text style={styles.source}>{source.name}</Text>
          </TouchableHighlight>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sourceTile: {
    paddingLeft: 15,
    paddingTop: 9,
    paddingBottom: 9,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  source: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

SideBarMenu.propTypes = {
  navigation: PropTypes.object,
  isSideBarOpen: PropTypes.bool,
  reduxCloseSideBar: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    isSideBarOpen: state.sideBarReducer.isSideBarOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reduxCloseSideBar: () => dispatch(closeSideBar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarMenu);
