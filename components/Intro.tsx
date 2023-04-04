import React from 'react'
import { AiFillMail } from 'react-icons/ai'
import { FaLinkedin, FaFacebook, FaGit,  } from 'react-icons/fa'

const Intro: React.FC = () => {
  return (
    <div id='home' className="w-full h-screen text-center">
      <div className="max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h3 className="uppercase text-sm tracking-widest text-gray-600">
            let's build something together
          </h3>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Lam Nguyen</span>
          </h1>
          <h2 className="py-2 text-gray-700">A Front-End Web developer</h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Hi, I'm Lam Nguyen, a front-end developer with 10 years of
            experience in developing responsive and user-friendly websites as
            wel as web applications. I specialize in HTML, CSS, and JavaScript,
            and also have experience work with front-end frameworks React,
            NodeJS, ExpressJS. In my current role, I have collaborated with
            customers and back-end developers to create seamless user
            experiences and efficient code. I am passionate about staying
            up-to-date with the latest web technologies and am always looking
            for ways to improve my skills
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className='rounded-full shadow-lg shadow-gray-400 p3 cursor-pointer hover:text-[#0e76a8] hover:scale-125 ease-in duration-300'>
              <FaLinkedin size={24} />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p3 cursor-pointer hover:text-[#0e76a8] hover:scale-125 ease-in duration-300'>
              <FaFacebook size={24} />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p3 cursor-pointer hover:text-[#f1502f] hover:scale-125 ease-in duration-300'>
              <FaGit size={24} />
            </div>              
            <div className='rounded-full shadow-lg shadow-gray-400 p3 cursor-pointer hover:text-[#0e76a8] hover:scale-125 ease-in duration-300'>
              <AiFillMail size={24} />                
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
