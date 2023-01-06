import React from 'react';
import { useSelector } from 'react-redux';

function AdminHeader() {
    const { user } = useSelector(state => state.auth);

    console.log(user);

    return <header>Bienvenido, {user?.username}</header>;
}

export default AdminHeader;
