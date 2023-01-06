import React, { createRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Filter from './Filter';
import { motion } from 'framer-motion';

function Filters() {
    const [active, setActive] = useState(0);

    const filters = [
        {
            name: 'Todos',
            ref: createRef(),
        },
        {
            name: 'Nuevos',
            ref: createRef(),
        },
        {
            name: 'Hombres',
            ref: createRef(),
        },
        {
            name: 'Mujeres',
            ref: createRef(),
        },
        {
            name: 'Clásicos',
            ref: createRef(),
        },
    ];

    useEffect(() => {
        setActive({
            index: 0,
            animation: {
                animate: {
                    x: filters[0].ref.current.offsetLeft - 8,
                    width: filters[0].ref.current.offsetWidth,
                    height: filters[0].ref.current.offsetHeight,
                },
                transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 100,
                },
            },
        });
    }, []);

    return (
        <div className="relative bg-[rgba(0,0,0,0.1)] mb-5 rounded-full p-2 flex flex-row space-x-5 shadow-xl">
            {filters.map((filter, index) => (
                <Filter
                    key={filter.name}
                    filter={filter}
                    index={index}
                    active={active.index === index ? true : false}
                    setActive={setActive}
                    ref={filter.ref}
                />
            ))}

            <motion.div
                className="absolute container2 rounded-full !m-0 "
                variants={active.animation}
                animate="animate"
                transition="transition"
            />
        </div>
    );
}

export default Filters;
