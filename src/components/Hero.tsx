import headshot from '/src/assets/Headshot.jpg'

import Ripple from "@/components/ui/ripple";
import HyperText from "@/components/ui/hyper-text";
import ShineBorder from "@/components/ui/shine-border";

import { motion } from "motion/react"

import { IconMapPin, IconBrandGithub, IconBrandLinkedin, IconFileCv } from '@tabler/icons-react';

export const Hero = () => {
    return(
        <section className="w-full bg-primary">
            <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-col justify-center items-center"
                >
                    <ShineBorder
                        color={'#ff0055'}
                        borderWidth={2}
                        borderRadius={100}
                        className="flex justify-center items-center bg-transparent mb-12 p-0 z-10" 
                    >
                        <img src={headshot} className='rounded-full w-48'/>
                    </ShineBorder>
                    <h1 className="z-10 whitespace-pre-wrap text-center text-6xl font-bold tracking-wider text-primaryAccent">Bailey Henderson</h1>
                    <div className="flex gap-x-2 justify-center mt-2">
                    <HyperText
                        text="Front-End"
                        duration={1400}
                        className="text-2xl text-neonPink font-semibold"
                    ></HyperText>
                    <HyperText
                        text="Developer"
                        duration={1400}
                        className="text-2xl text-neonPink font-semibold"
                    ></HyperText>
                    </div>
                    <div className="z-10 flex gap-x-2 justify-center items-center mt-2">
                        <IconMapPin stroke={1} className="text-neonPink"/>
                        <p className="tracking-wide">Phoenix, Arizona</p>
                    </div>
                    <ShineBorder
                        color={'#ff0055'}
                        borderWidth={2} 
                        className="flex justify-center items-center bg-transparent mt-8">
                            <a href="https://github.com/BaileyKH" target="_blank"><IconBrandGithub stroke={1} className="w-10 h-10 text-primaryAccent hover:text-neonPink transition-colors duration-300 ease-in-out"/></a>
                            <a href="https://www.linkedin.com/in/baileykh/" target="_blank"><IconBrandLinkedin stroke={1} className="w-10 h-10 mx-4 text-primaryAccent hover:text-neonPink transition-colors duration-300 ease-in-out"/></a>
                            <a href='/src/assets/Bailey_Henderson_Resume.docx.pdf' download="Bailey Henderson's Resume"><IconFileCv stroke={1} className="w-10 h-10 text-primaryAccent hover:text-neonPink transition-colors duration-300 ease-in-out"/></a>
                    </ShineBorder>
                </motion.div>
                <Ripple 
                    mainCircleSize={800}
                    mainCircleOpacity={.5}
                    numCircles={12}
                />
            </div>
        </section>
    );
}