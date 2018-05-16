import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from "./LeaderboardRow.css";

class LeaderboardRow extends PureComponent {
    render() {
        const { name, points, rank } = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.item}>{rank}</div>
                <div className={styles.item}>{name}</div>
                <div className={styles.item}>{points}</div>
            </div>
        );
    }
}

LeaderboardRow.propTypes = {
    rank: PropTypes.number,
    name: PropTypes.string,
    points: PropTypes.number
};

export default LeaderboardRow;
