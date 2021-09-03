import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import './NavBar.css';
interface NavBarProps { }

export const NavBar: React.FC<NavBarProps> = () => {
    return (
        <div className="navBar_container">
            <div className="navBar__logo">

            </div>

            <div className="navBar__options">
                <Link to="/home"> <a href="" className="nav__option">Home</a></Link>
                <Link to="/work"> <a href="" className="nav__option">Work</a></Link>
                <Link to="/about_me"> <a href="" className="nav__option">About me</a></Link>
                <Link to="/contact"> <a href="" className="nav__option">Contact</a></Link>
            </div>
            
            
        </div>
    );
}