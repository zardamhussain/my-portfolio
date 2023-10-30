'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { NavLink } from './NavLink'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';

const mapLinks = [
    {href : '#about', title: 'About'},
    {href : '#projects', title: 'Projects'},
    {href : '#contact', title: 'Contact'},
]


export const NavBar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 md:bg-opacity-90' >

        <div className='flex flex-wrap justify-between items-center mx-auto px-8 mt-3'>
            <Link href={'/'} className='text-white text-3xl md:text-5xl font-semibold'>ZARDAM</Link>

            <div className='mobile-menu block md:hidden'>
                {
                 !openNavbar ? (
                    <button onClick={() => setOpenNavbar(prev => !prev)}
                        className='text-slate-200 border rounded border-slate-200 flex items-center px-3 py-2 hover:text-[#328d65] hover:border-[#328d65]'
                    ><Bars2Icon className='h-5 w-5'/></button>
                 ) : (
                    <button onClick={() => setOpenNavbar(prev => !prev)}
                        className='text-slate-200 border rounded border-slate-200 flex items-center px-3 py-2 hover:text-[#328d65] hover:border-[#328d65]'
                    ><XMarkIcon className='h-5 w-5'/></button>
                 )
                }
            </div>

            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                     mapLinks.map(( { href, title }, i) => (
                        <li key={i}>
                            <NavLink href={href} title={title}/>
                        </li>
                     ))
                    }
                </ul>
            </div>
        </div>
        {
        openNavbar &&
        <ul className='flex flex-col items-center p-4'>
            {
                mapLinks.map(( { href, title }, i) => (
                <li key={i}>
                    <NavLink href={href} title={title}/>
                </li>
                ))
            }
        </ul>
        }
    </nav>
  )
}
