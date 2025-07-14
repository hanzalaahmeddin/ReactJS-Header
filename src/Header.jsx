import React from 'react'
import { Link } from 'react-router'
import "./header.css"

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <img style={{ width: "150px" }} src="https://a2zcreatorz.com/wp-content/uploads/2024/03/a2zcreatorz-logo.png" alt="" srcset="" />
            </div>
            <div className='navigation'>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/login">Login</Link>
                <Link to="/college">College</Link>
                <Link to={"/users"} >Users</Link>
            </div>
        </div>
    )
}

export default Header