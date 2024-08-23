'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const removeInjectedAttributes = () => {
  if (typeof document !== 'undefined') {
    document.body.removeAttribute('data-new-gr-c-s-check-loaded');
    document.body.removeAttribute('data-gr-ext-installed');
  }
};

const Footer = () => {
  useEffect(() => {
    removeInjectedAttributes();
  }, []);

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`sm:p-16 xs:p-8 px-6 py-8 relative`}
    >
      <div className="footer-gradient" />

      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-black opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <a href="https://flowbite.com/" className="flex items-center ml-4 space-x-3 rtl:space-x-reverse">
              <img src="/logo.png" className="h-8" alt="Pangea Logo" />
            </a>
            <p className="font-normal font-joorick text-[18px] text-black opacity-50">Copyright © 2024 - Pangea. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a key={social.name} href={social.redsocial} target="_blank" rel="noreferrer">
                  <img
                    src={social.url}
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer opacity-50"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
