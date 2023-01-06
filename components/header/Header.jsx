import React from 'react';
import Button from '../button/Button';
import Container from '../Contianer';
import Logo from './Logo';
import NavBar from './NavBar';

function Header() {
    return (
        <header className="h-navigation-height w-full">
            <Container className="flex items-center justify-between h-full">
                <Logo />
                <div className="flex items-center space-x-5">
                    <NavBar />
                    <Button>Contacto</Button>
                </div>
            </Container>
        </header>
    );
}

export default Header;
