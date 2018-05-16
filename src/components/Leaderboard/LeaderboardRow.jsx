import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import "./LeaderboardRow.css";

class LeaderboardRow extends PureComponent {
    render() {
        const { email, name } = this.props.user;

        return (
            <div className="wrapper">
                <div>{email}</div>
                <div>{name}</div>
            </div>
        );
    }
}

LeaderboardRow.propTypes = {
    email: PropTypes.string,
    name: PropTypes.string
};

export default LeaderboardRow;
