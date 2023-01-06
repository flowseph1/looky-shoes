import React from 'react';

function SectionItem({ main_picture_url }) {
    return (
        <div>
            <div className="bg-zinc-800/10 rounded-xl w-fit">
                <img src={main_picture_url} alt="asd" className="w-[12em]" />
            </div>
            <div></div>
        </div>
    );
}

export default SectionItem;
