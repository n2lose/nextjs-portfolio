import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiFillMail } from 'react-icons/ai'
import { FaLinkedin, FaFacebook, FaGit } from 'react-icons/fa'
import {  useRouter } from 'next/router'

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false)
  const [shadow, setShadow] = useState<boolean>(false)
  const [navBg, setNavBg] = useState<string>('#ecf0f3')
  const [linkColor, setLinkColor] = useState<string>('#1f2937')
  
  const router = useRouter()
  useEffect(()=> {
    if( router.asPath === '/property' 
      || router.asPath === '/shopify' 
      || router.asPath === '/personalblog' 
      || router.asPath === '/todoApp' 
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  },  [router])

  const toggleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleshadow = () => {
      if (window.scrollY >= 100) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleshadow)
  }, [])

  return (
    <div
      style={{backgroundColor: `${navBg}`}}
      className={
        shadow
          ? 'fixed w-full h-28 shadow-xl z-[100]'
          : 'fixed w-full h-28 shadow z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <h2>Lam Nguyen</h2>
          <h5 className='uppercase text-center'>Javascript developer</h5>          
        </Link>
        <div>
          <ul className="hidden md:flex" style={{color: `${linkColor}`}}>
            <li>
              <Link className="ml-10 text-sm uppercase hover:border-black" href="/">Home</Link>
            </li>
            <li>
              <Link className="ml-10 text-sm uppercase hover:border-black" href="/#about">About</Link>
            </li>
            <li>
              <Link className="ml-10 text-sm uppercase hover:border-black" href="/#skills">Skills</Link>
            </li>
            <li>
              <Link className="ml-10 text-sm uppercase hover:border-black" href="/#projects">Projects</Link>
            </li>
            <li>
              <Link className="ml-10 text-sm uppercase hover:border-black" href="/#contact">Contact</Link>
            </li>
          </ul>
          <div className="md:hidden" onClick={toggleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[90%] sm:w-[70%] md:w-[55%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src={require('/public/assets/navLogo.png')}
                  alt=""
                  width={87}
                  height={35}
                />
              </Link>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={toggleNav}
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-400 py-4 ">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="divide-y divide-gray-200 uppercase">
              <li className="py-4" onClick={() => setNav(false)}>
                <Link href="/" className="block pr-2 py-2 text-sm text-gray-800 font-medium hover:bg-gray-200">
                  Home
                </Link>
              </li>
              <li className="py-4" onClick={() => setNav(false)}>
                <Link href="/#about" className="block pr-2 py-2 text-sm text-gray-800 font-medium hover:bg-gray-200">
                  About
                </Link>
              </li>
              <li className="py-4" onClick={() => setNav(false)}>
                <Link href="/#skills" className="block pr-2 py-2 text-sm text-gray-800 font-medium hover:bg-gray-200">
                  Skills
                </Link>
              </li>
              <li className="py-4" onClick={() => setNav(false)}>
                <Link href="/#projects" className="block pr-2 py-2 text-sm text-gray-800 font-medium hover:bg-gray-200">
                  Projects
                </Link>
              </li>
              <li className="py-4" onClick={() => setNav(false)}>
                <Link href="/#contact" className="block pr-2 py-2 text-sm text-gray-800 font-medium hover:bg-gray-200">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p3 cursor-pointer hover:text-[#0e76a8] hover:scale-125 ease-in duration-300">
                  <FaLinkedin size={24} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p3 cursor-pointer hover:text-[#0e76a8] hover:scale-125 ease-in duration-300">
                  <FaFacebook size={24} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p3 cursor-pointer hover:text-[#f1502f] hover:scale-125 ease-in duration-300">
                  <FaGit size={24} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p3 cursor-pointer hover:text-[#0e76a8] hover:scale-125 ease-in duration-300">
                  <AiFillMail size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
