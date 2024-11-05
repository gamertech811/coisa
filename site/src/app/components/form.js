"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { postPostagem } from '@/service/postagem';

export default function FormularioPostagem() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const postagem = {
            titulo,
            descricao,
        };
        try {
            await postPostagem(postagem);
            router.push('/postagens');
        } catch (error) {
            setMessage(error.message);
        }
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" htmlFor="titulo" id="pk" value={titulo} onChange={(e) => setTitulo(e.target.value)} required placeholder="titulo.."></input>
            <input type="text" id="title" value={descricao} onChange={(e) => setDescricao(e.target.value)} required placeholder="descrição.."></input>
            <button id="btnpost" type='submit'>Enviar</button>

            <p>{message}</p>
        </form>
            );
            };