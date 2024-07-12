import React from 'react';
import '../css/NotFound.css';
import logo from '../Images/Image (1).png';

const NotFound = () => (
  <div className='div'>
    <div className="not-found">
      <h2>Accept our apologies!</h2>
      <div className='img'>
        <img src={logo} alt="logo" />
      </div>
      <div className="para">
        <p>The page you were looking for doesn't exist. You may have <br />
           mistyped the address or the page may have moved.</p>
        <div className='go'>
          <a href="/"> ➜ Go to Home Page</a>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
