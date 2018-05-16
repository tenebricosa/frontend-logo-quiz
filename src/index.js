import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const isDev = process.env.NODE_ENV !== 'production';

const includeDevTools = () => {
    if (isDev && window && window.devToolsExtension) {
        return window.devToolsExtension();
    }

    return f => f;
};

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(includeDevTools())
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
