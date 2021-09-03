import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, HashRouter as Router, Redirect } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { NavBar } from '../NavBar/NavBar';
import { Home } from '../Home/Home';


export const App = () => {
  return (
    <main>
      <Router>
        <NavBar></NavBar>
        <Route path='/'>
          <Route path='/home' render={() => <Home></Home>} />
          <Route path='/work'></Route>
          <Route path='/about_me'></Route>
          <Route path='/contact'></Route>
        </Route>
        <Footer></Footer>
      </Router>


    </main>
  );
};