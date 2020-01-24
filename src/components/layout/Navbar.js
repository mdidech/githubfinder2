import React from "react";

const Navbar = props => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fab fa-github' /> {props.title}
      </h1>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
