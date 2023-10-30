/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import Lottie from './Lottie'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className='text-white mb-4 text-4xl sm:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-br from-slate-400 via-[#328d65] to-slate-800'>
                        Hello I'm {" "}
                    </span>
                    <TypeAnimation
                        sequence={[
                            'Zardam Hussain',
                            1000,
                            'Competitive Programmer',
                            1000,
                            'React Developer',
                            1000

                        ]}
                        wrapper="span"
                        speed={50}
                        className='text-xl sm:text-5xl flex'
                        repeat={Infinity}
                        />
                </h1>
                <p className='text-[#aea8a8] text-sm sm:text-xl mb-6'>
                I'm Zardam Hussain and I have a powerful affinity with technology </p>
                <div className='flex gap-2 flex-col sm:flex-none sm:flex-row'>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full
                        bg-gradient-to-br from-slate-400 via-[#328d65] to-slate-800 hover:bg-slate-200 mr-4 text-white font-bold'>Hire Me</button>
                    <button className='text-white w-full sm:w-fit px-1 py-1 rounded-full
                    bg-gradient-to-br from-slate-400 via-[#328d65] to-slate-800  first-letter: mr-6'>
                        <span className='block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800 font-bold'>
                            <Link href={'https://drive.google.com/file/d/1NzXVdrAtY-Dtxv8vcDL8_Zaeq4CMid2W/view'} >
                            Download CV
                            </Link>
                        </span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 mt-8 sm:mt-8 mx-auto">
                <div className='bg-[#181818] h-56 w-56 sm:h-96 sm:w-96 rounded-full flex justify-center items-center'>
                    <Lottie name='coder'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
