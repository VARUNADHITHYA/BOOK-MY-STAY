import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header1.css';

const Header1 = () => {
  return (
    <div className="fill1">
      <div id="name1">BookMyStay</div>
      <ul className="">
        <li>
          <Link to='/Login'>
            <button id="Login1"><FontAwesomeIcon icon={faRightToBracket}/><p>Login</p></button> 
          </Link>
        </li>
        <li>
          <Link to='/Register'>
            <button id="Signup1"><FontAwesomeIcon icon={faUserPlus}/>Sign Up</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header1;
