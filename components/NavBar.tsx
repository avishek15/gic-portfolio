'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const NavLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: 'https://guardianinfoconsultant.in/contact',
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-black-200 bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between px-2 mx-auto bg-black">
        <Link href={'/'} className="text-5xl text-white">
          <Image
            src="/images/GIC-Logo.jpg"
            alt="Home"
            width={125}
            height={125}
          />
        </Link>
        <div className="mobile-menu block md:hidden bg-opacity-100">
          {navbarOpen ? (
            <button
              onClick={() => {
                setNavbarOpen(false);
              }}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => {
                setNavbarOpen(true);
              }}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={NavLinks} closeFn={() => setNavbarOpen(false)} />
      ) : null}
    </nav>
  );
};

export default NavBar;
