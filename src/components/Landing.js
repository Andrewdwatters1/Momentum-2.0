import React, { Component } from 'react';
import { connect } from 'react-redux';

import Time from './Time';
import ToDo from './ToDo';
import QuotesContainer from './QuotesContainer';
import LandingImage from './LandingImage';
import LandingQuote from './LandingQuote';

class Landing extends Component {

  login = () => {
    let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
    let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
    let scope = encodeURIComponent(`openid profile email`)
    let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
    let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
    window.location = location
  }

  render() {
    console.log(this.props)
    return this.props.user ?
      (
        <div className="landing-main">
          <h1>Good morning/afternoon/evening {this.props.user.name}</h1>
          <Time />
          <ToDo />
          <QuotesContainer />
          <LandingImage />
          <LandingQuote />
        </div>
      )
      :
      <button onClick={this.login}>Please Login</button>
  }
}

const mapStateToProps = state => {
  return {
    user: state.userInfo
  }
}

export default connect(mapStateToProps)(Landing);