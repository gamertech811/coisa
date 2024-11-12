"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { postPostagem } from '@/service/postagem';
import "@/components/styles/body.css"

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

export function FormularioEditarPostagem({postagem}) {
    const [descricao, setDescricao] =
    useState(postagem.descricao);
    const [message, setMessage] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const postagemEditada = {
            id: postagem.id,
            titulo: postagem.titulo,
            descricao,
        };
    try {
        await postPostagem(postagemEditada);
        router.push('/postagens');
    } catch (error) {
        setMessage(error.message);
    }
};
return (
    <form onSubmit={handleSubmit} className='cente'>
        <div>
            <label htmlFor="titulo">Título:</label>
            <p>{postagem.titulo}</p>
        </div>
        <div>
            <label htmlFor="descricao">Descrição:</label>
            <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        </div>
        <button className='btnver' type="submit">Salvar</button>
        <p>{message}</p>
    </form>
);
};