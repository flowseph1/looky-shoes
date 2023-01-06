import React, { forwardRef } from 'react';

const Filter = forwardRef(({ filter, index, active, setActive }, ref) => {
    const handleClick = () => {
        setActive({
            index,
            animation: {
                animate: {
                    x: ref.current.offsetLeft - 8,
                    width: ref.current.offsetWidth,
                    height: ref.current.offsetHeight,
                },
                transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 100,
                },
            },
        });
    };

    return (
        <div
            ref={ref}
            className={`py-2 px-4 relative ${
                active ? '  text-[#fff] drop-shadow-[0_0_15px_#0096FF]' : ' text-zinc-500'
            }   rounded-full text-xs cursor-pointer font-semibold z-10 transition ease-in ${
                !active ? 'hover:text-zinc-600' : ''
            }`}
            key={filter.name}
            onClick={handleClick}
            onChange={() => console.log('hola')}
        >
            {filter.name}
        </div>
    );
});

Filter.displayName = 'filter';

export default Filter;
