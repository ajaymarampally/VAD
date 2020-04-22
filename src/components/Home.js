import React, { Component } from "react";
import { connect } from "react-redux";
import Maps from "./Maps"
import {Route , IndexRoute} from 'react-router';
import SensorValues from "./SensorValues";
import Head from "./Head"


class Home extends Component {

  render() {
    
    return (
      <div style={ {width: '1920', height: '1080'}}>
        <Head />
        <SensorValues />
        <Maps />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(Home);



