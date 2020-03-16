import React from 'react';
import {View} from 'react-native';
import ThemeProvider, {ThemeContext} from '../context/ThemeProvider';

import AppContainer from './Navigators/routes';
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

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <View style={{flex: 1}}>
            <ThemeContext.Consumer>
              {({theme, currentTheme}) => (
                <AppContainer screenProps={{...theme, currentTheme}} />
              )}
            </ThemeContext.Consumer>
          </View>
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
}
