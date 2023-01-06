import React from 'react';
import { dataPromociones } from '../../data/dataPromociones';
import Subtitle from '../ui/Subtitle';
import SectionItem from './SectionItem';

function Section() {
    const { sneakers } = dataPromociones;

    return (
        <div>
            <Subtitle subtitle="Trending" />
            <div className="flex h-[30em] mb-10 space-x-5">
                <div className="flex-1 bg-container rounded-xl flex-row flex-wrap">
                    {sneakers.map(sneaker => (
                        <SectionItem key={sneaker.id} {...sneaker} />
                    ))}
                </div>
                <div className="w-[15em] bg-container rounded-xl">sdasd</div>
            </div>
        </div>
    );
}

export default Section;
