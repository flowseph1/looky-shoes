import React, { useState } from 'react';
import axios from 'axios';
import SneakerItem from './SneakerItem';

function SneakersList({ data }) {
    return (
        <div className="grid grid-cols-4 gap-5">
            {data.map(item => (
                <SneakerItem key={item.name} {...item} />
            ))}
        </div>
    );
}

export default SneakersList;
