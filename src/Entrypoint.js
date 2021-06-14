import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigation from './navigation';
import {Provider} from 'react-redux';
import store from './store';
const Entrypoint = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#f2f2f2'} barStyle={'dark-content'} />
      <AppNavigation />
    </Provider>
  );
};

export default Entrypoint;
