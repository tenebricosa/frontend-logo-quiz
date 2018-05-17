import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { init } from './actions';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

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

firebase.initializeApp(config);

const initialState = {
    currentUser: {
        name: "",
        email: ""
    }
};

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, {userProfile: 'users',}),
    includeDevTools()
)(createStore);

const store = createStoreWithFirebase(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
