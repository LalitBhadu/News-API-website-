/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navigation from './components/Navigation';
import News from './components/News';
// import News from './components/News key=" "';
// import{
//   BrowserRouter as router,
//   Switch,
//   Route,
// } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
      <News />
        {/* <router>
           <Switch>
            <Route  exact path="/ABOUT">
              <News key="ABOUT" pageSize={7} country="in" category="ABOUT" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={7} country="in" category="entertainment" />
            </Route>
            <Route exact path="/GENERAL">
              <News key="GENERAL" pageSize={7} country="in" category="GENERAL" />
            </Route>
            <Route exact path="/HEALTH">
              <News key="HEALTH" pageSize={7} country="in" category="HEALTH" />
            </Route>
            <Route exact path="/SCIENCE">
              <News key="SCIENCE" pageSize={7} country="in" category="SCIENCE" />
            </Route>
            <Route exact path="/SPORTS">
              <News key="SPORTS" pageSize={7} country="in" category="SPORTS" />
            </Route>
            <Route exact path="/TECHNOLOGY">
              <News key="TECHNOLOGY" pageSize={7} country="in" category="TECHNOLOGY" />
            </Route>
          </Switch>
        </router> */}
      </div>
    );
  }
}

 