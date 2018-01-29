import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const user = {
    firstName: 'Name',
    lastName: 'Surname'
};

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const element = (
    <h1>
    {getGreeting(user)}
</h1>
);
var element1;
function tick() {
     element1 = (
        <div>
            {element}
            <h2>
                It is{' '}
                {new Date().toLocaleTimeString()}.
            </h2>
        </div>
    );
}
setInterval(tick, 10);
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {element1}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. easy man
        </p>

      </div>
    );
  }
}

export default App;
