/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, Text} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DestinationScreen from './src/screens/DestinationScreen';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'dark-content'} />
      <HomeScreen />
    </Provider>
  );
};

export default App;
