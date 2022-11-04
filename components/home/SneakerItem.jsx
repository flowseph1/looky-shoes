import React from 'react';

function SneakerItem({ name, image, description }) {
    return (
        <div className="flex flex-col h-56 w-[13em] rounded-lg bg-gradient-to-r from-gray-800 to-zinc-800 cursor-pointer group hover:shadow-[0_0_10px_rgba(0,0,0,0.7)] transition-shadow duration-300">
            <div className="flex-1 rounded-t-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={image}
                    alt={name}
                    className="object-cover rounded-t-lg h-full w-full group-hover:scale-105 transition ease-in duration-300"
                />
            </div>
            <div className="p-4 rounded-b-lg backdrop-blur-3xl">
                <div className="mb-2">
                    <p className="m-0 text-[0.78em] text-white leading-none font-bold line-clamp-1">{name}</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="text-[0.65em] bg-[rgba(0,0,0,0.2)] w-fit px-2 py-1 rounded-xl backdrop-blur-xl text-[rgba(255,255,255,0.7)] leading-none">
                        Hombre
                    </div>
                    <div className="relative w-[4em] h-[1.8em] flex justify-center items-center">
                        <div className="h-full w-full bg-[#4700D8] z-10 rounded-md text-[0.7em] text-white shadow-[0_10px_-5px_0_#9900F0] group flex justify-center items-center">
                            Explorar
                        </div>
                        {/* <div className="bg-gradient-to-tl from-[#4700D8] to-[#9900F0] absolute w-[4.3em] h-[2em] z-0 rounded-md group-hover:animate-rotateGradient blur-sm" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SneakerItem;
