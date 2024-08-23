'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import Link from 'next/link';
import { socials } from '../constants';

const World = () => (
  <section className={`${styles.paddings} relative z-10`} id="contacto">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center justify-center min-h-screen`}
    >      
    <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="w-full sm:w-full mx-auto flex lg:flex-row flex-col gap-6 justify-center items-center"
      >
      <h1 className="text-[#191716] font-bebas font-bold text-center mb-1 text-[40px] sm:text-[60px] xs:text-[40px] uppercase">Contáctanos</h1>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px] justify-center items-center"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover filter brightness-50" />

        <div className="absolute w-[90%] max-w-[450px] h-[280px] bg-[#F08700] rounded-lg p-6 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            <ul className="barlow space-y-4 w-full">
                <li className="text-[#191716] text-xl flex items-center w-full break-words">
                    <img src="/location.png" alt="location" className="object-contain w-[30px] h-[30px] mr-2" />
                    Caracas, Venezuela
                </li>
                <li className="text-[#191716] text-xl flex items-center w-full break-words">
                    <img src="/telephone.png" alt="telephone" className="object-contain w-[30px] h-[30px] mr-2" />
                    +58 (414) 2982898 / +58 (424) 2864203
                </li>
                <li className="text-[#191716] text-l sm:text-xl flex items-center w-full break-words">
                    <img src="/mail.png" alt="email" className="object-contain w-[30px] h-[30px] mr-2" />
                    <Link href="mailto:contacto@pangea.com.ve" className="text-[#191716] hover:text-[#0078d4]">
                        contacto@pangea.com.ve
                    </Link>
                </li>
            </ul>
            <div className="flex gap-6 mt-4">
              {socials.map((social) => (
                <a key={social.name} href={social.redsocial} target="_blank" rel="noreferrer">
                  <img
                    src={social.url}
                    alt={social.name}
                    className="w-[30px] h-[30px] object-contain cursor-pointer"
                  />
                </a>
              ))}
            </div>
        </div>
      </motion.div>
    </motion.div>
  </section>

);

export default World;