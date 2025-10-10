import Image from 'next/image'
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'


export default function Page() {

    return (
        <div className='flex flex-row gap-48 px-4 py-6'>

            {/** Left side (Main content)*/}
            <main className="w-[500px] space-y-40">
                <section id='about' className='bg-gray-300 p-8 rounded-xl'>
                    <h1 className='text-2xl pb-2'>About me</h1>
                    <p>Fugiat laborum dolor fugiat quis tempor non et occaecat sunt duis sunt nostrud id. Reprehenderit magna dolore nisi laborum duis aute tempor do duis in. Tempor quis duis minim est. Velit non reprehenderit sit cillum laboris magna ea commodo et.</p>
                </section>
                <section id='education' className='bg-gray-300 p-8'>
                    <h1 className='text-2xl pb-2'>Education</h1>
                    <p>Software Development Bachelor of Applied Science</p><span>June 2025</span>
                    <p>Bellevue College, Washington, GPA: 3.7</p>
                </section>
                <section id='experience' className='bg-gray-300 p-8'>
                    <h1 className='text-2xl pb-2'>Experience</h1>
                    <p>Ace Rocket</p>
                    <p>Fugiat laborum dolor fugiat quis tempor non et occaecat sunt duis sunt nostrud id. Reprehenderit magna dolore nisi laborum duis aute tempor do duis in. Tempor quis duis minim est. Velit non reprehenderit sit cillum laboris magna ea commodo et.</p>

                </section>
                <section id='projects' className='bg-gray-300 p-8'>
                    <h1 className='text-2xl pb-2'>Project One</h1>
                    <p>Ace Rocket</p>
                    <p>Fugiat laborum dolor fugiat quis tempor non et occaecat sunt duis sunt nostrud id. Reprehenderit magna dolore nisi laborum duis aute tempor do duis in. Tempor quis duis minim est. Velit non reprehenderit sit cillum laboris magna ea commodo et.</p>

                </section>
                <section className='bg-gray-300 p-8'>
                    <h1 className='text-2xl pb-2'>Project Two</h1>
                    <p>Ace Rocket</p>
                    <p>Fugiat laborum dolor fugiat quis tempor non et occaecat sunt duis sunt nostrud id. Reprehenderit magna dolore nisi laborum duis aute tempor do duis in. Tempor quis duis minim est. Velit non reprehenderit sit cillum laboris magna ea commodo et.</p>

                </section>
                <section className='bg-gray-300 p-8'>
                    <h1 className='text-2xl pb-2'>Project Three</h1>
                    <p>Ace Rocket</p>
                    <p>Fugiat laborum dolor fugiat quis tempor non et occaecat sunt duis sunt nostrud id. Reprehenderit magna dolore nisi laborum duis aute tempor do duis in. Tempor quis duis minim est. Velit non reprehenderit sit cillum laboris magna ea commodo et.</p>

                </section>

            </main>

            {/** right side */}
            <div className="p-8 self-start sticky top-6 h-fit w-96">
                {/**Personal info section */}
                <div className='bg-slate-300 p-6 rounded-lg'>
                    <h2 className='text-4xl p-2'>Oscar Moreno</h2>
                    <h3 className='text-2xl p-2'>Software developer</h3>
                    <p className='p-2'>Full-Stack Development | Building Scalable Solutions</p>
                    {/**Social links */}
                    <div className='flex justify-around gap-8 pt-6 text-gray-600'>
                        <a href='https://github.com/runningTurtle2' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center hover:text-black transition'>
                            <FaGithub size={28} />
                        </a>
                        <a href='https://www.linkedin.com/in/oscar-moreno-sde/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center hover:text-black transition'>
                            <FaLinkedin size={28} />
                        </a>
                        <a href='/files/resume.pdf' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center hover:text-black transition'>
                            <FaExternalLinkAlt size={25} /><span className='text-sm mt-1'>Resume</span>
                        </a>
                    </div>
                </div>

                {/** Nav Bar */}
                <nav className='flex bg-slate-300  mt-12 rounded-md w-full'>
                    <a href='#about' className='flex-1 text-center hover:bg-slate-400 transition rounded-md p-2'>About</a>
                    <a href='#experience' className='flex-1 text-center hover:bg-slate-400 transition rounded-md p-2'>Experience</a>
                    <a href='#projects' className='flex-1 text-center hover:bg-slate-400 transition rounded-md p-2'>Projects</a>
                </nav>
            </div>
        </div>
    )
}