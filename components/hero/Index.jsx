import { motion } from 'framer-motion';
import React from 'react';
import { SiNike, SiAdidas, SiFila, SiNewbalance, SiPuma, SiReebok } from 'react-icons/si';
import Vector1 from '../animated-vectors/Vector1';
import BrandButton from './BrandButton';

function Hero() {
    const brandList = [
        {
            icon: <SiNike size={150} />,
        },
        {
            icon: <SiAdidas size={150} />,
        },
    ];

    const imageAnimation = {
        hidden: {
            y: -10,
            opacity: 0,
        },

        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div className=" h-[30em] w-full bg-gradient-to-br from-[#4700D8] to-[#FFD36E] -z-10 flex flex-row shadow-[inset_0_0_200px_rgba(0,0,0,0.6)]">
            <div className="w-[60em] mx-auto flex justify-between items-center">
                <div className="flex-1">
                    <p className="text-white font-bold leading-[0.7em] text-left flex flex-col mb-10">
                        <span className="text-3xl leading-[0.5em]">ENCUENTRA TUS</span>
                        <span className="text-8xl text-[#00FFAB]">MARCAS</span>
                        <span className="text-4xl leading-7">FAVORITAS</span>
                    </p>
                    <button className="px-5 py-2 border border-[rgba(255,255,255,0.6)] text-[rgba(255,255,255,0.7)] text-sm  rounded-full hover:shadow-[]+">
                        Explorar
                    </button>
                </div>
                <div className="flex flex-row">
                    <div className="mr-10 relative">
                        <motion.img
                            src="/airforceone.png"
                            alt=""
                            className="w-[25em] h-[25em] object-contain"
                            variants={imageAnimation}
                            initial="hidden"
                            animate="visible"
                        />

                        <Vector1 />
                    </div>
                    <div className="flex flex-col space-y-5">
                        <BrandButton icon={<SiNike size={50} />} />
                        <BrandButton icon={<SiAdidas size={50} />} />
                        <BrandButton icon={<SiPuma size={50} />} />
                        <BrandButton icon={<SiFila size={50} />} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
