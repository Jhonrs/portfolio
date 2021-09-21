import React from 'react';
import './AboutPage.css';
interface AboutPageProps { }

export const AboutPage: React.FC<AboutPageProps> = () => {
    return (
        <div className="aboutPage__container">
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-2e964.appspot.com/o/personal%20photos%2Faboutme.jpg?alt=media&token=30801ef3-e246-4f50-bb9c-65f7e5fd43fa" alt="" className="aboutPage__img" />
            <div className="aboutPage__wrapper">
                <h2 className="aboutPage__title">About me</h2>
                <div className="aboutPage__descrip">I am a student of Interactive Media Design at Icesi University, born in the city of Cali, I like to learn and enrich myself with knowledge, I like programming, UX and UI. <br /><br />

                    I started studying this career because of my passion for video games, since childhood, these have caught my attention and thanks to this I could see and understand in a better way the process of creating a video game, this was my focus initially, but throughout the career this muto a little and focused more on web development.<br /><br />

                    On the other hand, as for my programming skills I have participated in various activities related to this, during some courses at the University to part of the group of programmers, I have knowledge in JavaScript, Java and C-sharp. I have used Unity, and the React framework, currently I want and I see an opportunity to learn React-Native.<br /><br />

                    I am currently looking for a company to do my internship so I can complete my academic knowledge and experience projects and job responsibilities.</div>
            </div>
        </div>
    );
}