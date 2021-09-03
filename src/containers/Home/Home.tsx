import React from 'react';
import './Home.css';
interface HomeProps{}

export const Home: React.FC<HomeProps> = ()=>{
return (
    <div className="home__container">
        <div className="home__text">
            <h1 className="home__name">Jhon Reyes</h1>
            <p className="home__descrip">
            I’m an UX/UI designer and front-end developer with a 
            passion for challenges and learning new things.
            </p>
        </div>
        <img src="" alt="" className="home__img"/>
    </div>
);
}