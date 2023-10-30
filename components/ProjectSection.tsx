import React from "react"
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: 'Add To Cart',
        desc: 'made this app for personal usage todo list',
        image: 'AddToCart.png'
    },
    {
        title: 'Online Code Editor',
        desc: 'Online Simple HTML, CSS, JS editor',
        image: 'Editor.png'
    }
    ,
    {
        title: 'Online Code Editor',
        desc: 'Online Simple HTML, CSS, JS editor',
        image: 'Editor.png'
    }
    ,
    {
        title: 'Online Code Editor',
        desc: 'Online Simple HTML, CSS, JS editor',
        image: 'Editor.png'
    }
    ,
    {
        title: 'Online Code Editor',
        desc: 'Online Simple HTML, CSS, JS editor',
        image: 'Editor.png'
    }
    ,
    {
        title: 'Online Code Editor',
        desc: 'Online Simple HTML, CSS, JS editor',
        image: 'Editor.png'
    }
    ,
    {
        title: 'Online Code Editor',
        desc: 'Online Simple HTML, CSS, JS editor',
        image: 'Editor.png'
    }
    ,
    {
        title: 'Online Code Editor',
        desc: 'Online Simple HTML, CSS, JS editor',
        image: 'Editor.png'
    }
    ,
    {
        title: 'Online Code Editor',
        desc: 'Online Simple HTML, CSS, JS editor',
        image: 'Editor.png'
    }
    ,
    {
        title: 'Online Code Editor',
        desc: 'Online Simple HTML, CSS, JS editor',
        image: 'Editor.png'
    }
    ,
    {
        title: 'Online Code Editor',
        desc: 'Online Simple HTML, CSS, JS editor',
        image: 'Editor.png'
    }
];

const ProjectSection = () => {
    return (
        <>
        <h1 className="text-white text-center text-4xl my-8 font-semibold">My Projects</h1>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {
            projects.map((p, i) => <ProjectCard key={i} imgUrl={p.image} title={p.title}
                desc={p.desc}/>)
            }
        </div>
        </>
    )
}

export default ProjectSection;
