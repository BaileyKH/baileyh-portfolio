import { motion } from "framer-motion";


export const Experience = () => {
    return(
        <section className="py-10 xl:py-16 px-4 md:px-12 lg:px-32 overflow-hidden">
            <motion.h1 
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center text-5xl font-bold tracking-wider text-primaryAccent/85 mb-12">
                    Experience
            </motion.h1>
            <div className="w-full flex flex-col lg:flex-row justify-center gap-x-6 gap-y-4">
            <motion.div 
                    initial={{ x: -180, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2 flex flex-col items-center rounded-3xl p-3 lg:p-6 bg-gradient-to-b from-neonPink/10 to-primary border border-neonPink/30">
                    <h2 className="text-lg lg:text-3xl font-bold text-primaryAccent/85 tracking-wider text-center">Software Engineer Intern</h2>
                    <p className="text-base lg:text-xl text-primaryAccent/85 mt-1 tracking-wide">Protecly</p>
                    <ul className="list-disc px-10 mt-4 lg:mt-8">
                        <li className="leading-7 tracking-wide text-primaryAccent/85">Architected and deployed the front-end codebase using React and Tailwind CSS, establishing the foundational
                        repository that became the production framework</li>
                        <li className="my-4 leading-7 tracking-wide text-primaryAccent/85">Created and integrated multiple high-visibility pages including Terms & Conditions, Privacy Policy, Report a Phish
                        feature, and a dynamic RSS-powered Articles page</li>
                        <li className="leading-7 tracking-wide text-primaryAccent/85">Implemented performance optimizations and animations for the landing page, resulting in enhanced user
                        engagement and visual appeal</li>
                    </ul>
                </motion.div>
                <motion.div 
                    initial={{ x: -180, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2 flex flex-col items-center rounded-3xl p-3 lg:p-6 bg-gradient-to-b from-neonPink/10 to-primary border border-neonPink/30">
                    <h2 className="text-lg lg:text-3xl font-bold text-primaryAccent/85 tracking-wider text-center">Software Engineer</h2>
                    <p className="text-base lg:text-xl text-primaryAccent/85 mt-1 tracking-wide">Freelance</p>
                    <ul className="list-disc px-10 mt-4 lg:mt-8">
                        <li className="leading-7 tracking-wide text-primaryAccent/85">Developed 8+ custom web applications using React, TypeScript, and Tailwind CSS, delivering complex features including real-time data synchronization and achieving 95% client satisfaction rate</li>
                        <li className="my-4 leading-7 tracking-wide text-primaryAccent/85">Architected and implemented performance optimization strategies including advanced code splitting and resource prioritization, yielding 40% improvement in core web vitals</li>
                        <li className="leading-7 tracking-wide text-primaryAccent/85">Orchestrated complete project lifecycles for 5+ concurrent clients while maintaining 100% on-time delivery rate</li>
                    </ul>
                </motion.div>
                <motion.div 
                    initial={{ x: 180, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2 flex flex-col items-center rounded-3xl p-3 lg:p-6 bg-gradient-to-b from-neonPink/10 to-primary border border-neonPink/30">
                    <h2 className="text-lg lg:text-3xl font-bold text-primaryAccent/85 tracking-wider text-center">Vehicle Technician - Software Systems Focus</h2>
                    <p className="text-base lg:text-xl text-primaryAccent/85 mt-1 tracking-wide">Cruise Automation</p>
                    <ul className="list-disc px-10 mt-4 lg:mt-8">
                        <li className="leading-7 tracking-wide text-primaryAccent/85">Implemented Python scripts that automated vehicle sensor calibration, reducing setup time by 50%</li>
                        <li className="my-4 leading-7 tracking-wide text-primaryAccent/85">Collaborated with cross-functional teams to optimize production processes, contributing to 100% increase in output</li>
                        <li className="mb-4 leading-7 tracking-wide text-primaryAccent/85">Developed comprehensive automated testing procedures, resulting in 60% reduction in software debugging time</li>
                        <li className="leading-7 tracking-wide text-primaryAccent/85">Maintained 99.9% uptime for vehicle software systems through proactive monitoring and rapid issue resolution</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}