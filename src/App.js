import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Leaderboard from "./components/Leaderboard";
import Start from "./components/Start";
import Game from "./components/Game";
import styles from "./App.css";

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <Route path='/' exact component={Leaderboard} />
                <Route path='/start' exact component={Start} />
                <Route path='/game' exact component={Game} />
            </div>
        );
    }
}

export default App;
