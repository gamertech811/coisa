import { getPostagem } from '@/service/postagem';
import {error} from "next/dist/build/output/log";

export async function GET(request, { params }) {
    const { id } = params;
    try {
        const postagem = await getPostagem(id);
        if(postagem){
            return new Response(JSON.stringify(postagem), {
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