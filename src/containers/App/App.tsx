import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, HashRouter as Router, Redirect } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { NavBar } from '../NavBar/NavBar';
import { Home } from '../Home/Home';
import { WorkPage } from '../WorkPage/WorkPage';
import { AboutPage } from '../AboutPage/AboutPage';
import { ParticlesBackground } from '../../components/ParticlesBackground/ParticlesBackground';
import particlesConfig from '../../utils/ParticlesConfig';


export const App = () => {
  return (
    <main><ParticlesBackground data={particlesConfig}></ParticlesBackground>
      <Router>
        <NavBar></NavBar>
        
        <Route path='/'>
          <Route path='/home' render={() => <Home/>}/>
          <Route path='/work' render={()=> <WorkPage/>}/>
          <Route path='/about_me'render={()=> <AboutPage/>}/>
          <Route path='/contact'></Route>
        </Route>
        <Footer></Footer>
      </Router>


    </main>
  );
};
