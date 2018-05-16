import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import LeaderboardRow from "./LeaderboardRow";
import "./Leaderboard.css";

class Leaderboard extends PureComponent {
    render() {
        const { users } = this.props;
        const userList = !isLoaded(users)
            ? 'Loading'
            : isEmpty(users)
                ? 'User list is empty'
                : users.map(
                    (user) => (
                        <LeaderboardRow key={user.email} user={user}/>
                    )
                );

        return (
            <div className="wrapper">
                <div className="table">
                    <div className="table-header">
                        <div>Rank</div>
                        <div>Name</div>
                        <div>Points</div>
                    </div>
                    {userList}
                </div>
                <Link to="/start">Новая игра</Link>
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
