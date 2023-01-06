import React, { useState } from 'react';
import Container from '../Contianer';
import SneakerItem from './SneakerItem';

function SneakersList({ data }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {data.map(sneaker => (
                <SneakerItem key={sneaker.id} {...sneaker} />
            ))}
        </div>
    );
}

export default SneakersList;
