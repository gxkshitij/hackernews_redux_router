import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

let store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

