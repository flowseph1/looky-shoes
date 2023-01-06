import React, { useEffect, useRef, useState } from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import SneakerItem from '../home/SneakerItem';
import RightArrow from '../home/promociones/RightArrow';
import LeftArrow from '../home/promociones/LeftArrow';

function Slider({ data }) {
    const [move, setMove] = useState(0);

    const sliderRef = useRef(null);

    const [sliderWidth, setSliderWith] = useState(0);

    const [sliderOffsetWidth, setSliderOffsetWidth] = useState(0);

    const [showLeftArrow, setShowLeftArrow] = useState(false);

    const [showRightArrow, setShowRightArrow] = useState(false);

    useEffect(() => {
        calculateWidth();
        window.addEventListener('resize', calculateWidth);

        return () => window.removeEventListener('resize', calculateWidth);
    }, []);

    const calculateWidth = () => {
        setSliderWith(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
        setSliderOffsetWidth(sliderRef.current.offsetWidth);
    };

    const animatedStyle = {
        x: move,
    };

    const handleRightArrow = () => {
        setMove(prev => prev - sliderWidth);
    };

    const handleLefttArrow = () => {
        setMove(prev => {
            if (prev - sliderWidth < 0) {
                return 0;
            }
            return prev - sliderWidth;
        });
    };

    useEffect(() => {
        if (move <= -sliderWidth) {
            setMove(-sliderWidth);
        }
    }, [move, sliderWidth]);

    const variants = {
        animate: {
            x: move,
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 50,
                // mass: 20,
            },
        },
    };

    return (
        <div className="bg-container rounded-xl mb-5">
            <motion.div
                className="flex flex-row relative overflow-x-hidden select-none"
                ref={sliderRef}
                // whileTap={{ cursor: 'grabbing' }}
            >
                {move != 0 && <LeftArrow handleClick={handleLefttArrow} />}

                <motion.div
                    animate="animate"
                    variants={variants}
                    // drag="x"
                    // dragConstraints={{ right: 0, left: -sliderWidth }}
                    className="flex flex-row space-x-10 scrollbar-hide p-5"
                >
                    {data.map(sneaker => (
                        <SneakerItem key={sneaker.id} {...sneaker} />
                    ))}
                </motion.div>

                {move != -sliderWidth && <RightArrow handleClick={handleRightArrow} />}
            </motion.div>
        </div>
    );
}

export default Slider;
