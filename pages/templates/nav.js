import next from "next";
import React from "react";

import { useState } from "react";

const Navbar = ({ fixed }) => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-4 py-5 	nav-bg mb-3 text-gray-700	">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#pablo"
            >
              {/* <Image src={companyLogo}
                    width={120}
                    height={80}
                    alt="logo-pic"
                    /> */}
              <h1>Growtech</h1>
            </a>


            <button
              className=" plant-bg	 cursor-pointer text-xl leading-none px-2 py-2 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"

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

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="/"
                >
                  <span className="ml-2">Our Products</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="/about_us"
                >
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="/services"
                >
                  <span className="ml-2">Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="/features"
                >
                  <span className="ml-2">Features</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="/contact"
                >
                  <span className="ml-2">Contact</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="/blogs"
                >
                  <span className="ml-2">Blogs</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 block lg:hidden"
                  href="/log_in"
                >
                  <span className="ml-2">Login</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75 block lg:hidden"
                  href="/register"
                >
                  <span className="ml-2">Signup</span>
                </a>
              </li>

            </ul>

          </div>
          <div className="flex">
            <button className="bg-green-100 mx-4 font-bold uppercase text-sm px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hidden hidden lg:block" type="button" href="/log_in"
            >
              Login

            </button>
            <button className="bg-green-100   font-bold uppercase text-sm px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  hidden lg:block" type="button" href="/register"
            >
              Sign-up
            </button>
          </div>
        </div>

      </nav>
    </>
  );
}

export default Navbar