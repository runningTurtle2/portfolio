import React from 'react'

function ExperienceSection() {
    return (
        <section id='experience' className='w-full'>
            <h2 className="text-xl font-bold mb-8 flex items-center gap-4 text-accent">
                <span className="text-2xl">{'>'}</span> Experience
                <span className="h-px bg-border flex-grow"></span>
            </h2>
            <div className='space-y-6'>
                {/** One */}
                <div className='flex flex-col md:flex-row gap-6 border-l border-border pl-6 md:pl-0 md:border-l-0'>
                    <div className='md:w-1/4 md:text-right md:pr-6 md:border-r border-border relative'>
                        <div className='hidden md:block absolute top-1.5 -right-[5px] w-2.5 h-2.5 bg-accent rounded-full border border-black'></div>
                        <span className='text-accent font-bold text-md block mb-1'>Ace Rocket</span>
                        <span className='text-text-muted text-xs uppercase tracking-wider'>June 2025 - September 2025</span>
                    </div>
                    <div className='md:w-3/4 pb-8 md:pb-0 '>
                        <h3 className='text-xl font-bold mb-2'>Software Engineer</h3>
                        <ul className='space-y-2 text-text-muted text-sm list-none'>
                            <li className='flex items-start gap-2'><span className='text-accent '>{"›"}</span>Nisi laborum fugiat consectetur amet incididunt ea ipsum culpa magna occaecat nostrud et.</li>
                            <li className='flex items-start gap-2'><span className='text-accent '>{"›"}</span>Nisi laborum fugiat consectetur amet incididunt ea ipsum culpa magna occaecat nostrud et.</li>                            
                            <li className='flex items-start gap-2'><span className='text-accent '>{"›"}</span>Nisi laborum fugiat consectetur amet incididunt ea ipsum culpa magna occaecat nostrud et.</li>
                        </ul>
                    </div>
                </div>
                {/** Two */}
                <div className='flex flex-col md:flex-row gap-6 border-l border-border pl-6 md:pl-0 md:border-l-0'>
                    <div className='md:w-1/4 md:text-right md:pr-6 md:border-r border-border  relative'>
                        <div className='hidden md:block absolute top-1.5 -right-[5px] w-2.5 h-2.5 bg-border rounded-full border border-black'></div>
                        
                        <span className='text-text-muted text-xs uppercase tracking-wider'>January 2025 - June 2025</span>
                    </div>
                    <div className='md:w-3/4 pb-8 md:pb-0 '>
                        <h3 className='text-xl font-bold mb-2'>Software Engineer Intern</h3>
                        <ul className='space-y-2 text-text-muted text-sm list-none'>
                            <li className='flex items-start gap-2'><span className='text-accent '>{"›"}</span>Nisi laborum fugiat consectetur amet incididunt ea ipsum culpa magna occaecat nostrud et.</li>
                            <li className='flex items-start gap-2'><span className='text-accent '>{"›"}</span>Nisi laborum fugiat consectetur amet incididunt ea ipsum culpa magna occaecat nostrud et.</li>                            
                            <li className='flex items-start gap-2'><span className='text-accent '>{"›"}</span>Nisi laborum fugiat consectetur amet incididunt ea ipsum culpa magna occaecat nostrud et.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection