import React, { Component } from 'react';
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="app__header">
                    <h1 className="app__logo">Frontend<br />Logo<br />Quiz</h1>
                </header>
                <div className="app__form">
                    <input type="text" placeholder="Имя Фамилия" className="app__input"/>
                    <input type="text" placeholder="Email" className="app__input" />
                    <button className="app__start-button">Поехали!</button>
                </div>
                <footer className="app__footer">
                    <button className="app__start-button--test">Играть за Славяна</button>
                </footer>
            </div>
        );
    }
}

export default App;
