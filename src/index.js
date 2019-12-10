import React from 'react';
import 'prop-types';
import 'react-native-gesture-handler';
import '~/config/ReactotronConfig';
import {Provider} from 'react-redux';
import store from '~/store';
import {StatusBar} from 'react-native';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <Routes />
  </Provider>
);

export default App;
