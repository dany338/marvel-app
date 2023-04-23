import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { marvelReducer } from '../reducer/marvelReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['marvel']
}

const reducers = combineReducers({
  marvel: marvelReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer, // persistedReducer, reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);