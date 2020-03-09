import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default function EmptyListScreen({isFetching}) {
  return (
    <View style={styles.container}>
      {isFetching ? (
        <ActivityIndicator animating size={'large'} />
      ) : (
        <Text style={styles.emptyText}>Aucun articles trouvés.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    justifyContent: 'center',
  },
  emptyText: {textAlign: 'center', fontSize: 18},
});

EmptyListScreen.propTypes = {
  isFetching: PropTypes.bool,
};
