import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {

    data: any;

}

export const ProjectCard: React.FC<ProjectCardProps> = ({ data: { name, descrip, url } }) => {
    return (
        <a className="project__container" href= {"/work/"+name}   >
        <div >
           
            <div className="project__wrapper">
                <h2 className="project__title">{name}</h2>
                <p className="project__descrip">{descrip}</p>
            </div>
            <img src={url} alt="" className="project__img" />
       
        </div>
        </a>
    );
}