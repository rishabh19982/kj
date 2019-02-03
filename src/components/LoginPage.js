import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const loginFormStyle={
  width: '95vw',
  maxWidth: '400px',
  marginTop: '10vh',
  maxHeight: '70vh',
  background: 'rgba(255,255,255,0.2)'
}
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', pwd: ''};
  }


  handleEmailChange(e) {
    this.setState(Object.assign({}, this.state, {email: e.target.value}));
  }

  handlePasswordChange(e) {
    console.log(e);
    this.setState(Object.assign({}, this.state, {pwd: e.target.value}));
  }

  handleFormSubmit() {
    // login request
  }
  render() {
    return (
      <header className="masthead text-center text-white d-flex" style={{minHeight:'100vh'}}>
        <div className="mx-auto rounded" style={loginFormStyle}>
          <h3 style={{marginTop:'5vh', color: '#ccc'}}>LOGIN</h3>
          <img src="/vendor/fontawesome-free/svgs/regular/user.svg"  className=" mx-auto mt-4" alt="User icon" width='20%' style={{filter:"invert(80%)"}}></img>
          <div className="container">
            <div className="form-group mt-5">
              <input type="text" placeholder="Email Id" id="email" className="form-control" onChange={this.handleEmailChange.bind(this)}></input>
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" id="password" className="form-control" onChange={this.handlePasswordChange.bind(this)}></input>
            </div>
          </div>
          <input type="button" value="Login" className="mt-2 btn btn-primary rounded" onClick={this.handleFormSubmit.bind(this)}/>
          <br/>
          <br/>
          Don't have an account? <Link to="#">SignIn</Link>
        </div>
      </header>
    );
  }
}

export default LoginPage;