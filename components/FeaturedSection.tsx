import React from 'react'
import ProjectCards from './ProjectCards'

function FeaturedSection() {
  return (
    <section id='projects' className='w-full'>
        <h2 className="text-xl font-bold mb-8 flex items-center gap-4 text-accent">
            <span className="text-2xl">{'>'}</span>Featured Projects
            <span className="h-px bg-border flex-grow"></span>
        </h2>
        <div className='grid gap-8'>
            <ProjectCards
              img='/aceRocketWebsite.png'
              heading='Ace Rocket (AI EdTech Startup)'
              description='Worked on a full-stack web app to help students prep for their SAT, 
              ACT and AP math exams. I built a student performance analytics dashboard and a 
              data-driven daily plan feature that generates a question list based on the areas of weakness. 
              Developed and improved features in direct response to user feedback, helping shape the product for over 150 users.'
              year='2025'
              tags={['JavaScript', 'HTML', 'CSS', 'Google Cloud Platform', 'Firebase']}
              demo='https://acerocket.net/'
              />

            <ProjectCards
              img='/coffeeList.png'
              heading='Coffee List - Personal Project'
              description='A work-in-progress web application designed to catalog various types of coffee. 
              The app will allow users to store and view detailed information about each coffee type, including name, 
              description, roast level, bitterness, and more. Currently in the early stages of development, with core features still being built.'
              year='Present'
              tags={['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel']}
              code='https://github.com/runningTurtle2/coffee-list'
              demo='https://coffee-list-two.vercel.app/'
              />

            <ProjectCards
              img='/tiriVeloWebsite.png'
              heading='TiriVelo Pet Services - Mobile Application (Capstone)'
              description='Collaborated with a team of 4 other developers to design and build a commercial-grade cross-platform
               mobile application prototype for TiriVelo, a pet service booking platform.'
              year='2025'
              tags={['TypeScript', 'React Native', 'CSS', 'PostgreSQL', 'SupaBase']}
              demo='https://youtube.com/shorts/spfkV2iHaM8?feature=share'
              />

            <ProjectCards
              img='/sportsmanagement.png'
              heading="Fantasy Sports Team Management System"
              description="An academic project that is a multi-microservices architecture with each major functionality is implemented as an independent service that 
                communicates with other services via REST API's. I was the main contributor for the Player Management Service, Database Design and 
                Integration, Security and Deployment. This was a collaborative team project between me and two other developers 
                working close and taking ownership if different parts of the project."
              year='2024'
              tags={['C#', '.NET', 'SQL Server', 'Azure', 'Entity Framework', 'ASP.NET Core']}
              demo='https://youtu.be/i0XHtZgtFac'
              doc='/files/sportsDocument.pdf'
              />

            <ProjectCards
            img='/hospitalmanagement.png'
              heading='Hospital Management System'
              description='A collaborative academic project where I am paired with another student to develop a system that aims to manage 
              hospital operations, patient data, medical resources, and communication. Features include authentication, patient record 
              management, appointment scheduling, medical inventory, data analytics, and real-time updates.'
              year='2024'
              tags={['C#', '.NET', 'SQL Server', 'MongoDB', 'SignalR']}
              demo='https://youtu.be/emC-xTwNm1o'
              code='https://github.com/runningTurtle2/hospital-management-system'
              />
        </div>
    </section>
  )
}

export default FeaturedSection