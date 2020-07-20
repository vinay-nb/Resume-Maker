import React, { Component } from 'react';
import './App.css';
import Home1 from './components/Home';
import Toolbar from './components/Toolbar';


class App extends Component {

  
  
  render() {
    return (
      <div>
        <Toolbar />        
        <Home1 />
      </div>  
    );
  }
}

export default App;
