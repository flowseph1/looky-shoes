import React from 'react';
import Button from '../ui/Button';
import NavBar from './NavBar';

function Header() {
    return (
        <div className="shadow-lg">
            <div className="flex justify-between items-center w-[60em] mx-auto">
                <div className="primary-text p-4">
                    Lucky Shoes
                    <span className="logo-text-2"> HN</span>
                </div>
                <div></div>
                <div className="space-x-5 flex items-center">
                    <NavBar />
                    <Button title="Contacto" />
                </div>
            </div>
        </div>
    );
}

export default Header;
