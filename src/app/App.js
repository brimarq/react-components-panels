import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MainContent from '../components/main-content/main-content';
import Sidebar from '../components/sidebar/sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
          <div className="row">
            <MainContent />
            <Sidebar />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
