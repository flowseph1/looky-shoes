import React from 'react';

function NavBar() {
    return (
        <div className="secondary-text flex space-x-5">
            <div className="custom-list-item hover:text-shadow">Inventario</div>
            <div className="custom-list-item hover:text-shadow">Nuevos</div>
        </div>
    );
}

export default NavBar;
