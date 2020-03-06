import React from 'react';
import {View, StatusBar} from 'react-native';

import _const from '../../../lib/const';
import _queries from '../../../api/feeds/queries';

export default ({children}) => (
  <View style={{flex: 1}}>
    <StatusBar
      backgroundColor={_const.COLOR_MAINRED}
      barStyle="light-content"
    />

    {children}
  </View>
);
