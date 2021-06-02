import React from 'react';
import {NavLink} from "react-router-dom";
function Signedoutlinks() {
    return(<>
        <li className="nav-item">  <NavLink exact activeClassName="active_class"  className="nav-link"   to="/signup">Sign Up</NavLink></li>
        <li className="nav-item">  <NavLink exact activeClassName="active_class"  className="nav-link"  to="/login">Log In</NavLink></li>
    </>);
  }

export default Signedoutlinks;
