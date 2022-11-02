import React from 'react';

function SneakerItem({ name, image, brand }) {
    return (
        <div className="h-56 w-56 rounded-xl bg-slate-400 cursor-pointer">
            <div className="h-52">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={name} className=" object-contain rounded-t-xl w-[15em] h-[15em] " />
            </div>
            <div className="p-10 bg-zinc-500 rounded-b-xl flex-1">
                <p>{name}</p>
            </div>
        </div>
    );
}

export default SneakerItem;
