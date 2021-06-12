import React from 'react';
import AppNavigation from './navigation';
import {Provider} from 'react-redux';
import store from './store';
const Entrypoint = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default Entrypoint;
