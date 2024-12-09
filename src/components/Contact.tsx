import { motion } from "framer-motion";

import { IconMail, IconBrandLinkedin } from '@tabler/icons-react';

export const Contact = () => {
    return(
        <section className="py-10 xl:py-16 px-4 md:px-12 lg:px-32 overflow-hidden border-t border-t-primaryAccent/5">
            <motion.div 
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center mb-6 lg:mb-12">
                    <h1 className="text-5xl font-bold tracking-wider text-primaryAccent/85 mb-2">Contact</h1>
                    <p className="text-sm tracking-wider text-primaryAccent/85">Please feel free to contact me via Email or LinkedIn!</p>
            </motion.div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-x-4 gap-y-4">
                <a 
                    href="mailto:hen.baileyk@gmail.com" 
                    aria-label="email Bailey Henderson"
                    className="flex justify-center items-center px-4 py-2 rounded-md gap-x-2 bg-neonBlue/10 border border-neonBlue/30 hover:bg-neonBlue/20 transition-all duration-300 ease-in-out backdrop-blur-md"
                    >
                    <IconMail stroke={1} />
                    <p>hen.baileyk@gmail.com</p>
                </a>
                <a
                    href="https://www.linkedin.com/in/baileykh/" 
                    aria-label="LinkedIn for Bailey Henderson"
                    target="_blank"
                    className="flex justify-center items-center px-4 py-2 rounded-md gap-x-2 bg-neonBlue/10 border border-neonBlue/30 hover:bg-neonBlue/20 transition-all duration-300 ease-in-out backdrop-blur-md"
                >
                    <IconBrandLinkedin stroke={1}/>
                    <p>Bailey Henderson</p>
                </a>
            </div>
        </section>
    );
}