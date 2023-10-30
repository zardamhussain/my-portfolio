'use client'
import React, { useState, useTransition } from 'react'
import Lottie from './Lottie'
import { TabButton } from './TabButton';

const Tab_DATA = [
    {
        id: 'skills',
        content:(
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>React</li>
                <li>React Native</li>
                <li>Express</li>
                <li>Mongodb</li>
            </ul>
        )
    },
    {
        id: 'educations',
        content:(
            <ul className='list-disc pl-2'>
                <li>Bachelor of Techonology in Information Technology from Bhahwan Parshuram Institute of Technology</li>
            </ul>
        )
    },
    {
        id: 'certifications',
        content:(
            <ul className='list-disc pl-2'>
                <li>Data Structures in JS</li>
                <li>Machine Learing from FreeCodeCamp</li>


            </ul>
        )
    },
]

export const About = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => setTab(id))
    }

    return (
        <section className='text-white mt-8'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8'>
                <div className='sm:h-[400px]'>
                    <Lottie name='moniter'/>
                </div>
                <div className='h-full flex flex-col mt-4 md:mt-0 mx-2'>
                    <h1 className='text-4xl font-bold mb-4 text-center' >About Me</h1>
                    <p>
                        I am a full stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with Javascript, React, Node.js, Express, Mongodb, HTML, CSS and Git.
                        I am a quick learner and I always looking to expand my knowledge and skill set. I am a
                        team player and I am excited to work with others to create amazing applications.
                    </p>
                    <div className='flex mt-8 justify-start'>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab == 'skills'}>{" "}Skills {" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange('educations')} active={tab == 'educations'}>{" "} Educations {" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange('certifications')} active={tab == 'certifications'}> {" "} Certifications {" "}</TabButton>
                    </div>
                    <div className='mt-8 text-base'>
                        {Tab_DATA.find(t => t.id == tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    )
}
