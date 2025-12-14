import EducationSection from '../components/EducationSection';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard'
import SkillSection from '../components/SkillSection';
import ContactSection from '../components/ContactSection';
import ExperienceSection from '../components/ExperienceSection';


export default function Page() {

    return (
        <div className='flex-1 w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-24'>
            <Hero />
            <EducationSection />
            <SkillSection />
            <ExperienceSection />

            <div>
                <section id="experience" className="scroll-mt-24 pt-6 min-h-[60vh]">
                    
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
                    <h2 className="text-xl font-bold mb-8 flex items-center gap-4 text-accent">
                        <span className="text-2xl">{'>'}</span> Projects
                        <span className="h-px bg-border flex-grow"></span>
                    </h2>
                    <ProjectCard
                        type='video'
                        heading='TiriVelo Pet Services - Full-Stack Mobile Application'
                        subHeading='Capstone Project'
                        tags={['TypeScript', 'React Native', 'CSS', 'PostgreSQL', 'SupaBase',]}
                        body='Collaborated with a team of 4 other developers to design and build a commercial-grade cross-platform mobile application prototype for TiriVelo, a pet service booking platform.'
                        src='https://www.youtube.com/embed/spfkV2iHaM8'
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
                </section>

            </div>

            <ContactSection />
        </div>
    )
}