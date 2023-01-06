import React from 'react';
import Button from '../button/Button';

function SneakerItem({ name, brand_name, main_picture_url, description, gender }) {
    return (
        <div
            className="flex flex-col flex-shrink-0 justify-self-center h-56 w-[13em]
            rounded-lg backdrop-blur-sm bg-slate-500/10 cursor-pointer group select-none
            shadow-lg shadow-indigo-900/20
         "
        >
            <div className="flex-1 rounded-t-lg overflow-hidden bg-white scale-x-[-1]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={main_picture_url}
                    alt={name}
                    className="object-cover rounded-t-lg h-full w-full group-hover:scale-105 transition ease-in duration-300 pointer-events-none"
                />
            </div>
            <div className="p-4 rounded-b-lg backdrop-blur-3xl">
                <div className="mb-2">
                    <p className="m-0 text-xs text-white leading-none font-bold line-clamp-1">{name}</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="text-[0.65em] bg-[rgba(0,0,0,0.2)] w-fit px-2 py-1 rounded-xl backdrop-blur-xl text-[rgba(255,255,255,0.7)] leading-none">
                        {brand_name}
                    </div>
                    {/* <div className="relative w-[4em] h-[1.8em] flex justify-center items-center">
                        <div className="h-full w-full bg-[#4700D8] z-10 rounded-md text-[0.7em] text-white shadow-[0_10px_-5px_0_#9900F0] flex justify-center items-center">
                            Explorar
                        </div>
                    </div> */}
                    <Button intent="secondary" size="small">
                        Explorar
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SneakerItem;
