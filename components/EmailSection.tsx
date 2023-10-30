/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react'

const  EmailSection = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) =>  {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    };
    console.log(data);
    const JSONData = JSON.stringify(data);
    const endpoint = '/api/send';

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONData
    });

    const result = await response.json();

    if(response.status == 200) {
      setSubmitted(true);
    }

  }

  return (
    <section className='grid md:grid-cols-2 my-12 py-24 gap-4'>
      <div>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-white mb-4 max-w-md'>
          { " " }
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have any question or just want to say hi, I'll try my best
          to get back to you!
        </p>

      </div>

      <div>
        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email' className='text-white block font-medium text-sm mb-2'>Your Email</label>
            <input name='email' className='placeholder-[#9ca2a9] w-full block p-2.5 text-sm rounded-lg border border-[#33353f] bg-[#18191E] text-gray-100' id='email' type='email' required placeholder='zardam@gmail.com'/>
          </div>
          <div>
            <label htmlFor='subject' className='text-white block font-medium text-sm mb-2'>Subject</label>
            <input name='subject' className='placeholder-[#9ca2a9] w-full block p-2.5 text-sm rounded-lg border border-[#33353f] bg-[#18191E] text-gray-100' id='subject' type='text' required placeholder='Hello'/>
          </div>
          <div>
            <label htmlFor='message' className='text-white block font-medium text-sm mb-2'>Message</label>
            <textarea
              name='message'
              id='message'
              className='placeholder-[#9ca2a9] w-full block p-2.5 text-sm rounded-lg border border-[#33353f] bg-[#18191E] text-gray-100'
              placeholder="Let's talk about..."
            />
          </div>
          <button className='bg-[#328d65] hover:bg-green-800 font-medium rounded-lg py-2.5 px-5 w-full'>Send Message</button>
          {
            submitted && (
              <p className='text-green-500 text-sm mt-2'> Email sent successfully!</p>
            )
          }
        </form>
      </div>

    </section>
  )
}

export default EmailSection
