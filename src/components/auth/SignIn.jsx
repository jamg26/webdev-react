import React, { Component } from "react";
import { connect } from "react-redux";
import { SignInAction } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "null",
    password: "null"
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ [e.target.id]: e.target.value });
    this.props.SignInAction(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm"></div>
            <div className="col-sm">
              <form onSubmit={this.handleSubmit} id="loginForm">
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                  />
                  {authError ? (
                    <small className="text-danger">{authError}</small>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary" id="loginBtn">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    SignInAction: creds => dispatch(SignInAction(creds))
  };
};

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(SignIn);
