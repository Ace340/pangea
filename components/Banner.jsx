"use client";

import { useEffect } from 'react';
import 'flowbite/dist/flowbite.min.css';

import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import Link from 'next/link';

import 'flowbite';
export const dynamic = 'force-dynamic'


const Banner = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      import('flowbite').then(({ Carousel }) => {
        const carouselElement = document.getElementById('indicators-carousel');
        if (carouselElement) {
          new Carousel(carouselElement, {
            interval: 16000,
            pause: 'hover',
            wrap: true,
          });
        }
      });
    }
  }, []);

  return (
    <section className={`sm:p-16 xs:p-8 px-6 relative max-h-screen mt-2`} id="inicio">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="w-full h-full mx-auto flex justify-center items-center flex-col"
      >
        <div id="indicators-carousel" className="relative w-full" data-carousel="slide">
          {/* Carousel wrapper */}
          <div className="relative h-[80vh] md:h-[90vh] overflow-hidden rounded-lg">
            {/* Item 1 */}
            <div className="duration-700 ease-in-out" data-carousel-item="active">
              <img
                src="/cargo.jpg"
                className="absolute block w-full h-full object-cover filter brightness-50"
                alt="cargo"
              />
              <div className="absolute top-1/2 left-6 sm:left-10 md:left-1/2 transform md:-translate-x-1/2 text-center text-white">
                <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bebas-neue">
                  menos impuestos, más ganancias
                </h1>
                <Link href="#contacto">
                <button className="px-4 py-2 bg-[#f08700] rounded barlow uppercase">quiero comenzar</button>
                </Link>
              </div>
            </div>
            {/* Item 2 */}
            <div className="duration-700 ease-in-out" data-carousel-item>
              <img
                src="/personal.jpg"
                className="absolute block w-full h-full object-cover filter brightness-50"
                alt="personal"
              />
              <div className="absolute top-1/2 left-6 sm:left-10 md:left-1/2 transform md:-translate-x-1/2 text-center text-white">
                <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bebas-neue">
                  te acompañamos en el camino
                </h1>
                <Link href="#contacto">
                <button className="px-4 py-2 bg-[#f08700] rounded barlow uppercase">Quiero conocer más</button>
                </Link>
              </div>
            </div>
            {/* Item 3 */}
            <div className="duration-700 ease-in-out" data-carousel-item>
              <img
                src="/truck.jpg"
                className="absolute block w-full h-full object-cover filter brightness-50"
                alt="truck"
              />
              <div className="absolute top-[35%] left-6 sm:left-10 md:left-1/2 transform md:-translate-x-1/2 text-center text-white">
                <h3 className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase bebas-neue">
                  el desconocimiento en leyes de aduana no tiene que significar decisiones o gastos improvisados para tu negocio. nuestro propósito es aumentar tus ganancias al menor costo, ofreciendo transparencia y la mejor planificación posible que tu empresa necesite
                </h3>
              </div>
            </div>
          </div>
          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </motion.div>
</section>


  );
};

export default Banner;