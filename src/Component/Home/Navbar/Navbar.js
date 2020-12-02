import React from 'react';
import './Navbar.css';
import logo from '../../../logos/Logo.png';

const Navbar = () => {
    return (
        <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
      <img style={{height:'75px'}} src={logo} alt="" />
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
              <a class="nav-link mr-3" href="/">Home</a>
        </li>
        <li class="nav-item">
           <a class="nav-link mr-3" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-3" href="/services">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-3" href="/event">Event</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-3" href="/contact">Contact</a>
        </li>
           <button className="brand-btn p-1">Login</button>
      </ul>
    </div>
  </nav>
   </div>
    );
};

export default Navbar;