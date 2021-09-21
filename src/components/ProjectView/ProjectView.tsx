import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import './ProjectView.css';

export const ProjectView = ()=>{
    const [data, setData] = useState([]),
        { id } = useParams<any>();

    const getData = async () => {
        try {
            const projectsRef = collection(db, 'projects');
    
            const filter = query(projectsRef, where('name', '==', id));
    
            const docSnapshot = await getDocs(filter);
            docSnapshot.forEach(doc => {
                setData(doc.data().img);
            });
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, [id]);

    return (
        <div className="projectView">
            {data.map((img:string) => 
                <img className="projectView__img" src={img} alt=""/>)}
        </div>
    );
}