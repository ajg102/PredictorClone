import React from 'react';
import NavigationContainer from './src/navigation/NavigationContainer';
import configureStore from './src/store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
};

export default App;
