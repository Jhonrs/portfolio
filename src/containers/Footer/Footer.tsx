import React from 'react';
import './Footer.css';
interface FooterProps{}

export const Footer: React.FC<FooterProps> = ()=>{
return  (
    <div className="footer__container">
        <a href="https://www.linkedin.com/in/jhon-reyes-s%C3%A1nchez-b5a136216/" target="_blank" className="footer__option">LinkedIn</a>
        <a href="https://github.com/jhonrs" target="_blank" className="footer__option">Github</a>
        <a href="https://www.behance.net/jhonrs812b738" target="_blank" className="footer__option">Behance</a>

    </div>
);
}