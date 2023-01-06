import React from 'react';
import AdminHeader from '../../../components/administrator/header/AdminHeader';
import Container from '../../../components/Contianer';

function AdminMain() {
    return <div>AdminMain</div>;
}

export default AdminMain;

AdminMain.getLayout = function (page) {
    return (
        <Container>
            <AdminHeader />
            {page}
        </Container>
    );
};
