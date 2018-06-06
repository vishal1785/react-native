import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';

import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore';

const store = configureStore();

const RNReduxApp = () => (
    <Provider store={store}>
        <App />    
    </Provider>
);

AppRegistry.registerComponent('myapp', () => RNReduxApp);
