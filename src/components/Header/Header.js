import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="head">
            <h1>Online Course!</h1>
            <nav className="navv">
                <a href="#">Courses</a>
                <a href="#">Categories</a>
                <a href="#">Profile</a>
                <a href="#">Log in</a>
            </nav>
        </div>
    );
};

export default Header;