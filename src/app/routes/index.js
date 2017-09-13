import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home";

import './routes.css';

// TODO: create header and footer
import Header from '../components/Header'
import SocialFooter from '../components/SocialFooter'
// import Footer from '../components/Footer'


export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div className="site-container">
          <Route path="/:site?" component={Header} />
          <div className="routes-container">
            <Switch>
              <Redirect exact from='/' to='/home' />
              <Redirect exact from='/about' to='/home/about' />
              <Route path="/home" component={Home} />
            </Switch>
          </div>
          <Route path="/:site?" component={SocialFooter} />          
          {/* <Route path='/:site?' component={Footer} /> */}
        </div>
      </Router>
    )
  }
}
