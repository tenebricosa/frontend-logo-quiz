import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import './Start.css';

class Start extends PureComponent {
    render() {
        return (
            <div>
                <header className="header">
                    <h1 className="logo">Frontend<br />Logo<br />Quiz</h1>
                </header>
                <div className="form">
                    <input type="text" placeholder="Имя Фамилия" className="input" />
                    <input type="text" placeholder="Email" className="input" />
                    <button className="start-button">Поехали!</button>
                </div>
                <footer className="app__footer">
                    <button className="start-button--test">Играть за Славяна</button>
                    <Link to="/">Рейтинг</Link>
                </footer>
            </div>
        );
    }
}

Start.propTypes = {};

export default Start;
