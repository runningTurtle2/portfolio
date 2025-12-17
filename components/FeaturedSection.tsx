import React from 'react'
import ProjectCards from './ProjectCards'

function FeaturedSection() {
  return (
    <section id='projects' className='w-full'>
        <h2 className="text-xl font-bold mb-8 flex items-center gap-4 text-accent">
            <span className="text-2xl">{'>'}</span>Featured Projects
            <span className="h-px bg-border flex-grow"></span>
        </h2>
        <div className='grid gap-8'>
            <ProjectCards />
        </div>
    </section>
  )
}

export default FeaturedSection