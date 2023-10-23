/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore, {persistor} from './src/Redux/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
const store = configureStore();
const RNRedux = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
