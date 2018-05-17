import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import userReducer from "./reducers/userReducer";

export default combineReducers({
    firebase: firebaseReducer,
    currentUser: userReducer
});
