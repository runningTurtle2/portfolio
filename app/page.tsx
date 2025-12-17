import EducationSection from '../components/EducationSection';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard'
import SkillSection from '../components/SkillSection';
import ContactSection from '../components/ContactSection';
import ExperienceSection from '../components/ExperienceSection';
import FeaturedSection from '../components/FeaturedSection';


export default function Page() {

    return (
        <div className='flex-1 w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-24'>
            <Hero />
            <EducationSection />
            <SkillSection />
            <ExperienceSection />

            <FeaturedSection />

            <ContactSection />
        </div>
    )
}