import { takeLatest } from "redux-saga";
import { fetchData, httpMethod } from "./utils/sagasHelper";

import { getLeaderboardUrl } from "./utils/UrlFactory";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";

function* fetchLeaderboard() {
    const actionsToWatch = [
        actionTypes.FETCH_LEADERBOARD,
        actionTypes.INIT
    ];

    yield* takeLatest(actionsToWatch, function*() {
        const url = getLeaderboardUrl();

        yield fetchData({
            url: url,
            onBegin: actions.fetchLeaderboardBegin,
            onSuccess: actions.fetchLeaderboardSuccess,
            onError: actions.fetchLeaderboardError,
            requestMethod: httpMethod.get
        });
    });
}

export function* rootSaga() {
    yield [
        fetchLeaderboard()
    ];
}
