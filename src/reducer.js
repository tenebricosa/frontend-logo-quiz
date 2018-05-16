import { combineReducers } from 'redux';

import leaderboardReducer from './reducers/leaderboardReducer';

export default combineReducers({
    leaderboard: leaderboardReducer
});

