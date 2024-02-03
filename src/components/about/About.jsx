import React from 'react'
import './About.css'
import Navbar from '../navbar/Navbar';
import Card from './Card';
import resume from "../../assets/resume.jpg";
import { FaArrowAltCircleDown } from "react-icons/fa";


const About = () => {
    return (
        <>

            <div className="about-container flex items-center justify-center w-full ">
                <div className="about-img-container flex items-center justify-center ">
                    <div className="about-img"></div>
                </div>
                <div className="about-content  flex justify-center items-center flex-col  ">
                    <div className="about-card  w-[80%]">
                        <Card />
                    </div>
                    <div className="about-text w-[80%] mt-[2rem] text-base tracking-widest">
                        <p>I am a fast learner with a strong passion for front-end development and a focus on creating efficient and user-friendly web applications. I am seeking an opportunity to work in a collaborative environment where I can further enhance my skills and contribute to meaningful projects.<br /><br />
                            I am open to internships, entry-level positions, or any opportunity that allows me to grow as a React developer. I am a dedicated team player, eager to learn from experienced professionals and contribute to the success of the organization.<br /><br />
                            If you have an opportunity that aligns with my skills and passion, I would be thrilled to discuss how I can contribute to your team. Thank you for considering my profile.

                        </p>
                    </div>
                    <div className="abt-btn flex  justify-start   w-full">
                        <a href={resume} download="Resume" className='text-left block ml-28'>
                            <button className='about-btn  bg-[#242D3A] border border-gray-700 '>download resume &nbsp;  <FaArrowAltCircleDown className='text] ' />
                            </button>
                        </a>
                    </div>
                </div>
            </div >
        </>
    )
}

export default About