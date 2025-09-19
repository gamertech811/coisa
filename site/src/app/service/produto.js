export async function getPostagem(id) {
    let request;
    if(id!==undefined){
        request = await fetch(`http://localhost:3000/api/produtos/${id}`);
        const produtos = await request.json();
        if(produtos.status === 500){
            return null;
        }

        return {
            body :{
                produtos,
            },
        };
    } else {
        request = await fetch(`http://localhost:3000/api/produtos`);
        const produtos = await request.json();
        return {
            body :{
                produtos,
            },
        };
    }

}

export async function postPostagem(produtos) {
  try {
    await fetch('http://localhost:3000/api/produtos', {method: 'POST', headers: {'Content-Type': 'application/json',},body: JSON.stringify(produtos),mode: 'no-cors'});
  } catch (error) {}
}

export async function deletePostagem(id) {
    try {
        const response = await fetch(`http://localhost:3000/api/produtos/delete/${id}`, {
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