import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    // Animation variants for staggered appearance
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section  className="relative flex mt-38 sm:mt-10 flex-col items-center justify-center bg-transparent sm:px-6 md:px-8 overflow-hidden" >
            {/* Background Image */}
           

            <motion.div
                className="relative max-w-5xl text-center"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* 34+ Years of */}
                <motion.div
                    className="relative z-10 mb-2 inline-block"
                    variants={textVariants}
                >
                    <span className="relative z-10 font-glacial font-semibold leading-tight text-black text-3xl md:text-4xl lg:text-5xl " style={{
                        textShadow: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 5px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 5x rgba(255, 255, 255, 0.2)'
                    }}>
                        34+ Years of
                    </span>
                    {/* Decorative Line (placed behind text) */}
                    <img 
                        src="/underlineremovebg.svg" 
                        alt="Underline" 
                        className="absolute -mt-3 w-40 -translate-x-1/2 left-1/2 top-full z-0 sm:w-56 md:w-72 lg:w-96"
                    />
                </motion.div>

                {/* Excellence with Agility */}
                <motion.div className="" variants={textVariants}>
                    <h1 className="font-glacial leading-snug text-black text-3xl md:text-4xl lg:text-5xl " style={{
                        textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.2)'
                    }}>
                        Excellence with Agility, Service with Heart
                    </h1>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
