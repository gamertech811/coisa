import { FormularioEditarPostagem } from "@/components/form";
import {getPostagem} from "@/service/postagem";

export default async function Home({params}) {
    const {id} = await params;
    const response = await getPostagem(id);
    if(response!=null){
        const postagem = response.body.postagem;
        return (
            <div>
                <h1>Nova Postagem</h1>
                <FormularioEditarPostagem postagem={postagem}/>
            </div>
);
}
}