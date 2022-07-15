import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Remo</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CARLIST</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ABOUT</a>
          </li> 
          <Link to="/news1">
          <li class="nav-item">
            <a class="nav-link" href="#">NEW</a>
          </li></Link>
          <li class="nav-item">
            <a class="nav-link" href="contactus.html">CONTACT US</a>
          </li>
        </ul>
      </div>
     
        <div>
        <Link to="/log">
      <button class="button1">Login/Register</button>
      </Link>
      </div>
    </nav>
        );
    }
}