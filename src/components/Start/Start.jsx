import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { userNameChange } from "../../actions";

import styles from './Start.css';
import { firebaseConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";

class Start extends PureComponent {
    _handleUserNameChange = (evt) => {
        const { userNameChange } = this.props;

        userNameChange({ name: evt.target.value });
    };

    render() {
        const { name, email } = this.props;

        return (
            <div>
                <header className={styles.header}>
                    <h1 className={styles.logo}>Frontend<br />Logo<br />Quiz</h1>
                </header>
                <div className={styles.form}>
                    <input
                        type="text"
                        placeholder="Имя Фамилия"
                        className={styles.input}
                        onChange={this._handleUserNameChange}
                        value={name}
                    />
                    <input type="text" placeholder="Email" className={styles.input} />
                    <button className={styles["start-button"]}>Поехали!</button>
                </div>
                <footer className={styles.footer}>
                    <button className={styles["start-test-button"]}>Играть за Славяна</button>
                    <Link to="/">Рейтинг</Link>
                </footer>
            </div>
        );
    }
}

Start.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    userNameChange: PropTypes.func
};

export default compose(
    firebaseConnect(),
    connect((state) => ({
            name: state.currentUser.name,
            email: state.currentUser.email
        }),
        { userNameChange })
)(Start)
