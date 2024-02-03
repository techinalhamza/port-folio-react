import React from 'react'
import Navbar from '../navbar/Navbar'
import './Skills.css'
import html from '../../assets/html-d8484e8b.png'
import css from '../../assets/css-f0ecea9c.png'
import js from '../../assets/js-ad87d233.png'
import react from '../../assets/react-js-icon-1d5b7448.png'
import tailwind from '../../assets/tailwind-b1493352.png'
import git from '../../assets/git-f810e4da.png'
import bootstrap from '../../assets/bootstrap-icon-css.png'
import jquery from '../../assets/jquery.jpeg'
import Skills__Card from './Skills__Card'

function Skills() {
  return (
    <>

      <div className="skills-container w-full max-w-[85vw]  m-auto ">
        <Skills__Card />
      </div>

    </>
  )
}

export default Skills