import EducationSection from '../components/EducationSection';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard'
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'
import SkillSection from '../components/SkillSection';


export default function Page() {
    const skillsFrontend = ['JavaScript', 'C#', 'HTML', 'CSS'];
    const skillsBackend = ['.Net', 'ASP.NET', 'Node.js', 'Express.js', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Azure', 'Google Cloud', 'Firebase', 'SupaBase'];
    return (
        <div className='flex-1 w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-24'>
            <Hero />
            <EducationSection />
            <SkillSection />

            {/** Right side (Main content)*/}
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

            
        </div>
    )
}