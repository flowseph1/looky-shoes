import React from 'react';
import AdminLogin from '../../components/administrator/AdminLogin';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function Administrador() {
    const { user } = useSelector(state => state.auth);

    const router = useRouter();

    if (user) router.push('admin/main');

    return <AdminLogin />;
}

export default Administrador;
