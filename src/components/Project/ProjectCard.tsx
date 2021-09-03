import React from 'react';
import './ProjectCard.css';
interface ProjectCardProps{

    name: string;
    descrip: string;
    url: string;

}

export const ProjectCard: React.FC<ProjectCardProps> = ({name, descrip, url})=>{
return (
    <div className="project__container">
        <h2 className="project__title">{name}</h2>
        <h3 className="project__descrip">{descrip}</h3>
        <img src={url} alt="" className="project__img" />
    </div>
);
}