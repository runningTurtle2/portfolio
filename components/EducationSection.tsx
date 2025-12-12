import React from 'react'

function EducationSection() {
  return (
    <section id='education'className='w-full'>
        <h2 className='text-xl font-bold mb-8 flex items-center gap-4 text-accent'>
            <span className='text-2xl'>{'>'}</span>
            Education
            <span className='h-px bg-border flex-grow'></span>
        </h2>

        <div>
            <div className='bg-[#161616] p-6'>
                <div className='flex justify-between items-start mb-4'>
                    <div>
                        <h3 className='text-lg font-bold '>Bachelor of Applied Science in Software Development</h3>
                        <p className='text-sm mt-1 text-text-muted'>Bellevue College</p>
                    </div>
                    <span className='text-sm font-bold bg-[#202020] px-2 py-1 text-accent border border-border'>2025</span>
                </div>

                <div className='space-y-2 text-sm text-text-muted'>
                    <p className='flex items-center gap-2'>
                        <span className='text-accent'>{'→'}</span>
                        GPA: 3.7 / 4.0
                    </p>
                    <p className='flex items-center gap-2'>
                        <span className='text-accent'>{'→'}</span>
                        Focus: Application Development
                    </p>                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default EducationSection