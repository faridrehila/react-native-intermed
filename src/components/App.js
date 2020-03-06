import React from 'react';
import {View} from 'react-native';

import AppNavigator from './Navigators/AppContainer';
import config from '../config';

// Init store
import {Provider} from 'react-redux';
import {store} from '../redux/store/store';

// Init Apollo
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: config.endpointsHost,
});

// INIT Reactotron
import '../config/ReactotronConfig';

class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <View style={{flex: 1}}>
            <AppNavigator />
          </View>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default AppContainer;
