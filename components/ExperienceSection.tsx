import React from 'react'

function ExperienceSection() {
    return (
        <section id='experience' className='w-full'>
            <h2 className="text-xl font-bold mb-8 flex items-center gap-4 text-accent">
                <span className="text-2xl">{'>'}</span> Experience
                <span className="h-px bg-border flex-grow"></span>
            </h2>
            <div className='space-y-16'>
                {/** One */}
                <div className=''>
                    <div className='flex flex-col md:flex-row gap-6 border-l border-border pl-6 md:pl-0 md:border-l-0'>
                        <div className='md:w-1/4 md:text-right md:pr-6 md:border-r border-border relative'>
                            <div className='hidden md:block absolute top-1.5 -right-[5px] w-2.5 h-2.5 bg-border rounded-full border border-black'></div>
                            <span className='font-bold text-md block mb-1'>Ace Rocket</span>
                            <span className='text-text-muted text-xs uppercase tracking-wider'>June 2025 - September 2025</span>
                        </div>
                        <div className='md:w-3/4 pb-8 md:pb-0 '>
                            <h3 className='text-xl font-bold mb-2'>Software Engineer, Part-Time</h3>
                            <ul className='space-y-2 text-text-muted text-sm list-none'>
                                <li className='flex items-start gap-2'><span className='text-accent '>{"›"}</span>
                                    Enhanced daily plan feature using Firebase Firestore with tag-based filtering
                                </li>
                                <li className='flex items-start gap-2'><span className='text-accent '>{"›"}</span>
                                    Designed and implemented a circular progress indicator with persistent state across user sessions
                                </li>
                                <li className='flex items-start gap-2'><span className='text-accent '>{"›"}</span>
                                    Extended question selection to incorporate student performance tiers and adaptive difficulty targeting
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/** Two */}
                    <div className='flex flex-col md:flex-row gap-6 border-l border-border pl-6 md:pl-0 md:border-l-0'>
                        <div className='md:w-1/4 md:text-right md:pr-6 md:border-r border-border relative'>
                            <div className='hidden md:block absolute top-10 -right-[5px] w-2.5 h-2.5 bg-border rounded-full border border-black'></div>
                            <span className='text-text-muted text-xs block top-16 right-6 absolute uppercase tracking-wider'>January 2025 - June 2025</span>
                        </div>
                        <div className='md:w-3/4 pb-8 md:pb-0 '>
                            <h3 className='text-xl font-bold mb-2 mt-8'>Software Engineer, Intern</h3>
                            <ul className='space-y-2 text-text-muted text-sm list-none'>
                                <li className='flex items-start gap-2'><span className='text-accent '>{"›"}</span>
                                    Created a daily plan feature that generates a set of questions by utilizing complex algorithms
                                </li>
                                <li className='flex items-start gap-2'><span className='text-accent '>{"›"}</span>
                                    Built a performance dashboard using analytics to help students track progress and identify weaknesses
                                </li>
                                <li className='flex items-start gap-2'><span className='text-accent '>{"›"}</span>
                                    Migrated daily plan data logic to Google Cloud Platform and validated API endpoints
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/** Three */}
                <div className='flex flex-col md:flex-row gap-6 border-l border-border pl-6 md:pl-0 md:border-l-0'>
                    <div className='md:w-1/4 md:text-right md:pr-6 md:border-r border-border  relative'>
                        <div className='hidden md:block absolute top-1.5 -right-[5px] w-2.5 h-2.5 bg-border rounded-full border border-black'></div>
                        <span className='font-bold text-md block mb-1'>TiriVelo Inc.</span>
                        <span className='text-text-muted text-xs uppercase tracking-wider'>June 2025 - October 2025</span>
                    </div>
                    <div className='md:w-3/4 pb-8 md:pb-0 '>
                        <h3 className='text-xl font-bold mb-2'>Software Developer, Intern</h3>
                        <ul className='space-y-2 text-text-muted text-sm list-none'>
                            <li className='flex items-start gap-2'><span className='text-accent '>{"›"}</span>
                                Transitioned an academic capstone project into an internship, contributing to mobile app iteration and laying the technical foundation for a new React web application
                            </li>
                            <li className='flex items-start gap-2'><span className='text-accent '>{"›"}</span>
                                Implemented UI enhancements and resolved critical authentication bugs in the mobile app
                            </li>
                            <li className='flex items-start gap-2'><span className='text-accent '>{"›"}</span>
                                Started a React web app project, and established GitHub Projects workflows
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection