import {getPostagem} from '@/service/produtos';
import "@/components/styles/body.css"

export default async function Home({params}) {
    const {id} = await params;
    const response = await getPostagem(id);
    if(response!=null){
        const produtos = response.body.produtos;
        return (
            <div>
                <a id='voltar' href="/postagens"><img className="image" src="./../voltar.webp"></img>Voltar</a>
                <div className='cente meio' key={produtos.id}>
                    <h1 id='rem'>{produtos.titulo}</h1>
                    <p id='bold'>{produtos.descricao}</p>
                </div>
                <a id='editar' href={`/postagens/edit/${produtos.id}`}> editar</a>
            </div>
        );
    }else{
        return (
            <div>
                <a id='voltar' href="/postagens"><img className="image" src="./../voltar.webp"></img>Voltar</a>
                <div className="cente meio">
                    <h1 id="rem">Postagem não encontrada</h1>
                </div>
            </div>
        );
    }
}