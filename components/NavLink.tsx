'use client'
import Link from 'next/link'
import React from 'react'

export const  NavLink = ( { href, title }: any ) => {
  return (
    <Link
        href={ href }
        className='block text-[#a8acb0] py-3 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-white'>
        { title }
    </Link>
  )
}
