'use client'
import React, { useState, useEffect } from 'react';
import { Vortex } from "../../components/ui/vortex";
import { FlipWords } from "../../components/ui/flip-words";



export default function LoginPage() {
    const words = ["LOGIN"]; //para flip words

    // Estado para el usuario y la contraseña
    const [user, setUser] = useState(localStorage.getItem('user') || '');
    const [password, setPassword] = useState(localStorage.getItem('password') || '');

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/checklogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre: user, clave: password }),
        });

        const data = await response.json();

        if (response.status === 200) {
            alert('Inicio de sesión exitoso');
            
            // Si el inicio de sesión es exitoso, guardar el usuario y la contraseña en localStorage
            localStorage.setItem('user', user);
            // Haz la redireccion a la pagina principal
            window.location.href = '/';
            
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black">
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
                <div className="text-4xl mx-auto font-norma">
                    <FlipWords words={words} className={"text-white pb-2 font-bold"} />
                </div>
                <form className="text-white flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="User"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        className="bg-gray-800 px-4 py-2 rounded-md text-white focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-800 px-4 py-2 rounded-md text-white focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition duration-200">
                        Login
                    </button>
                </form>
            </Vortex>
        </div>
    );
}
