import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from './components/FrontPage';
import tempComponent from './components/tempComp';
import Header from './components/Header';
import Footer from './components/Footer';

import SearchProjects from './components/searchProjects';
import ProjectInfo from './components/ProjectInfo';
import LoginPage from './components/LoginPage';

//import './App.css';
class NoMatch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h1>Error: 404</h1>
        <p>Request not found: {this.props.location.pathname}</p>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <br/>
          <br/>
          <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/temp/" exact component={tempComponent} />
            <Route path="/projects/search" exact component={SearchProjects} />
            <Route path="/projects/:id" exact component={ProjectInfo} />
            <Route path="/login" exact component={LoginPage} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
