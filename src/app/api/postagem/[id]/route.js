import { getPostagem } from "@/service/postagem";
import {error} from "next/dist/build/output/log";

export async function GET(request, { params }) {
    const { id } = params;
    try {
        const postagem = await getPostagem(id);
        if(postagem){
            return new Response(JSON.stringify(postagem), { 
                status: 200,
                headers: { 'Content-Type': 'application'}            
            })
        }
    }
}