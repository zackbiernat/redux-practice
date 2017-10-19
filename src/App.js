import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';
import ReduxCounter from './ReduxCounter.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myFirstReducer from './reducers';

let store = createStore(myFirstReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <Counter />
          <ReduxCounter/>

      </div>
    </Provider>
    );
  }
}

export default App;
