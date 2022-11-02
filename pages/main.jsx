import React from 'react';
import Header from '../components/header/Header';
import Content from '../components/main/Content';

function Main() {
    return (
        <div className="flex flex-1 flex-col">
            <Header />
            <Content />
        </div>
    );
}

export default Main;
