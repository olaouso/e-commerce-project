import React from "react";
import {Link} from "react-router-dom";

const Navbar = ({handleLogOut, showLogIn}) =>{
    return(
        <div className="navbar">
            <Link exact to="/">Home</Link>
            <Link to="/products">Products</Link>
            <button onClick={showLogIn}>Logın/SignUp</button>
            <button onClick={handleLogOut}>Log out</button>
            {/* <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}
        </div>
    )
}

export default Navbar;