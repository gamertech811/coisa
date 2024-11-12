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