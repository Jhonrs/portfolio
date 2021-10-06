import React, { useEffect } from 'react';

import './App.css';
import {  Route, BrowserRouter as Router } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { NavBar } from '../NavBar/NavBar';
import { Home } from '../Home/Home';
import { WorkPage } from '../WorkPage/WorkPage';
import { AboutPage } from '../AboutPage/AboutPage';
import { ParticlesBackground } from '../../components/ParticlesBackground/ParticlesBackground';
import particlesConfig from '../../utils/ParticlesConfig';

import { ProjectView } from '../../components/ProjectView/ProjectView';
import { ContactPage } from '../ContactPage/ContactPage';

export const App = () => {


  
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
