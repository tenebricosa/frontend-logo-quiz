import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Leaderboard extends PureComponent {
    render() {
        return (
            <div>
                Leaderboard
                <Link to="/start">Новая игра</Link>
            </div>
        );
    }
}

Leaderboard.propTypes = {};

export default Leaderboard;
