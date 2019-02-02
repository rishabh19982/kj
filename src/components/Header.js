import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style={{backgroundColor: 'black'}}>
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="/">Start Bootstrap</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/temp">Temp</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      );
  }
}

export default Header;