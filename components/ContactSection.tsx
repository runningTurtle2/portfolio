import React from 'react'

function ContactSection() {
  return (
    <section id='contact' className='w-full mt-12 mb-8'>
        <div className='border border-border bg-[#161616] p-8 md:p-12 '>
            <div className='relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left'>
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold mb-2'>_connect{"()"}</h1>
                    <p className='text-sm text-text-muted max-w-md'>Looking for Opportunities</p>
                </div>
                <div className='flex flex-col sm:flex-row items-center gap-4'>
                    <a className='bg-accent text-black text-sm px-8 py-4 font-bold uppercase tracking-wider hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] transition-all'
                    href='mailto:oscarmoren2010@gmail.com'>Email_Me</a>
                
                    <div className='flex gap-4'>
                        <a className='p-3 border border-border bg-bg hover:border-accent hover:text-accent transition-colors'
                        href='https://www.linkedin.com/in/oscar-moreno-sde/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                        <a className='p-3 border border-border bg-bg hover:border-accent hover:text-accent transition-colors'
                        href='https://github.com/runningTurtle2' target='_blank' rel='noopener noreferrer'>GitHub</a>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default ContactSection