import React from 'react'
import Image from 'next/image'

function ProjectCards() {


    return (
        <article className='bg-[#161616] border border-border p-1 flex flex-col md:flex-row gap-6 hover:border-accent transition-all group'>
            <div className='md:w-2/5 h-48 md:h-auto relative overflow-hidden bg-black'>
                <Image src={'/placeholder.png'} alt='Project' width={500} height={300} />
            </div>
            <div className='md:w-3/5 p-4 md:py-6 md:pr-6 flex flex-col'>
                <div className='flex justify-between items-start mb-2'>
                    <h3 className='text-xl'>Hello</h3>
                    <span className=''>2025</span>
                </div>
            </div>
        </article>
    )
}

export default ProjectCards