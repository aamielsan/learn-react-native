import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/store';
import App from './src/components/App';


const ProviderApp = () => {
  const store = configureStore();
  store.runSaga();

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent('albums', () => ProviderApp);
