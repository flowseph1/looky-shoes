import React from 'react';
import Button from '../button/Button';
import { RiArrowRightSLine } from 'react-icons/ri';

function NewHero() {
    return (
        <div className="flex flex-col justify-center items-center my-20">
            <h1 className="text-5xl font-bold m-2">Compra tus marcas favoritas</h1>
            <h2 className="text-center mb-2">
                Encuentra una gran variedad de calzado y mantente <br /> al tanto de las últimas tendencias.
            </h2>
            <Button intent="tertiary" size="small">
                <div className="flex flex-row items-center justify-between h-full">
                    <div className="mr-1 pr-2 border-r-[1px] border-zinc-600/50 h-full flex items-center">
                        Descubrir
                    </div>
                    <RiArrowRightSLine size={18} />
                </div>
            </Button>
        </div>
    );
}

export default NewHero;
