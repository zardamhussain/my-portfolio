
import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ( { imgUrl, title, desc }: any) => {
    return (
        <div>
        <div className='h-52 md:h-72 rounded-t-xl group' style={{backgroundImage: `url(${imgUrl})` , backgroundSize:'cover'}}>
            <div className='h-full w-full justify-center items-center gap-4 bg-[#121212] bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 group-hover:flex'>
                <Link  href={'/'} className='hidden h-14 w-14 rounded-full border-2  border-[#ADB7BE] group-hover:flex justify-center items-center group/code hover:border-white'>
                    <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] group-hover/code:text-white'/>
                </Link>
                <Link  href={'/'} className='hidden h-14 w-14 rounded-full border-2  border-[#ADB7BE] group-hover:flex justify-center items-center group/code hover:border-white'>
                    <EyeIcon className='h-10 w-10 text-[#ADB7BE] group-hover/code:text-white'/>
                </Link>
            </div>
        </div>
        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4' >
            <h5 className='font-semibold'> {title}</h5>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default ProjectCard;
