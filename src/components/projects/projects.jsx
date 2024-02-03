import React from 'react'
import Navbar from '../navbar/Navbar'
import './project.css'

function projects() {
  return (

    <>

      <div className="project-container w-full max-w-[85vw] borer  m-auto mt-[5rem]">
        <div className=" flex items-center justify-evenly flex-wrap flex-wrap my-12">
          <div className="project-img w-[35rem]  rounded-2xl overflow-hidden">
            <img src="src\assets\portfolio2.png" alt="" />
          </div>
          <div className="content w-[30rem] ">
            <h1 className='tracking-widest font-bold text-2xl mb-4'>old portfolio</h1>
            <p className='text-sm'>User Authentication, Create Post, Edit Post, Delete Post, Share Post, Add Post to or remove from Favorite, Theme Toggle. </p>
            <br />
            <p className='tracking-widest'><span className='tech-stack text-[#0EA4EC] font-extrabold'>Tech Stack : </span> html, css, javascript</p>
            <div className="btns flex ">
              <a href="https://techinalhamza.github.io/hamabb.github.io/" target="_blank"><div className="project-btn bg-[#0EA4EC] hover:bg-[#0ea6ec94]">preview</div> </a>
              <a href="https://github.com/techinalhamza/hamabb.github.io"><div className="project-btn bg-[#171E25] hover:bg-[#434446]">github</div></a>
            </div>

          </div>
        </div>
        <div className=" flex items-center justify-evenly flex-wrap flex-row-reverse my-12">
          <div className="project-img w-[35rem]  rounded-2xl overflow-hidden">
            <img src="src\assets\Vite + React - Google Chrome 17-Jan-24 11_44_10 AM.png" alt="" />
          </div>
          <div className="content w-[30rem] ">
            <h1 className='tracking-widest font-bold text-2xl mb-4'>Res Store</h1>
            <p className='text-sm'>User Authentication, Create Post, Edit Post, Delete Post, Share Post, Add Post to or remove from Favorite, Theme Toggle. </p>
            <br />
            <p className='tracking-widest'><span className='tech-stack text-[#0EA4EC] font-extrabold'>Tech Stack : </span> html, css, javascript</p>
            <div className="btns flex ">
              <a href="https://techinalhamza.github.io/redstore.github.io/" target="_blank"><div className="project-btn bg-[#0EA4EC] hover:bg-[#0ea6ec94]">preview</div></a>
              <div className="project-btn bg-[#171E25] hover:bg-[#434446]">github</div>
            </div>

          </div>
        </div>
        <div className=" flex items-center justify-evenly flex-wrap my-12">
          <div className="project-img w-[35rem]  rounded-2xl overflow-hidden">
            <img src="src\assets\organic_food.png" alt="" />
          </div>
          <div className="content w-[30rem] ">
            <h1 className='tracking-widest font-bold text-2xl mb-4'>grocery store</h1>
            <p className='text-sm'>User Authentication, Create Post, Edit Post, Delete Post, Share Post, Add Post to or remove from Favorite, Theme Toggle. </p>
            <br />
            <p className='tracking-widest'><span className='tech-stack text-[#0EA4EC] font-extrabold'>Tech Stack : </span> html, css, javascript</p>
            <div className="btns flex ">
              <a href="https://techinalhamza.github.io/organic-food.github.io/" target="_blank"><div className="project-btn bg-[#0EA4EC] hover:bg-[#0ea6ec94]">preview</div></a>
              <div className="project-btn bg-[#171E25] hover:bg-[#434446]">github</div>
            </div>

          </div>
        </div>
        <div className=" flex items-center flex-row-reverse justify-evenly flex-wrap my-12">
          <div className="project-img w-[35rem]  rounded-2xl overflow-hidden">
            <img src="src\assets\KFC _ KFC Deals _ KFC Menu - Google Chrome 17-Jan-24 11_13_06 AM.png" alt="" />
          </div>
          <div className="content w-[30rem] ">
            <h1 className='tracking-widest font-bold text-2xl mb-4'>kfc</h1>
            <p className='text-sm'>User Authentication, Create Post, Edit Post, Delete Post, Share Post, Add Post to or remove from Favorite, Theme Toggle. </p>
            <br />
            <p className='tracking-widest'><span className='tech-stack text-[#0EA4EC] font-extrabold'>Tech Stack : </span> html, css, javascript</p>
            <div className="btns flex ">
              <a href="https://techinalhamza.github.io/kfc.github.io/" target="_blank"><div className="project-btn bg-[#0EA4EC] hover:bg-[#0ea6ec94]">preview</div></a>
              <div className="project-btn bg-[#171E25] hover:bg-[#434446]">github</div>
            </div>

          </div>
        </div>
        <div className=" flex items-center justify-evenly flex-wrap my-12">
          <div className="project-img w-[35rem]  rounded-2xl overflow-hidden">
            <img src="src\assets\youtube (2).png" alt="" />
          </div>
          <div className="content w-[30rem] ">
            <h1 className='tracking-widest font-bold text-2xl mb-4'>Youtube clone</h1>
            <p className='text-sm'>User Authentication, Create Post, Edit Post, Delete Post, Share Post, Add Post to or remove from Favorite, Theme Toggle. </p>
            <br />
            <p className='tracking-widest'><span className='tech-stack text-[#0EA4EC] font-extrabold'>Tech Stack : </span> html, css, javascript</p>
            <div className="btns flex ">
              <a href="https://techinalhamza.github.io/qutube.github.io/" target="_blank"><div className="project-btn bg-[#0EA4EC] hover:bg-[#0ea6ec94]">preview</div></a>
              <div className="project-btn bg-[#171E25] hover:bg-[#434446]">github</div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default projects