export async function getPostagem(id) {
    let request;
    if(id!==undefined){
        request = await fetch(`http://localhost:3000/api/postagem/${id}`);
        const postagem = await request.json();
        if(postagem.status === 500){
            return null;
        }

        return {
            body :{
                postagem,
            },
        };
    } else {
        request = await fetch(`http://localhost:3000/api/postagem`);
        const postagem = await request.json();
        return {
            body :{
                postagem,
            },
        };
    }

}

export async function postPostagem(postagem) {
  try {
    await fetch('http://localhost:3000/api/postagem', {method: 'POST', headers: {'Content-Type': 'application/json',},body: JSON.stringify(postagem),mode: 'no-cors'});
  } catch (error) {}
}

export async function deletePostagem(id) {
    try {
        const response = await fetch(`http://localhost:3000/api/postagem/delete/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors'
        });
    
        const body = await response.json();
        return {
            body: {
                status: await response.status,
                message: body.message,
            },
        };
    } catch (error) {
        console.log(error.message);
        return {
            body: {
                status: 400,
                error: 'Erro ao conectar com a api',
            },
        };
    }
}