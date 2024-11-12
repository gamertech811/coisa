import {getPostagem} from '@/service/postagem';
import "@/components/styles/body.css"

export default async function Home({params}) {
    const {id} = await params;
    const response = await getPostagem(id);
    if(response!=null){
        const postagem = response.body.postagem;
        return (
            <div>
                <a id='voltar' href="/postagens"><img className="image" src="./../voltar.webp"></img>Voltar</a>
                <div className='cente meio' key={postagem.id}>
                    <h1 id='rem'>{postagem.titulo}</h1>
                    <p id='bold'>{postagem.descricao}</p>
                </div>
                <a id='editar' href={`/postagens/edit/${postagem.id}`}> editar</a>
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