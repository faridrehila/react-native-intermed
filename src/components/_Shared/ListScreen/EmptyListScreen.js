import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

export default function EmptyListScreen({isFetching}) {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {isFetching ? (
        <ActivityIndicator animating size={'large'} />
      ) : (
        <Text>Aucun articles trouvés.</Text>
      )}
    </View>
  );
}

EmptyListScreen.propTypes = {
  isFetching: PropTypes.bool,
};
