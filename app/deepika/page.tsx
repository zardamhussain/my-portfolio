'use client'

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';


const Deepika = () => {
  useEffect(() => {
    AOS.init({duration: 1000})
  })

  return (
    <div className='div h-[8700px] bg-black text-white flex items-center flex-col'>
      <div className='flex mt-[200px] gap-3 font-bold'>

        <div data-aos='zoom-out-down' className='h-96 mt-[200px] text-9xl bg-gradient-to-r from-purple-500 via-indigo-300 to-purple-500 text-center inline-block text-transparent bg-clip-text'>
        <div>
          Happy New Year
          </div>
        <div className='flex justify-center'>
          <TypeAnimation
                        sequence={[
                          'Deepika',
                          1000,
                          'Motki',
                          1000,
                            'Pigi',
                            1000

                          ]}
                          wrapper="span"
                          speed={50}
                          className='flex'
                          repeat={Infinity}
                          />
          </div>
        </div>

      <div className='mt-[200px]'></div>

      <div data-aos='zoom-out-up'>
          <Image src='/dipibg.jpeg' height='400' width='800' alt='dpipbg'/>
      </div>

      </div>

      <div className='mt-[500px]'></div>



      <div className='contrainer'>


      <div className='grid grid-cols-5'>

      <div className='w-[300px] text-7xl col-span-1' data-aos="zoom-in-right">

        <Image src={'/dipi4.jpeg'} width='400' height='1000' alt='dipi1'/>

      </div>

      <div className='text-xl pt-24 col-span-4 flex justify-center'>


      <div  data-aos="zoom-in-left">

      <div className="mt-7 ml-24 flex items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 ">
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Deepika</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I ought to complain to Spotify for you not being named this weeks hottest single 😂</p>
          </div>
      </div>

      </div>

      </div>

      </div>

      <div className='mt-[200px]'></div>

      <div className='grid grid-cols-5'>


      <div className='text-xl pt-24 col-span-4 flex justify-center'>


      <div  data-aos="zoom-in-right">

      <div className="mt-7 flex items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 ">
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Deepika</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">If you were a song, you would be the best single on the album</p>
          </div>
      </div>

      </div>

      </div>
      <div className='w-[300px] text-7xl col-span-1' data-aos="zoom-in-left">

        <Image src={'/dipi3.jpeg'} width='400' height='1000' alt='dipi1'/>

      </div>

      </div>

      <div className='mt-[200px]'></div>
      <div className='grid grid-cols-5'>

      <div className='w-[300px] text-7xl col-span-1' data-aos="zoom-in-right">

        <Image src={'/dipi2.jpeg'} width='400' height='1000' alt='dipi1'/>

      </div>

      <div className='text-xl pt-24 col-span-4 flex justify-center'>


      <div  data-aos="zoom-in-left">

      <div className="mt-7 ml-24 flex items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 ">
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Deepika</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Are you a time traveler? Because I see you in my future</p>
          </div>
      </div>

      </div>

      </div>

      </div>

      <div className='mt-[200px]'></div>

      <div className='grid grid-cols-5'>


      <div className='text-xl pt-24 col-span-4 flex justify-center'>


      <div  data-aos="zoom-in-right">

      <div className="mt-7 flex items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 ">
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Deepika</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Do you have a Band-Aid? I scraped my knee falling for you</p>
          </div>
      </div>

      </div>

      </div>
      <div className='w-[300px] text-7xl col-span-1' data-aos="zoom-in-left">

        <Image src={'/dipi7.jpeg'} width='400' height='1000' alt='dipi1'/>

      </div>

      </div>

      <div className='mt-[200px]'></div>
      <div className='grid grid-cols-5'>

      <div className='w-[300px] text-7xl col-span-1' data-aos="fade-right">

        <Image src={'/dipi5.jpeg'} width='400' height='1000' alt='dipi1'/>

      </div>

      <div className='text-xl pt-24 col-span-4 flex justify-center'>


      <div  data-aos="fade-left">

      <div className="mt-7 ml-24 flex items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 ">
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Deepika</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Even if there was no gravity on earth, I had still fall for you</p>
          </div>
      </div>

      </div>

      </div>

      </div>

      <div className='mt-[200px]'></div>

      <div className='grid grid-cols-5'>


      <div className='text-xl pt-24 col-span-4 flex justify-center'>


      <div  data-aos="zoom-in-right">

      <div className="mt-7 flex items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 ">
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Deepika</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">If I had a star for every time you brightened my day, I’d have a galaxy</p>
          </div>
      </div>

      </div>

      </div>
      <div className='w-[300px] text-7xl col-span-1' data-aos="zoom-in-left">

        <Image src={'/dipi8.jpeg'} width='400' height='1000' alt='dipi1'/>

      </div>

      </div>


      <div className='mt-[200px]'></div>
      <div className='grid grid-cols-5'>

      <div className='w-[300px] text-7xl col-span-1' data-aos="fade-up-right">

        <Image src={'/dipi6.jpeg'} width='400' height='1000' alt='dipi1'/>

      </div>

      <div className='text-xl pt-24 col-span-4 flex justify-center'>


      <div  data-aos="fade-up-left">

      <div className="mt-7 ml-24 flex items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 ">
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Deepika</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">They say Disneyland is the happiest place on earth. Well apparently, no one has ever been standing next to you</p>
          </div>
      </div>

      </div>

      </div>

      </div>

      <div className='mt-[200px]'></div>

      <div className='grid grid-cols-5'>


      <div className='text-xl pt-24 col-span-4 flex justify-center'>


      <div  data-aos="fade-down-right">

      <div className="mt-7 flex items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 ">
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Deepika</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">How does it feel to be the most beautiful girl in this place?</p>
          </div>
      </div>

      </div>

      </div>
      <div className='w-[300px] text-7xl col-span-1' data-aos="fade-down-left">

        <Image src={'/dipi1.jpeg'} width='400' height='1000' alt='dipi1'/>

      </div>

      </div>
      <div className='mt-[200px]'></div>

      <div className='container text-7xl flex items-center justify-center pl-16 font-bold' data-aos="flip-down">
        <div>

        You’re so beautiful you made me forget my pick up line
        so im ending it
        </div>
      </div>

      <div className='mt-[200px]'></div>





      <div className='grid grid-cols-5'>

      <div className='w-[350px] text-7xl col-span-1' data-aos="flip-left">

        <Image src={'/dipinme.jpeg'} width='400' height='1000' alt='dipi1'/>

      </div>

      <div className='text-xl pt-24 col-span-4 flex justify-center'>


      <div  data-aos="flip-right">

      <div className="mt-7 ml-24 flex items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 ">
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white text-5xl">From Bestfriend</h5>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-4xl">

                <div>
                  Happy New Year Deepika, I hope we will study hard
                </div>
                and get the our dream jobs this year....

              </div>
          </div>
      </div>

      </div>

      </div>

      </div>


      </div>


    </div>
  )
}

export default Deepika;
