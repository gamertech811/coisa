"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { postPostagem, deletePostagem } from '@/service/produtos';
import "@/components/styles/body.css"


export default function FormularioPostagem() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const produtos = {
            titulo,
            descricao,
        };
        try {
            await postPostagem(produtos);
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

export function FormularioEditarPostagem({produtos}) {
    const [descricao, setDescricao] =
    useState(produtos.descricao);
    const [message, setMessage] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const produtosEditada = {
            id: produtos.id,
            titulo: produtos.titulo,
            descricao,
        };
    try {
        await postPostagem(produtosEditada);
        router.push('/postagens');
    } catch (error) {
        setMessage(error.message);
    }
};
return (
    <form onSubmit={handleSubmit} className='cente'>
        <div>
            <label className='titcoisa2' htmlFor="titulo">Título: {produtos.titulo}</label>

        </div>
        <div>
            <label className='titcoisa'  htmlFor="descricao">Descrição:</label>
            <input className="ezwin" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        </div>
        <button className='arrumado' type="submit">Salvar</button>
        <p>{message}</p>
    </form>
);
};
export function ExcluirPostagem({id}) {
    const router = useRouter();
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await deletePostagem(id);
            router.push('/postagens');
        } catch (error) {
            
        }
    };
    return (
        <button className='vaisefodercssbugado' onClick={handleClick}>
            Apagar Postagem
        </button>
    );
};