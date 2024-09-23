import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '../pages/Home';
import About from './../pages/About';
import Contact from './../pages/Contact';

const AppRoutes:React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
