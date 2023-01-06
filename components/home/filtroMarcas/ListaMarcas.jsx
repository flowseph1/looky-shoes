import React from 'react';
import Marca from './Marca';

function ListaMarcas({ data }) {
    return (
        <div className="flex flex-row space-x-5 mb-5 flex-wrap">
            {data.map(brand => (
                <Marca key={brand.id} {...brand} />
            ))}
        </div>
    );
}

export default ListaMarcas;
