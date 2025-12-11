import React from 'react'

function Header() {
  return (
    <header className='sticky top-0 border-b border-border w-full bg-bg backdrop-blur-sm'>
        <div className='flex items-center justify-between max-w-7xl mx-auto px-6 h-16 '>
            <div className='flex items-center gap-3'>
                <span className='text-accent font-bold text-xl'>~/</span>
                <span className='font-bold text-lg tracking-tight'>Oscar_Moreno</span>
            </div>
            <nav className='hidden md:flex items-center gap-8 text-sm'>
                <a className='hover:text-accent' href='#about'>about</a>
                <a className='hover:text-accent' href='#education'>education</a>
                <a className='hover:text-accent' href='#skills'>skills</a>
                <a className='hover:text-accent' href='#experience'>experience</a>
                <a className='hover:text-accent' href='#projects'>projects</a>
            </nav>
            <a className='hidden md:flex item-center gap-2 border border-accent text-accent hover:bg-accent hover:text-black px-4 py-1.5 text-sm font-bold transition-all uppercase tracking-wider' href='#contact'>Contact</a>
        </div>
    </header>
  )
}

export default Header
