import { projects } from "@/projects";

import { motion } from "framer-motion";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const Projects = () => {
    return(
        <section className="py-10 xl:py-16 px-4 md:px-12 lg:px-32 overflow-hidden bg-[url('/slanted-gradient.svg')] bg-center bg-cover bg-no-repeat">
            <motion.h1 
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center text-5xl font-bold tracking-wider text-primaryAccent/85 mb-8">
                    Projects
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                {projects.map(item => (
                    <div className="p-6 overflow-hidden rounded-3xl z-10 bg-gradient-to-b from-neonBlue/10 to-primary border border-neonBlue/30 hover:scale-105 hover:bg-neonBlue/20 transition-all duration-300 ease-in-out backdrop-blur-md">
                        <img src={item.img} className="rounded-lg w-full" loading="lazy"/>
                        <h1 className="text-2xl mt-4 font-bold tracking-wider text-primaryAccent/85">{item.title}</h1>
                        <div className="my-6">
                            {item.code && 
                            <a 
                                href={item.code} 
                                target="_blank" 
                                aria-label="github repository for project"
                                className="bg-neonPink/20 px-3 py-1.5 text-sm tracking-wide rounded-md mr-4 border border-neonPink/20 hover:bg-neonPink/50"
                            >
                                Code
                            </a>
                            }
                            { item.demo &&
                            <a 
                                href={item.demo} 
                                target="_blank" 
                                aria-label="live demo for project"
                                className="bg-neonPink/20 px-3 py-1.5 text-sm tracking-wide rounded-md border border-neonPink/20 hover:bg-neonPink/50" 
                            >
                                Demo
                            </a>
                            }
                        </div>
                        <h2 className="text-sm tracking-wide text-primaryAccent/85">Built using: {item.language}, {item.framework}, {item.style}</h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="description">
                                <AccordionTrigger className="text-primaryAccent/85">Description</AccordionTrigger>
                                <AccordionContent className="text-sm text-primaryAccent/85 tracking-wider leading-7">{item.description}</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                ))}
            </div>
        </section>
    );
}