import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header" style={{ backgroundColor: 'black' }}>
            <h1 style={{ color: 'white', textAlign: 'center', padding: '15px 0' }}><span style={{ color: 'red' }}>ac@demy</span>~<small>where you can learn everything</small></h1>
            <nav>
                <a href="/CourseArea">CourseArea</a>
                <a href="/Contact">Contact</a>
                <a href="/Order-review">Order Review</a>
            </nav>
        </div>
    );
};

export default Header;