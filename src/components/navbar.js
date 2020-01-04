import React from 'react';
import SmallLogo from './images/small-green-dot-logo.png';

const Navbar = () => (
  <nav>
    <img className='logo' src={SmallLogo} alt='' />
    <div className='nav-links'>
      <a className='name-link' href='https://github.com/sarahtam718'>
        Sarah Tam
      </a>
      <p>full stack web developer</p>
      <div className='site-links'>
        <a href='https://github.com/sarahtam718'>Github</a>
        <a href='https://linkedin.com/in/sarah-tam'>LinkedIn</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
