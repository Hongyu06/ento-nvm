import React from "react";
import  './navbar.css';
import { NavLink } from "react-router-dom";

function Navbar()
{
    return(
        <div className='navegation-menu'>
        <ol>
            <li><NavLink to="/index" activeclassname="active">index</NavLink></li>
            <li><NavLink to="/blog" activeclassname="active">Blogs</NavLink></li>
            <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
            <li><NavLink to="/home" activeclassname="active">Home</NavLink></li>
        </ol>
    </div>
    )
}
export default Navbar