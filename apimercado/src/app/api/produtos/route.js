import { getPostagem, postPostagem } from '../../service/produtos';

export async function GET(request) {
    try{
        const produtos = await getPostagem();
        return new Response(JSON.stringify(produtos), {
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
        const produtos = await request.json();
        await postPostagem(produtos);
        return new Response(JSON.stringify({message: 'Produto salva com sucesso.'}), { status: 200, headers: {'Content-Type': 'application/json'}});
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({message: 'Erro ao salvar os dados.'}), {status: 500, headers: {'Content-Type': 'application/json'}});
    }
}