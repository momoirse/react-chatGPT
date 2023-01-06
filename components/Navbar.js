import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn, logout } from '../services/auth.service';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {isLoggedIn() ? (
          <li>
            <a href="#" onClick={logout}>
              Logout
            </a>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
