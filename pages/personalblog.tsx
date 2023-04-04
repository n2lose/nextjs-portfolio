import Image from 'next/image'
import React from 'react'
import personalBlogImage from '../public/assets/projects/netflix.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const PesonalBlog = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-20" />
        <Image
          className="absolute z-10 object-cover"
          fill
          src={personalBlogImage}
          alt=""
        />
        <div className="absolute max-w-[1240px] w-full top-[70%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-30 text-white p-2">
          <h2 className="py-2">Pesonal Blog Name</h2>
          <h3>ReactJS / Twailwind / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h3>Project</h3>
          <h5>Overview</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <h3 className="text-center font-bold pb-2">Technologies</h3>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Zillow API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'><p className='underline cursor-pointer'>Back</p></Link>
      </div>
    </div>
  )
}

export default PesonalBlog
