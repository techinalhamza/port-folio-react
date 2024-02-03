import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Projects from './components/projects/projects.jsx'
import Contact from './components/contact/Contact.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Certificate from './components/certificate/Certificate.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='skills' element={<Skills />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
        <Route path='certificate' element={<Certificate />} />
      </Route>
    </Routes>
    <App />
  </BrowserRouter>,
)
