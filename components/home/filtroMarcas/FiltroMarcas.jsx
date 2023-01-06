import React from 'react';
import { useBrandsQuery } from '../../../app/services/sneakers';
import Subtitle from '../../ui/Subtitle';
import ListaMarcas from './ListaMarcas';

function FiltroMarcas() {
    const { data, isLoading } = useBrandsQuery();

    return (
        <div className="mb-16">
            {/* <Subtitle subtitle="Marcas" /> */}
            {data && <ListaMarcas data={data} />}
        </div>
    );
}

export default FiltroMarcas;
