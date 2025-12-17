import React from 'react'
import Image from 'next/image'

interface ProjectCardProps {
    id?: string,
    img?: string,
    heading: string,
    year: string,
    description: string,
    tags?: string[],
    code?: string,
    demo?: string,
}


function ProjectCards({img='/placeholder.png', heading, description, year, tags, code, demo }:ProjectCardProps)  {

    return (
        <article className='bg-[#161616] border border-border p-1 flex flex-col md:flex-row gap-6 transition-all group'>
            <div className='md:w-2/5 h-48 md:h-auto relative overflow-hidden bg-black'>
                <Image src={img} alt='Project' width={500} height={500} className='h-full w-full object-cover'/>
            </div>
            <div className='md:w-3/5 p-4 md:py-6 md:pr-6 flex flex-col'>
                <div className='flex justify-between items-start mb-2'>
                    <h3 className='text-xl font-bold '>{heading}</h3>
                    <span className='border border-accent text-sm text-accent px-2 py-.5'>{year}</span>
                </div>

                <p className='text-sm text-text-muted mb-4 leading-relaxed'>{description}</p>

                {tags.length > 0 && (
                    <div className='flex flex-wrap gap-2 mb-6'>
                    {tags.map((tag, index) => (
                        <span 
                        key={index}
                        className=' border border-border text-sm text-text-muted bg-black font-medium px-2 py-1'
                        >{tag}</span>
                    ))}
                    </div>
                )}


                {(code != null && demo != null ) && (
                    <div className='mt-auto flex gap-4 border-t border-border pt-4'>
                        <a className='text-sm font-bold uppercase hover:text-accent' href={code} target='_blank'>{'[ Code ]'}</a>
                        <a className='text-sm font-bold uppercase hover:text-accent' href={demo} target='_blank'>{'[ Demo ]'}</a>
                    </div>
                ) || (code != null) && (
                    <div className='mt-auto flex gap-4 border-t border-border pt-4'>
                    <a className='text-sm font-bold uppercase hover:text-accent' href={code} target='_blank'>{'[ Code ]'}</a>
                    </div>
                ) || (demo != null) && (
                    <div className='mt-auto flex gap-4 border-t border-border pt-4'>
                    <a className='text-sm font-bold uppercase hover:text-accent' href={demo} target='_blank'>{'[ Demo ]'}</a>
                    </div>
                )
                }


            </div>
        </article>
    )
}

export default ProjectCards