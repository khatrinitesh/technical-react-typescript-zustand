import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/services',
    element:<Services/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
