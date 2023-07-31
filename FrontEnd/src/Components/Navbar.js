import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <nav className="navbar">
      <div className="brand"><a href="/">BookMyStay</a></div>
      <div className="actions">
        {!isAuthenticated && (
          <button className="button" onClick={handleLogin}>
            LogIn / SignUp
          </button>
        )}
        {isAuthenticated && (
          <>
            
            <div class="dropdown">
                <button className="dc"><Profile user={user} /></button>
                <div id="myDropdown" class="dropdown-content">
                    <button className="button" onClick={handleLogout}>Log Out</button>
                </div>
            </div>
                
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
