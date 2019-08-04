import React from "react";
import { NavLink } from "react-router-dom";

const Navi = ()=> {
    
    return(
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo left">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink exact to="/" activeStyle={{color:"black"}} >Home</NavLink></li>
                    <li><NavLink to="/song" activeStyle={{color:"black"}}>Browse</NavLink></li>
                    <li><NavLink to="/profile" activeStyle={{color:"black"}}>Profile</NavLink></li>
                    <li><NavLink to="/login" activeStyle={{color:"black"}}>Login</NavLink></li>
                    <li><NavLink to="/register" activeStyle={{color:"black"}}>Register</NavLink></li>
                    <li><NavLink to="/achievements" activeStyle={{color:"black"}}>Achievements</NavLink></li>
                    <li><NavLink to="/logout" activeStyle={{color: "black"}}>Logout</NavLink></li>
                    <li><NavLink to="/any-route">404 page</NavLink></li>
                </ul>
            </div>
        </nav>
    );
    
}

export default Navi;
