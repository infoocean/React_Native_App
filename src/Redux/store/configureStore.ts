import {applyMiddleware, combineReducers} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setLoginUserReducer} from '../reducers/authReducer';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
const rootReducer = combineReducers({
  setLoginUserReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
