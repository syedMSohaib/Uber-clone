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

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <DestinationScreen />
    </>
  );
};

export default App;
