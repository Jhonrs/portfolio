import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import './NavBar.css';
interface NavBarProps { }

export const NavBar: React.FC<NavBarProps> = () => {
    return (
        <div className="navBar_container">
            <a href="/">
            <div className="navBar__logo">
                <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-2e964.appspot.com/o/personal%20photos%2FRecurso%205.png?alt=media&token=a00e5450-65dd-433e-b9ec-71ef03c6d661" alt="" />
            </div>
            </a>
            <div className="navBar__options">
                <Link to="/" className="nav__option"> Home</Link>
                <Link to="/work" className="nav__option"> Work</Link>
                <Link to="/about_me" className="nav__option"> About me</Link>
                <Link to="/contact" className="nav__option"> Contact</Link>
            </div>


        </div>
    );
}