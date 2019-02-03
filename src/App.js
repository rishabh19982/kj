import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from './components/FrontPage';
import tempComponent from './components/tempComp';
import Header from './components/Header';
import Footer from './components/Footer';

import SearchProjects from './components/searchProjects';
import ProjectInfo from './components/ProjectInfo';
import EventInfo from './components/EventInfo';

import LoginPage from './components/LoginPage';

import SellerPreviousTransactions from './components/SellerPreviousTransactions';
import BuyerTransactions from './components/BuyerTransactions';

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
            <Route path="/projects/" exact component={SearchProjects} />
            <Route path="/projects/:id" exact component={ProjectInfo} />
            <Route path="/login/"  exact component={LoginPage} />
            <Route path="/sellerTable/" exact component={SellerPreviousTransactions} />
            <Route path="/buyerTable/" exact component={BuyerTransactions} />
            <Route path="/events/:id/" exact component={EventInfo} />

            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
