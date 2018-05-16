import { createAction } from 'redux-actions';
import * as types from './actionTypes';

export const init = createAction(types.INIT);

export const addUser = createAction(types.ADD_USER);
export const addUserBegin = createAction(types.ADD_USER_BEGIN);
export const addUserSuccess = createAction(types.ADD_USER_SUCCESS);

export const fetchCurrentUser = createAction(types.FETCH_CURRENT_USER);
export const fetchCurrentUserBegin = createAction(types.FETCH_CURRENT_USER_BEGIN);
export const fetchCurrentUserSuccess = createAction(types.FETCH_CURRENT_USER_SUCCESS);

export const fetchLeaderboard = createAction(types.FETCH_LEADERBOARD);
export const fetchLeaderboardBegin = createAction(types.FETCH_LEADERBOARD_BEGIN);
export const fetchLeaderboardError = createAction(types.FETCH_LEADERBOARD_ERROR);
export const fetchLeaderboardSuccess = createAction(types.FETCH_LEADERBOARD_SUCCESS);
