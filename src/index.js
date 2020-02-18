import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});
const store = createStore(
    appReducers, composeEnhancers()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
