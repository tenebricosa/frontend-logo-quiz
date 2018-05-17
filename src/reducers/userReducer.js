import { handleActions } from "redux-actions";
import * as types from "../actionTypes";

export default handleActions({
    [types.USER_NAME_CHANGE]: (state, { payload }) => ({
        ...state,
        ...payload
    })
}, {});
