import React, { useState } from 'react';
import axios from 'axios';
import SneakerItem from './SneakerItem';

function SneakersList() {
    const data = [
        {
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-81c51f64-45c7-4aef-b1c6-d9799761c71e/air-jordan-1-low-shoes-v2kdOZ.png',
            name: 'AIR JORDAN 1 LOW GOLF',
            brand: 'Nike',
        },
        {
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9e807aad-42e9-46e5-8f08-34e141e718e5/nikecourt-legacy-shoes-Jm9qQX.png',
            name: 'NikeCourt Legacy',
            brand: 'Nike',
        },
    ];

    return (
        <div className="flex flex-row space-x-5">
            {data.map(item => (
                <SneakerItem key={item.name} {...item} />
            ))}
        </div>
    );
}

export default SneakersList;
