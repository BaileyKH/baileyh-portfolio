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
                    <h2 className="text-lg lg:text-3xl font-bold text-primaryAccent/85 tracking-wider text-center">Front-End Developer</h2>
                    <p className="text-base lg:text-xl text-primaryAccent/85 mt-1 tracking-wide">Freelance</p>
                    <ul className="list-disc px-10 mt-4 lg:mt-8">
                        <li className="leading-7 tracking-wide text-primaryAccent/85">Delivered custom solutions tailored to client requirements, leveraging JavaScript, HTML/CSS, and React</li>
                        <li className="my-4 leading-7 tracking-wide text-primaryAccent/85">Optimized project performance, focusing on load times, SEO, and accessibility to improve overall user experience</li>
                        <li className="leading-7 tracking-wide text-primaryAccent/85">Managed entire project lifecycles, from initial concept and design through deployment and post-launch support</li>
                    </ul>
                </motion.div>
                <motion.div 
                    initial={{ x: 180, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-1/2 flex flex-col items-center rounded-3xl p-3 lg:p-6 bg-gradient-to-b from-neonPink/10 to-primary border border-neonPink/30">
                    <h2 className="text-lg lg:text-3xl font-bold text-primaryAccent/85 tracking-wider text-center">Vehicle Software Integration Engineer</h2>
                    <p className="text-base lg:text-xl text-primaryAccent/85 mt-1 tracking-wide">Cruise Automation</p>
                    <ul className="list-disc px-10 mt-4 lg:mt-8">
                        <li className="leading-7 tracking-wide text-primaryAccent/85">Executed comprehensive procedures utilizing Linux and Python to brand vehicle cameras, radars, and lidars</li>
                        <li className="my-4 leading-7 tracking-wide text-primaryAccent/85">Played a key role in boosting production output by 100% through efficient teamwork and process optimization</li>
                        <li className="leading-7 tracking-wide text-primaryAccent/85">Utilized python and testing best practices to troubleshoot and debug vehicle software issues leading to a decrease in
                        vehicle downtime</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}