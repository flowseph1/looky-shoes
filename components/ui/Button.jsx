import React from 'react';

function Button({ title }) {
    return (
        <div className="py-2 px-4 rounded-md bg-gradient-to-r from-[#4700D8] to-[#9900F0] text-gray-200 cursor-pointer text-sm hover:sombra transition">
            {title}
        </div>
    );
}

export default Button;
