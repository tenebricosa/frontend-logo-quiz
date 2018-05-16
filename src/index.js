import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { init } from './actions';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

import { FrontendLogoQuizApi } from "./frontendLogoQuizApi/FrontendLogoQuizApi";

import './index.css';
import App from './App';
import config from "./firebase/config";
import registerServiceWorker from './registerServiceWorker';

const isDev = process.env.NODE_ENV !== 'production';

const includeDevTools = () => {
    if (isDev && window && window.devToolsExtension) {
        return window.devToolsExtension();
    }

    return f => f;
};

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(sagaMiddleware),
        includeDevTools()
    )
);

sagaMiddleware.run(rootSaga);
store.dispatch(init());
firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
