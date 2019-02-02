import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FrontPage from './components/FrontPage';
import tempComponent from './components/tempComp';
import Header from './components/Header';
import Footer from './components/Footer';

//import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={FrontPage} />
          <br/>
          <br/>
          <Route path="/temp/" exact component={tempComponent} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
