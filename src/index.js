import React from 'react';
import 'prop-types';
import 'react-native-gesture-handler';
import '~/config/ReactotronConfig';
import {StatusBar} from 'react-native';

import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <Routes />
  </>
);

export default App;
