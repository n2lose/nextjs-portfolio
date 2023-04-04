import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import propetyImg from '../public/assets/projects/property.jpg'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h3 className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </h3>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem title='Property Finder' backgroundImg={propetyImg} projectUrl='/property' technologies='React Redux' />
            <ProjectItem title='Shopify Ecommerce' backgroundImg={cryptoImg} projectUrl='/shopify' technologies='NextJS Typescript' />
            <ProjectItem title='Personal Blog' backgroundImg={netflixImg} projectUrl='/personalblog' technologies='ExpressJS React Redux Thunk' />
            <ProjectItem title='Todo List App' backgroundImg={twitchImg} projectUrl='/todoApp' technologies='React Context' />
          


        </div>
      </div>
    </div>
  )
}

export default Projects
