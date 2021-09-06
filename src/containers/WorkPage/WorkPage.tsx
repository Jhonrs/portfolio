import React from 'react';
import { useState } from 'react';
import { ProjectCard } from '../../components/Project/ProjectCard';
import './WorkPage.css';
interface WorkPageProps { }
const TEST_DATA = [
    {
        name: "Tendi",
        descrip: "Develop",
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/362849109447343.5fd3baded27be.png"
    },
    {
        name: "BiblioBus",
        descrip: "UX/UI",
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/362849109447343.5fd3baded27be.png"
    },
    {
        name: "Bis",
        descrip: "UX/UI",
        url: "https://mir-s3-cdn-cf.behance.net/projects/404/6860e8115321773.Y3JvcCwxNzU0LDEzNzIsNzgsMA.jpg"
    }, {
        name: "Espacios",
        descrip: "UX/UI",
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/362849109447343.5fd3baded27be.png"
    }, {
        name: "Jejhomi",
        descrip: "Design",
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/362849109447343.5fd3baded27be.png"
    }, {
        name: "Marca Personal",
        descrip: "Design",
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/362849109447343.5fd3baded27be.png"
    },
];
export const WorkPage: React.FC<WorkPageProps> = () => {

    const [projects, setProjects] = useState(TEST_DATA);

    return (
        <div className="workPage__container">
            {projects.map(project =>
                <ProjectCard data={project} />

            )}
        </div>
    );
}