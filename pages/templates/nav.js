import next from "next";
import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";
import companyLogo from "../../public/GrowTechFarms.svg"
import companyLogoOnly from "../../public/growtech_logo_only.svg"


const Navbar = ({ fixed }) => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-4	nav-bg text-gray-700	">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 ml-0 whitespace-nowrap uppercase hidden md:block"
              href="#pablo"
            >
              <Image src={companyLogo}
                    width={100}
                    height={60}
                    alt="logo-pic"
                    />
            </a>
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase md:hidden"
              href="#pablo"
            >
              <Image src={companyLogoOnly}
                    width={100}
                    height={60}
                    alt="logo-pic"
                    />
            </a>


            <button
              className=" plant-bg cursor-pointer text-xl leading-none px-2 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"

              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>

            </button>

          </div>
          <div
            className={
              "lg:flex flex-grow items-center px-5" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-center">

              <li className="cursor-pointer nav-item px-3 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
              <Link href="/">
                <a className="ml-2">Our Products</a>
              </Link>
              </li>
              <li className="cursor-pointer nav-item px-3 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
              <Link href="/about_us">
                <a className="ml-2">About</a>
              </Link>
              </li>  
              <li className="cursor-pointer nav-item px-3 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
              <Link  href="/services">
                <a className="ml-2">Services</a>
              </Link>
              </li>  
              <li className="cursor-pointer nav-item px-3 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
              <Link  href="/features">
                <a className="ml-2">Features</a>
              </Link>
              </li>  
              <li className="cursor-pointer nav-item px-3 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
              <Link href="/contact_us">
                <a className="ml-2">Contact us</a>
              </Link>
              </li>  
              <li className="cursor-pointer nav-item px-3 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
              <Link href="/blogs">
                <a className="ml-2">Blogs</a>
              </Link>
              </li>  
            </ul>

          </div>
          <div className="flex">
            <Link href="/log_in" passHref>
              <button className="bg-green-100  ml-40 mx-4 font-bold uppercase text-sm px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hidden hidden lg:block lg:text-xs" type="button">
                Login

              </button>
            </Link>
            <Link href="/register" passHref>
              <button className="bg-green-100  ml-10 font-bold uppercase text-sm px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  hidden lg:block lg:text-xs" type="button"     >
                Sign-up
              </button>
            </Link>
          </div>
        </div>

      </nav>
    </>
  );
}

export default Navbar