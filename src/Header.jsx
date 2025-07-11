import React from 'react'
import { Link } from 'react-router'

function Header() {
    return (
        <div className=''>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Header