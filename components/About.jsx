"use client";

import { nosotros } from "../constants";
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

function About() {
  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10 flex justify-center items-center min-h-screen`} id="about">
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col items-center justify-center gap-8`}
        >
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className={`flex-1 flex justify-center items-center`}
            >
                {/* Logo on the left side */}
                <img 
                    src="/logo-2.png"
                    alt="pangea logo"
                    className="w-[55%] h-[55%] object-contain"
                />
            </motion.div>
            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] flex flex-col items-center justify-center text-center"
            >
                {/* Text on the right side */}
                <h1 className="text-[40px] text-[#191716] font-bold font-bebas uppercase">Nosotros</h1>
                <div className="mt-[31px] mb-4 text-[#191716] flex flex-col text-xl max-w gap-[24px] pr-5 text-justify">
                    {nosotros}
                </div>
                <div className="w-full flex justify-center">
                    <video 
                        src="/operaciones.mp4"
                        alt="video operaciones"
                        autoPlay
                        loop
                        muted
                        className="w-[100%] h-[350px] m-0 object-cover aspect-auto rounded-lg"
                    />
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default About;
