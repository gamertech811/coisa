import { getPostagem } from '../../../../app/service/produtos';
import {error} from "next/dist/build/output/log";

export async function GET(request, { params }) {
    const { id } = params;
    try {
        const produtos = await getPostagem(id);
        if(produtos){
            return new Response(JSON.stringify(produtos), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }else{
            throw error;
        }
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ status: 500,

            message: 'Postagem não encontrada' }), {

                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
    }
}