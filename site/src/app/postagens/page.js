import { getPostagem } from '@/service/produtos';
import "./../components/styles/body.css"

export default async function Home() {
    const response = await getPostagem();
    const postagens = response.body.produtos;
    return (
        <div>
            <h1 className='titpost' id='padtit'>Lista de postagens</h1>
            {postagens.map(produtos => (
                <div className='cente' key={produtos.id}>
                    <h1>{produtos.titulo}</h1>
                    <a className='btnver' href={`/postagens/${produtos.id}`}>Ver produtos</a>
                </div>
            ))}
            <a href='/postagens/criar/'>
                <div id='criar'>+</div>
            </a>
        </div>
    );
}

