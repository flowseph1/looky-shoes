import React from 'react';
import { SiNike, SiAdidas, SiPuma, SiReebok } from 'react-icons/si';

function Marca({ name, icon }) {
    const getIcon = {
        SiNike: <SiNike size={25} />,
        SiAdidas: <SiAdidas size={25} />,
        SiPuma: <SiPuma size={25} />,
        SiReebok: <SiReebok size={25} />,
    };

    console.log(icon);

    return (
        <div
            className="p-5 backdrop-blur-lg bg-slate-500/10 rounded-lg flex-1 shadow-contour
                    cursor-pointer group"
        >
            <div className="flex justify-between items-center">
                <div>{name}</div>
                <div>{getIcon[icon]}</div>
            </div>

            <div
                className="absolute inset-0 bg-transparent rounded-lg buttonShadow opacity-0
                bg-origin-border group-hover:opacity-100 transition-all duration-500 animate-rotateGradient"
            ></div>
        </div>
    );
}

export default Marca;
