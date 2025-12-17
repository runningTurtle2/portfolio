import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Hero() {
  return (
    <section id='about' className='grid gap-12 items-center pt-8'>
      <div className='space-y-6'>
        <div className='inline-flex items-center gap-2 px-3 py-1 border border-border bg-[#202020] text-sm text-accent mb-2 w-fit'>
          <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></span><p className='uppercase'>Status Online</p>
        </div>
        <h1 className='text-4xl md:text-6xl font-bold tracking-tighter leading-none'>Hello World</h1>
        <p className='text-text-muted text-lg max-w-2xl leading-relaxed border-l-2 border-accent pl-4'>
          My name is Oscar Moreno and I'm a Software Developer with a strong foundation in building end-to-end solutions and a proven ability 
          to learn and deliver in any tech environment
        </p>
        <div className='flex flex-wrap gap-4 pt-4'>
          <a className='bg-accent text-black px-6 py-3 font-bold uppercase tracking-wide transition-all' href='#projects'>View Projects</a>
          <a className='bg-[#161616] border-border border px-6 py-3 font-bold text-sm uppercase tracking-wide hover:border-accent hover:text-accent transition-all flex items-center gap-2' 
          href='/files/resume.pdf' target='_blank'><span className='material-symbols-outlined text-lg'><MdOutlineFileDownload /></span>Resume.pdf
          </a>
        </div>
        <div className='flex gap-6 pt-8 text-text-muted items-center'>
          <a className='hover:text-accent transition-colors flex items-center' href='https://github.com/runningTurtle2' target='_blank' rel='noopener noreferrer'>
            <span className='text-sm uppercase'>github</span>

          </a>
          <a className='hover:text-accent transition-colors flex items-center' href='https://www.linkedin.com/in/oscar-moreno-sde/' target='_blank' rel='noopener noreferrer'>
            <span className='text-sm uppercase '>Linkedin</span>

          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero