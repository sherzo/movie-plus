import React from 'react';
import Home from './src/Screens/Home';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

const App = () => {
  return <Home />;
};

export default App;
