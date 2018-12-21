import React, { Component } from 'react';
import './App.css';
import InitNotification from './initNotification.js'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <InitNotification/>
        <h1>Notification Test</h1>
      </div>
    );
  }
}

export default App;
