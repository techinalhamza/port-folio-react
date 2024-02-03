import React from 'react'
import Navbar from '../navbar/Navbar'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t901gqq', 'template_rdi4thc', form.current, 'VIPi5dd6OnTH45TQV')
            .then((result) => {
                console.log(result.text);
                console.log("result.text");
            }, (error) => {
                console.log(error.text);
                console.log("error.text");
            });
    };
    const showMsg = () => {
        alert('done')
    }

    return (
        <>
            <div className="contact-form-container flex items-center justify-center w-[85vw]  m-auto">
                {/* <form action="https://formspree.io/f/xqkrpqno"
                    method="post" className='flex flex-col gap-5 w-[40vw] m-auto'>
                    <div className="name flex justify-between gap-5">
                        <input className='w-full border  border-gray-700 placeholder-[#70bbdd50]' type="text" name="" id="" placeholder='First Name' />
                        <input className='w-full border  border-gray-700 placeholder-[#70bbdd50]' type="text" name="" id="" placeholder='Last Name' />
                    </div>
                    <input type="email " placeholder='enter your email' className='placeholder-[#70bbdd50] border  border-gray-700' />
                    <textarea className='bg-[#232D38] border border-gray-700 outline-none hoer:outline-[#0EA4EC] p-[.7rem] rounded-lg placeholder-[#70bbdd50]' name="" id="" cols="30" rows="10" placeholder='message'></textarea>
                    <input type="submit" value='send message' className='contact-btn block  hover:bg-sky-500 border  border-gray-700' />
                    <button className='contact-btn block  hover:bg-sky-500 border  border-gray-700'>Send message</button> 


                    <input type='submit' className='contact-btn block'>Send message</input> 
                </form> */}
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5 w-[40vw] m-auto'>
                    <div className="name flex justify-between gap-5">
                        <input
                            type="text"
                            name="user_name"
                            required
                            className='w-full border 
                            border-gray-700
                            placeholder-[#70bbdd50]'
                            placeholder='First Name' />

                        <input
                            type="text"
                            name="use_name"
                            required
                            className='w-full border 
                            border-gray-700 
                            placeholder-[#70bbdd50]'
                            placeholder='last Name' />
                    </div>

                    <input
                        type="email"
                        name="user_email"
                        required
                        placeholder='enter your email'
                        className='placeholder-[#70bbdd50] border 
                        border-gray-700' />

                    <textarea
                        name="message"
                        className='bg-[#232D38] 
                         border border-gray-700 
                         outline-none 
                         hoer:outline-[#0EA4EC] 
                         p-[.7rem] rounded-lg 
                         placeholder-[#70bbdd50]'
                        cols="30" rows="10"
                        placeholder='message' />

                    <input
                        type="submit"
                        onClick={showMsg}
                        value='send message'
                        className='contact-btn block 
                       hover:bg-sky-500 border 
                        border-gray-700' />
                </form>
            </div>
        </>
    )
}

export default Contact


