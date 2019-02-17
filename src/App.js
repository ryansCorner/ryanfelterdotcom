import React, { Component } from 'react';
import '.css/App.css';
import '.css/Navbar.css'
import NavBar from './components/navigation/NavBar'
import Layout from './components/layout/Layout'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Layout />

        </div>
      </React.Fragment>

    );
  }
}

export default App;
