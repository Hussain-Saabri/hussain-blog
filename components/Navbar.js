// src/components/Navbar.js

import Image from 'next/image';
import Link from "next/link";
import ScrollToTop from './scrollToTop';

const Navbar = ({ scrollToContact,navbaref}) => {
  return (
    
    <header ref={navbaref}  className="bg-slate-800 ">
      <div className="mx-auto text-yellow-400 flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <a>
            <Image  src="/images/logo.svg" alt="logo" width={50} height={50} />
          </a>
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <Link href="/Home">
                <a className="text-bold transition hover:text-gray-500/75">Home</a>
              </Link>
              <Link href="/a">
                <a className="text-bold transition hover:text-gray-500/75">Explore</a>
              </Link>
              <Link href="/a">
                <a className="text-bold transition hover:text-gray-500/75">Projects</a>
              </Link>
              <Link href="/About">
                <a className="text-bold transition hover:text-gray-500/75">About Us</a>
              </Link>
              <a onClick={scrollToContact} className="text-bold transition hover:text-gray-500/75 cursor-pointer">
                Contact Us
              </a>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a className="block rounded-md bg-pink-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700" href="#">
                Login
              </a>
              <a className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block" href="#">
                Register
              </a>
            </div>
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </header>
    
  );
};

export default Navbar;
