import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h3 className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </h3>
        <h2 className="py-4">What Can I Do</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={require('/public/assets/skills/html.png')}
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={require('/public/assets/skills/css.png')}
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={require('/public/assets/skills/javascript.png')}
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={require('/public/assets/skills/react.png')}
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={require('/public/assets/skills/tailwind.png')}
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={require('/public/assets/skills/firebase.png')}
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>FireBase</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={require('/public/assets/skills/github.png')}
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={require('/public/assets/skills/shopify.png')}
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Shopify</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={require('/public/assets/skills/nextjs.png')}
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NextJS</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={require('/public/assets/skills/node.png')}
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={require('/public/assets/skills/mongo.png')}
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Mongo</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
