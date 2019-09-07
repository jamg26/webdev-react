import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Home extends Component {
  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <h1>Hello {profile.firstname}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Home);
