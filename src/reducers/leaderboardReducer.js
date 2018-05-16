import { handleActions } from "redux-actions";
import * as types from "../actionTypes";

export default handleActions({
    [types.FETCH_LEADERBOARD_SUCCESS]: (state, { payload }) => ({
        ...state,
        ...payload
    })
}, {});
