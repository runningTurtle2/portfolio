import Image from 'next/image'
import ProjectCard from '../components/ProjectCard'
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'


export default function Page() {

    return (
        <div className='flex flex-col md:flex-row gap-16 max-w-7xl mx-auto px-6  py-12'>

            {/** Left side (Main content)*/}
            <main className="flex-1 space-y-24">
                <section id='about' className='bg-white p-6 rounded-xl shadow-sm border border-gray-200'>
                    <h1 className='text-xl font-semibold text-gray-800'>About me</h1>
                    <p className='text-gray-700 leading-relaxed text-sm'>
                        Hello, I am a Software Development graduate from Bellevue College, currently seeking full-time opportunities as a software developer.
                        Through both self-learning and academic projects, I’ve gained experience building full-stack applications for web, mobile, and APIs 
                        using technologies such as React, JavaScript, C#, .NET, Node, SQL Server, Google Cloud, Azure, and more.
                        I’m eager to continue learning, applying my skills, and contributing to impactful projects as part of a software development team.
                    </p>
                </section>
                <section id='education' className='bg-white p-6 rounded-xl shadow-sm border border-gray-200'>
                    <h1 className='text-xl font-semibold text-gray-800'>Education</h1>
                    <p className='text-gray-700 leading-relaxed text-sm'>Software Development Bachelor of Applied Science</p><span className='text-gray-700 leading-relaxed text-sm'>June 2025</span>
                    <p className='text-gray-700 leading-relaxed text-sm'>Bellevue College, Washington, GPA: 3.7</p>
                </section>


                <ProjectCard 
                    id='experience'
                    type='link'
                    heading='Software Engineer'
                    subHeading='Ace Rocket'
                    tags={['HTML', 'CSS', 'JavaScript', 'Google Cloud', 'Firebase']}
                    body='I contributed to full-stack web development for a personalized online learning 
                    platform that helps students prepare for the SAT and AP math exams, building a user performance
                    tracking system using JavaScript and Firebase to enable tailored learning paths. 
                    In an early-stage startup environment, I worked closely with the founder to prototype and launch 
                    features—such as a daily practice plan based on student weaknesses—for over 150 users.'
                    image='/acerocketwebsite.png'
                    link='https://acerocket.net/'
                />

                <ProjectCard 
                    id='projects'
                    type='video'
                    heading='Capstone Project'
                    subHeading='Full-Stack Software Developer Sponsored by TiriVelo'
                    tags={['TypeScript', 'React Native', 'PostgreSQL', 'SupaBase', ]}
                    body='Developed a commercial cross-platform mobile application for a pet booking service as a capstone project, 
                    using React Native, Expo, PostgreSQL, and Supabase for backend CRUD operations. Collaborated with a team of four 
                    to design and implement key features including user authentication, booking, scheduling, and profile management.'
                    src='https://www.youtube.com/embed/spfkV2iHaM8'
                />
 
                <ProjectCard
                    type='video'
                    heading='Hospital Management System'
                    subHeading='Academic Project'
                    tags={['C#', '.NET', 'SQL Server', 'MongoDB', 'Windows Forms']}
                    body='A healthcare application designed to simplify patient records, data analysis, and hospital inventory management.'
                    src='https://www.youtube.com/embed/emC-xTwNm1o'
                    
                />
                <ProjectCard
                    heading='Project Three'
                    subHeading='what is it about?'
                    body='Fugiat laborum dolor fugiat quis tempor non et occaecat sunt duis sunt nostrud id.
                    Reprehenderit magna dolore nisi laborum duis aute tempor do duis in. Tempor quis duis minim est. 
                    Velit non reprehenderit sit cillum laboris magna ea commodo et'
                />


            </main>

            {/** right side */}
            <div className="p-8 self-start sticky top-6 h-fit w-96">
                {/**Personal info section */}
                <div className='bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200'>
                    <h2 className='text-2xl font-semibold text-gray-800'>Oscar Moreno</h2>
                    <h3 className='text-xl  text-gray-800'>Software developer</h3>
                    <p className='text-base text-gray-600'>Full-Stack Development | Building Scalable Solutions</p>
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
                <nav className='flex bg-gray-800 text-white mt-12 rounded-md w-full'>
                    <a href='#about' className='flex-1 text-center hover:bg-gray-700 transition rounded-md p-2'>About</a>
                    <a href='#experience' className='flex-1 text-center hover:bg-gray-700 transition rounded-md p-2'>Experience</a>
                    <a href='#projects' className='flex-1 text-center hover:bg-gray-700 transition rounded-md p-2'>Projects</a>
                </nav>
            </div>
        </div>
    )
}