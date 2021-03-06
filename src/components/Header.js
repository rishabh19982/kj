import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light fixed-top" id="mainNav" style={{backgroundColor: '#222'}}>
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="/">Upsurge</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/events/">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/orders">Orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/internships/">Internships</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      );
  }
}

export default Header;