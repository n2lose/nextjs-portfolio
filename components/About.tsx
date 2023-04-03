import React from 'react'

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h3 className='uppercase text-xl tracking-widest text-[#5651e5]'>About</h3>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>
            I am a front-end developer professional, responsible for the visual
            and interactive aspects of a website or application. My main work
            are on the client-side of web development, build the part of a
            website that users see and interact with, work closely with
            designers to ensure that the website looks and functions as
            intended. I also collaborate with back-end developers to ensure that
            the website is properly integrated with the server-side and that
            data is being transferred effectively.
          </p>
          <p className='py-2 text-gray-600'>
            My strongest professional areas are JavaScript development,
            front-end web development. I have extensive experience in building
            complex web applications and working with popular JavaScript
            frameworks such as React. I also have a deep understanding of HTML,
            CSS, and responsive design principles, which allows me to create
            good and intuitive user interfaces. In addition, I also have
            experience handle problem-solving and debugging skills, optimized
            performance website. Overall, I am confident in my ability to
            deliver high-quality web applications that meet the needs of
            end-users and businesses alike.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my projects</p>
        </div>
        <div className='w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center py-4 hover:scale-105 ease-in duration-500'>
            <img className='rounded-xl' src='https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80' alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
