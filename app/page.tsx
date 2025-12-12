import EducationSection from '../components/EducationSection';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard'
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'


export default function Page() {
    const skillsFrontend = ['JavaScript', 'C#', 'HTML', 'CSS'];
    const skillsBackend = ['.Net', 'ASP.NET', 'Node.js', 'Express.js', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Azure', 'Google Cloud', 'Firebase', 'SupaBase'];
    return (
        <div className='flex-1 w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-24'>
            <Hero />
            <EducationSection />
            {/** Sticky Left side */}
            <div className="p-8 self-start md:top-6 h-fit w-96">

                {/**Personal info section */}
                <div className='bg-bg text-center p-6 rounded-lg shadow-sm '>
                    <h1 className='text-3xl mb-2 font-semibold text-text'>Oscar Moreno</h1>
                    <h3 className='text-lg mb-2 text-text'>Software Development Engineer</h3>
                    <p className='text-base text-text-muted'>Full-stack developer with a strong foundation in building
                        end-to-end solutions and a proven ability to learn and deliver in any tech environment
                    </p>

                    {/**Social links */}
                    <div className='flex justify-around gap-8 pt-12 text-text-muted'>
                        <a href='https://github.com/runningTurtle2' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center hover:text-text transition'>
                            <FaGithub size={28} /><span className='text-sm mt-1'>GitHub</span>
                        </a>
                        <a href='https://www.linkedin.com/in/oscar-moreno-sde/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center hover:text-text transition'>
                            <FaLinkedin size={28} /><span className='text-sm mt-1'>Linkedin</span>
                        </a>
                        <a href='/files/resume.pdf' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center hover:text-text transition'>
                            <FaExternalLinkAlt size={28} /><span className='text-sm mt-1'>Resume</span>
                        </a>
                    </div>
                </div>

                {/** Nav Bar */}
                <nav className="flex bg-nav-bg text-nav-text mt-12 rounded-md w-full overflow-hidden">
                    <a href="#about" className="flex-1 text-center p-2 hover:bg-nav-hover transition focus:outline focus:outline-2 focus:outline-offset-2">About</a>
                    <a href="#experience" className="flex-1 text-center p-2 hover:bg-nav-hover transition focus:outline focus:outline-2 focus:outline-offset-2">Experience</a>
                    <a href="#projects" className="flex-1 text-center p-2 hover:bg-nav-hover transition focus:outline focus:outline-2 focus:outline-offset-2">Projects</a>
                </nav>

                {/** Programming Languages */}
                <section className='bg-accent/80 text-center p-6 rounded-lg mt-28 shadow-lg'>
                    <h1 className='text-lg mb-2 font-semibold text-text'>Programming Languages</h1>

                    {skillsFrontend.length > 0 && (
                        <div className='flex flex-wrap gap-3'>
                            {skillsFrontend.map((skill, index) => (
                                <span key={index} className='bg-tag-bg text-tag-text text-base font-medium px-2.5 py-1 rounded-full'>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </section>
                <section className='bg-accent/80 text-center p-6 rounded-lg mt-2 shadow-lg'>
                    <h1 className='text-lg mb-2 font-semibold text-text'>Backend Technologies</h1>

                    {skillsFrontend.length > 0 && (
                        <div className='flex flex-wrap gap-3'>
                            {skillsBackend.map((skill, index) => (
                                <span key={index} className='bg-tag-bg text-tag-text text-base font-medium px-2.5 py-1 rounded-full'>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </section>
            </div>

            {/** Right side (Main content)*/}
            <main className="flex-1 ">
                <section id='about' className='p-6 '>
                    <p className='text-base text-text leading-relaxed'>
                        Hello! I’m a recent Software Development graduate from Bellevue College,
                        seeking full-time as a software developer. I’ve built full-stack
                        applications across web, mobile, and backend platforms through hands-on experience
                        at Ace Rocket, a capstone-turned-internship with TiriVelo Inc, project-based coursework,
                        and personal projects.
                    </p>
                    <p className='text-base text-text pt-6 leading-relaxed'>
                        I'm excited to keep growing as a developer and contribute to meaningful projects.
                    </p>
                </section>
                {/** Education */}
                <section className="bg-card-bg p-6 mt-24">
                    <h2 className="text-xl font-semibold text-text mb-1">Bachelor of Applied Science in Software Development</h2>
                    <p className="text-text leading-relaxed text-base mb-1">Bellevue College, Washington</p>
                    <p className="text-text-muted leading-relaxed text-base">June 2025 | GPA: 3.7</p>
                </section>

                <div>
                    <section id="experience" className="scroll-mt-24 pt-6 min-h-[60vh]">
                        <h1 className="text-3xl p-6 mt-12 font-semibold text-text ">Experience</h1>
                        <ProjectCard
                            type='link'
                            heading='Software Engineer'
                            subHeading='Ace Rocket (AI EdTech Startup)'
                            tags={['HTML', 'CSS', 'JavaScript', 'Google Cloud', 'Firebase']}
                            body='Worked on a full-stack web app to help students prep for their SAT, ACT and AP math exams. I built a 
                            student performance analytics dashboard and a data-driven daily plan feature that generates a question list based on the areas of weakness. 
                            Developed and improved features in direct response to user feedback, helping shape the product for over 150 users.'
                            image='/acerocketwebsite.png'
                            link='https://acerocket.net/'
                        />
                    </section>

                    <section id="projects" className="scroll-mt-24 pt-6 min-h-[60vh]">
                        <h1 className="text-3xl p-6 mt-12 font-semibold text-text">Projects</h1>
                        <ProjectCard
                            type='video'
                            heading='Full-Stack Developer & Tech Lead'
                            subHeading='TiriVelo Pet Services (Capstone Project)'
                            tags={['TypeScript', 'React Native', 'CSS', 'PostgreSQL', 'SupaBase',]}
                            body='Led the development of a commercial cross-platform mobile application prototype for a pet booking service 
                            using React Native, PostgreSQL, and Supabase for backend CRUD operations. Collaborated with a team of four 
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
                    </section>

                </div>

            </main>


        </div>
    )
}