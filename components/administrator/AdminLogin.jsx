import React, { useState } from 'react';
import { useLoginMutation } from '../../app/services/auth';
import { MoonLoader } from 'react-spinners';

function AdminLogin() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const [login, { data, isLoading, error }] = useLoginMutation();

    const handleSubmit = event => {
        event.preventDefault();
        login({ username: usuario, password, role: 'admin' });
    };

    return (
        <div className="flex min-h-[100vh] bg-zinc-900">
            <div className="flex flex-1 justify-center items-center max-w-[60em] mx-auto">
                <div className="p-10 rounded-lg ">
                    <h1 className="text-xl font-bold text-zinc-400 py-5">ADMINISTRADOR</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col min-w-[20em] h-52 justify-between">
                        <div className="flex flex-col space-y-2">
                            <input
                                type="text"
                                className="custom-input"
                                placeholder="usuario"
                                value={usuario}
                                onChange={event => setUsuario(event.target.value)}
                                spellCheck={false}
                            />
                            <input
                                type="password"
                                className="custom-input"
                                placeholder="contraseña"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>

                        <div className="flex">
                            <button className="custom-button" type="submit">
                                {isLoading ? <MoonLoader color="#fff" size={15} /> : 'Ingresar'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
