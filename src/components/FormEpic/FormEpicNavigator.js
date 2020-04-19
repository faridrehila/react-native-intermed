import React from 'react';
import {createStackNavigator} from 'react-navigation';

import _const from '../../lib/const';
import ThemedHeaderTile from '../_Shared/ThemedComponents/ThemedHeaderTile';
import FormScreen from './FormScreen';

const FormNavigator = createStackNavigator(
  {
    FormScreen: {
      screen: FormScreen,
      navigationOptions: ({screenProps}) => ({
        headerTitle: <ThemedHeaderTile title={'Intermed Avis'} />,
        tabBarVisible: false,
        headerStyle: {
          backgroundColor: screenProps.background,
        },
      }),
      path: '',
    },
  },
  {
    initialRouteName: 'FormScreen',
    headerMode: 'screen',
  },
);

export default FormNavigator;
