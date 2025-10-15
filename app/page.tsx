import Image from 'next/image'
import ProjectCard from '../components/ProjectCard'
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'


export default function Page() {

    return (
        <div className='flex flex-col md:flex-row gap-16 max-w-7xl mx-auto px-6  py-12'>

            {/** Left side (Main content)*/}
            <main className="flex-1 space-y-24">
                <section id='about' className='bg-card-bg p-6 rounded-xl shadow-sm '>
                    <h1 className='text-2xl font-semibold text-text'>About me</h1>
                    <p className='text-md text-text leading-relaxed'>
                    Hello! I’m a recent Software Development graduate from Bellevue College, 
                    actively seeking full-time opportunities as a software developer. Through 
                    hands-on experience at Ace Rocket, an internship with TiriVelo, academic projects, 
                    and continuous self-learning, I’ve built full-stack applications across web, mobile, 
                    and API platforms. My technical background includes working with technologies like React, 
                    JavaScript, C#, .NET, Node.js, SQL Server, Google Cloud, Azure, and more. I'm excited to keep growing as a 
                    developer and contribute to meaningful projects.
                    </p>
                </section>
                {/** Education */}
                <section id="education" className="bg-card-bg p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold text-text mb-2">Bachelor of Applied Science in Software Development</h2>
                <p className="text-text leading-relaxed text-md mb-1">Bellevue College, Washington</p>
                <p className="text-text-muted leading-relaxed text-sm">June 2025 | GPA: 3.7</p>
                </section>


                <div>
                    <ProjectCard 
                        id='experience'
                        type='link'
                        heading='Software Engineer'
                        subHeading='Ace Rocket'
                        tags={['HTML', 'CSS', 'JavaScript', 'Google Cloud', 'Firebase']}
                        body='Worked on a full-stack web app to help students prep for their SAT, ACT and AP math exams. I built a 
                        system that tracks user performance and generates question list based on the areas of weakness. 
                        Developed and improved features in direct response to user feedback, helping shape the product for over 150 users.'
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
                        tags={['C#', '.NET', 'SQL Server', 'MongoDB', 'Windows Forms', 'SignalR']}
                        body='A collaborative project where I am paired with another student to develop a system that aims to manage 
                        hospital operations, patient data, medical resources, and communication. Features include authentication, patient record management, 
                        appointment scheduling, medical inventory, data analytics, and real-time updates.'
                        src='https://www.youtube.com/embed/emC-xTwNm1o'
                        
                    />

                    <ProjectCard
                        type='link'
                        heading='Coffee List'
                        subHeading='Personal Project (In Development)'
                        tags={['TypeScript', 'React', 'Tailwind']}
                        body='A work-in-progress web application designed to catalog various types of coffee. The app will allow users to store and 
                        view detailed information about each coffee type, including name, description, roast level, bitterness, and more. 
                        Currently in the early stages of development, with core features still being built.'
                        image='/coffeeList.png'
                        link='https://coffee-list-two.vercel.app/'
                    />

                </div>

            </main>

            {/** right side */}
            <div className="p-8 self-start sticky top-6 h-fit w-96">
                {/**Personal info section */}
                <div className='bg-bg text-center p-6 rounded-lg shadow-sm '>
                    <h2 className='text-2xl font-semibold text-text'>Oscar Moreno</h2>
                    <h3 className='text-xl  text-text'>Software Developer</h3>
                    <p className='text-base text-text-muted'>Full-Stack Development | Building Scalable Solutions</p>
                    {/**Social links */}
                    <div className='flex justify-around gap-8 pt-12 text-text-muted'>
                        <a href='https://github.com/runningTurtle2' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center hover:text-text transition'>
                            <FaGithub size={28} />
                        </a>
                        <a href='https://www.linkedin.com/in/oscar-moreno-sde/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center hover:text-text transition'>
                            <FaLinkedin size={28} />
                        </a>
                        <a href='/files/resume.pdf' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center hover:text-text transition'>
                            <FaExternalLinkAlt size={25} /><span className='text-sm mt-1'>Resume</span>
                        </a>
                    </div>
                </div>

                {/** Nav Bar */}
                <nav className="flex bg-nav-bg text-nav-text mt-12 rounded-md w-full overflow-hidden">
                <a href="#about" className="flex-1 text-center p-2 hover:bg-nav-hover transition">About</a>
                <a href="#experience" className="flex-1 text-center p-2 hover:bg-nav-hover transition">Experience</a>
                <a href="#projects" className="flex-1 text-center p-2 hover:bg-nav-hover transition">Projects</a>
                </nav>

            </div>
        </div>
    )
}