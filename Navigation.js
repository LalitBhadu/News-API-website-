/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
// import{a} from "react-router-dom";

export class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className=  "container-fluid">
    <a className="navbar-brand" href="/">G1INDIA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-5 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="/">HOME</a>
        </li>
         <li className="nav-item"><a className="nav-a" href="/">ABOUT</a></li>
         <li className="nav-item"> <a className="nav-a" href="/business">BUSINESS</a></li>
         <li className="nav-item"><a className="nav-a" href="/entertainment">ENTERTAINMENT</a></li>
         <li className="nav-item"><a className="nav-a" href="/general">GENERAL</a></li>
         <li className="nav-item"><a className="nav-a" href="/health">HEALTH</a></li>
         <li className="nav-item"><a className="nav-a" href="/science">SCIENCE</a></li>
         <li className="nav-item"><a className="nav-a" href="/sports">SPORTS</a></li>
         <li className="nav-item"><a className="nav-a" href="/technology">TECHNOLOGY</a></li>
        </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navigation