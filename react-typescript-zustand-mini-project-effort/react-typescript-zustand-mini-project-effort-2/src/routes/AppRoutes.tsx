import React from "react";
import {  BrowserRouter as Router,Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Home from "../pages/Home";
import About from './../pages/About';
import Contact from './../pages/Contact';
import Service from './../pages/Service';

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
