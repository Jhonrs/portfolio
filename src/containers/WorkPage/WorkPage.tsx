import React from 'react';
import { useState } from 'react';
import { ProjectCard } from '../../components/Project/ProjectCard';
import './WorkPage.css';
interface WorkPageProps { }
const TEST_DATA = [
    {
        name: "Tendi",
        descrip: "Develop",
        url: "https://firebasestorage.googleapis.com/v0/b/portafolio-2e964.appspot.com/o/Tendi1.jpg?alt=media&token=a2ba5bad-500b-4b0a-b778-feaeea6c8b81"
    },
    {
        name: "BiblioBus",
        descrip: "UX/UI",
        url: "https://firebasestorage.googleapis.com/v0/b/portafolio-2e964.appspot.com/o/Biblio1v2.jpg?alt=media&token=08f3813d-1c78-42fd-9448-1a26fa3fd45d"
    },
    {
        name: "Bis",
        descrip: "UX/UI",
        url: "https://firebasestorage.googleapis.com/v0/b/portafolio-2e964.appspot.com/o/Bis1v2.jpg?alt=media&token=9843e06f-16e1-401f-884e-901b9a445850"
    }, {
        name: "Espacios",
        descrip: "UX/UI",
        url: "https://firebasestorage.googleapis.com/v0/b/portafolio-2e964.appspot.com/o/Espaciosv2.jpg?alt=media&token=576918f2-ae39-4483-bb0b-2166b085c928"
    }, {
        name: "Jejhomi",
        descrip: "Design",
        url: "https://firebasestorage.googleapis.com/v0/b/portafolio-2e964.appspot.com/o/jejhomiv2.jpg?alt=media&token=2d281483-10b8-412b-9f05-c7b421578efe"
    }, {
        name: "Marca Personal",
        descrip: "Design",
        url: "https://firebasestorage.googleapis.com/v0/b/portafolio-2e964.appspot.com/o/Behance-marca-personal_Mesa-de-trabajo-1v2.jpg?alt=media&token=1f99caf7-68fa-4a1f-aeb3-9d725527b0a5"
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