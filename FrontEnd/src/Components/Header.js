import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="fill">
      <div id="name"></div>
      <ul>
        <li>
          <Link to='/Login'>
            <button id="Login"><FontAwesomeIcon icon={faRightToBracket}/><p>Login</p></button> 
          </Link>
        </li>
        <li>
          <Link to='/Register'>
            <button id="Signup"><FontAwesomeIcon icon={faUserPlus}/>Sign Up</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
