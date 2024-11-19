import { FormularioEditarPostagem } from "@/components/form";
import {getPostagem} from "@/service/postagem";
import {ExcluirPostagem} from "@/components/form"

export default async function Home({params}) {
    const {id} = await params;
    const response = await getPostagem(id);
    if(response!=null){
        const postagem = response.body.postagem;
        return (
            <div className="cente">
                <h1>Editar Postagem</h1>
                <FormularioEditarPostagem postagem={postagem}/>
                <ExcluirPostagem id={postagem.id}/>
            </div>
);
}
}