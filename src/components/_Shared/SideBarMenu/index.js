import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useQuery} from '@apollo/react-hooks';

import {closeSideBar} from '../../../redux/actions/sideBarActions';
import _queries from '../../../api/feeds/queries';
import _const from '../../../lib/const';
import ThemedText from '../ThemedComponents/ThemedText';
import ThemedTouchable from '../ThemedComponents/ThemedTouchable';
import ThemedView from '../ThemedComponents/ThemedView';

function SideBarMenu({navigation, reduxCloseSideBar}) {
  const {loading, data} = useQuery(_queries.GET_ALL_SOURCES);

  if (loading) return <View />;

  return (
    <ThemedView style={styles.container}>
      {data &&
        data.sources.map(source => (
          <ThemedTouchable
            key={source.id}
            onPress={() => {
              navigation.navigate('SourceScreen', {
                name: source.name,
                id: source.id,
              });
              reduxCloseSideBar();
            }}
            style={styles.sourceTile}>
            <ThemedText style={styles.source}>{source.name}</ThemedText>
          </ThemedTouchable>
        ))}
    </ThemedView>
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
  reduxCloseSideBar: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    reduxCloseSideBar: () => dispatch(closeSideBar()),
  };
};

export default connect(null, mapDispatchToProps)(SideBarMenu);
