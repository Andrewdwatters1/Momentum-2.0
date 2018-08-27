import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import NavContainer from './NavContainer';
import Time from './Time';
import ToDo from './ToDo';
import LandingImage from './LandingImage';
import LandingQuote from './LandingQuote';
import Login from './Login';


class Landing extends Component {


  componentDidMount = () => {
    axios.get('/api/currentUser').then(res => {
      console.log(res);
    })
  }
  render() {
    return this.props.user
      ?
      (
        <div className="landing-main">
          <NavContainer/>
          <h1 className="font-large"> Welcome {this.props.user.name}</h1>
          <Time />
          <ToDo />
          <Link to="/quotes"><button> Get Inspired</button></Link>
          <LandingImage />
          <LandingQuote />
        </div>
      )
      :
      <div className="login-background">
      <Login/> 
      </div>
  }
}

const mapStateToProps = state => {
  return {
    user: state.userInfo
  }
}

export default connect(mapStateToProps)(Landing);