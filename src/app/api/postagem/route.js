import { getPostagem, postPostagem } from '@/service/postagem';

export async function GET(request) {
    try{
        const postagem = await getPostagem();
        return new Response(JSON.stringify(postagem), {
            status: 200,
            headers: { 'Content-type': 'application/json'}
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Erro ao buscar os dados.'}), {
            status: 500,
            headers: { 'Contet-Type': 'application/json' }
        }

        )
    }
}

export async function POST(request) {
    try {
        const postagem = await request.json();
        await postPostagem(postagem);
        return new Response(JSON.stringify({message: 'Postagem salva com sucesso.'}), { status: 200, headers: {'Content-Type': 'application/json'}});
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({message: 'Erro ao salvar os dados.'}), {status: 500, headers: {'Content-Type': 'application/json'}});
    }
}