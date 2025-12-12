import React from 'react'

function Footer() {
  return (
    <footer className='w-full border-t border-border bg-[#161616] text-[#a0a0a0] py-6 text-center text-sm font-mono'>
        <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center'>
          <p>© 2025 Oscar Moreno</p>
          <div className='flex gap-4'>
            <a className='hover:text-accent' href='https://github.com/runningTurtle2/portfolio' target='_blank'>Source Code</a>
            <p>|</p>
            <a className='hover:text-accent' href='https://github.com/users/runningTurtle2/projects/12/views/2' target='_blank'>Project Tracker</a>
          </div>      
        </div>
    </footer>
  )
}

export default Footer