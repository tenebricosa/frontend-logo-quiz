import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import LeaderboardRow from "./LeaderboardRow";
import orderBy from "lodash/orderBy";
import styles from "./Leaderboard.css";

class Leaderboard extends PureComponent {
    render() {
        const { users } = this.props;
        const userList = !isLoaded(users)
            ? 'Loading'
            : isEmpty(users)
                ? 'User list is empty'
                : orderBy(users, 'points', ['desc', 'asc']).map(
                    (user, i) => (
                        <LeaderboardRow key={user.email} name={user.name} points={user.points} rank={i + 1} />
                    )
                );

        return (
            <div className={styles.wrapper}>
                <div className={styles.table}>
                    <div className={styles["table-header"]}>
                        <div className={styles["table-item"]}>Rank</div>
                        <div className={styles["table-item"]}>Name</div>
                        <div className={styles["table-item"]}>Points</div>
                    </div>
                    {userList}
                </div>
                <Link to="/start" className={styles["new-start"]}>Новая игра</Link>
            </div>
        );
    }
}

Leaderboard.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.object
    )
};

export default compose(
    firebaseConnect([
        'users'
    ]),
    connect((state) => ({
        users: state.firebase.data.users,
    }))
)(Leaderboard)
