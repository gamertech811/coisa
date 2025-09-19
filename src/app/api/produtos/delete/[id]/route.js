import {deletePostagem} from "@/service/produtos";

export async function GET(request, {params}) {
    const {id} = params;
    if (await deletePostagem(id)) {
        console.log(JSON.stringify({status: 200, message:'Postagem excluída'}))
        return new Response(JSON.stringify({status: 200, message: 'Postagem excluída'}), {
            status: 200,
            headers: {'Content-Type': 'application/json'}
        });
    } else {
        console.log(JSON.stringify({status: 500, message: 'Erro ao excluir'}))
        return new Response(JSON.stringify({status: 500, message: 'Erro ao excluir'}), {
            status: 500,
            headers: {'Content-Type': 'application/json'}
       });
    }
}