import React from 'react';
//import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Premama from '../pages/Premama';
import Infantil from '../pages/Infantil';
import Familia from '../pages/Familia';
import Eventos from '../pages/Eventos';
import Otros from '../pages/Otros';

//import routes route & useLocation hook
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


const AnimRoutes = () => {
  const location = useLocation();  
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/premama' element={<Premama/>}/>
        <Route path='/infantil' element={<Infantil/>}/>
        <Route path='/familia' element={<Familia/>}/>
        <Route path='/eventos' element={<Eventos/>}/>
        <Route path='/otros' element={<Otros/>}/>
      </Routes>
      </AnimatePresence>
  );
};

export default AnimRoutes;
