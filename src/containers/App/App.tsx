import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { NavBar } from '../NavBar/NavBar';
import { Home } from '../Home/Home';
import { WorkPage } from '../WorkPage/WorkPage';
import { AboutPage } from '../AboutPage/AboutPage';
import { ParticlesBackground } from '../../components/ParticlesBackground/ParticlesBackground';
import particlesConfig from '../../utils/ParticlesConfig';
import { db } from '../../utils/firebase.js';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { ProjectView } from '../../components/ProjectView/ProjectView';
import { ContactPage } from '../ContactPage/ContactPage';

export const App = () => {

  /* useEffect(() => {
    async function printSnapshot () {
      try {
        const col = collection(db, 'projects');
        const docSnaps = await getDocs(col);
        docSnaps.forEach(snap => console.log(snap.data()));

        const docRef = doc(db, 'projects', 'hx57TPnp0U4NO5uZVQfZ');
        const docSnap = await getDoc(docRef);
        if(!docSnap.exists()) return console.log('hx57TPnp0U4NO5uZVQfZ no existe');
        console.log(docSnap.data());        
      } catch (error) {
        console.error(error);
      }
    }
    printSnapshot();
  }, []); */
  
  return (
    <main><ParticlesBackground data={particlesConfig}></ParticlesBackground>
      <Router>
        <NavBar></NavBar>
        <Route path='/' exact render={() => <Home/>} />
        <Route path='/work' exact render={()=> <WorkPage/>}/>
        <Route path='/work/:id' render={()=> <ProjectView/>}/>
        <Route path='/about_me' render={()=> <AboutPage/>}/>
        <Route path='/contact' render={()=><ContactPage/>}/>

        <Footer></Footer>
      </Router>
    </main>
  );
};
