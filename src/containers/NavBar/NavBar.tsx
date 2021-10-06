import React, { useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import './NavBar.css';
interface NavBarProps { }

export const NavBar: React.FC<NavBarProps> = () => {

const location = useLocation();
console.log(location);
const link=[
    {
        path:"/",
        label: "Home"
    }, 
    {
        path:"/work",
        label: "Work"
    },
    {
        path:"/about_me",
        label: "About me"
    },
    {
        path:"/contact",
        label: "Contact"
    },
];



const [links, setLinks] = useState(link);

    return (
        <div className="navBar_container">
            <a href="/">
            <div className="navBar__logo">
                <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-2e964.appspot.com/o/personal%20photos%2FRecurso%205.png?alt=media&token=a00e5450-65dd-433e-b9ec-71ef03c6d661" alt="" />
            </div>
            </a>
            <div className="navBar__options">
               {links.map(link=>
                 <Link to={link.path} className={`nav__option ${link.path===location.pathname ? "nav__option--active": ""}`}> {link.label}</Link>)}
            </div>


        </div>
    );
}