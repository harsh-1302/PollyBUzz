import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/">Home </Link>
      <Link to="/login-signup">Login/SignUp</Link>
    </div>
  );
}
