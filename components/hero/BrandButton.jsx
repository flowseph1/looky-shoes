import React from 'react';

function BrandButton({ icon }) {
    return (
        <div className="p-3 bg-[rgba(0,0,0,0.2)] rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-200">
            {icon}
        </div>
    );
}

export default BrandButton;
