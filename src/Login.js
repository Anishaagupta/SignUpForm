import React, {Component} from "react";
import {Link} from "react-router-dom";
import Register from "./register/Register";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      email: "",
      password: "",
      setup: false,
    };
  }

  loginSubmit = e => {
    let user;
    const {email, password} = this.state;
    user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user);
    if (user && user.email !== null) {
      if (email === user.email && password === user.password) {
        this.setState({
          loggedIn: true,
        });
      } else {
        this.setState({
          loggedIn: false,
        });
      }
    }
  };
  userName = () => {
    let user;
    const {email} = this.state;
    user = JSON.parse(localStorage.getItem("user"));
    if (this.state.loggedIn === true) {
      this.props.userName = user.email;
    }
  };
  render() {
    const {loggedIn} = this.state;
    return (
      <div className="form">
        <span>Login</span>
        <br />
        <br />
        <form>
          <label>
            <input
              type="email"
              className="email-input"
              placeholder="Email"
              onChange={event => this.setState({email: event.target.value})}
            />
          </label>
          <label>
            <input
              type="password"
              className="password-input"
              placeholder="Password"
              onChange={event => this.setState({password: event.target.value})}
            />
          </label>
          <Link className="submit-btn" onClick={this.loginSubmit}>
            Login
          </Link>
          <br />
          {loggedIn ? <Link to="/profile">Go To Profile</Link> : null}
        </form>
      </div>
    );
  }
}

export default Login;
