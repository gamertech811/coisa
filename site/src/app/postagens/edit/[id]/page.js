import { FormularioEditarPostagem } from "@/components/form";
import {getPostagem} from "@/service/produtos";
import {ExcluirPostagem} from "@/components/form"

export default async function Home({params}) {
    const {id} = await params;
    const response = await getPostagem(id);
    if(response!=null){
        const produtos = response.body.produtos;
        return (
            <div className="cente">
                <h1>Editar Postagem</h1>
                <FormularioEditarPostagem produtos={produtos}/>
                <ExcluirPostagem id={produtos.id}/>
            </div>
);
}
}