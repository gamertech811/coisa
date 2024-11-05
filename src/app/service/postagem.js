import { getConnection } from "@/db/connection";

export async function getPostagem(id)  {
    const connection = await getConnection
    ();
    let rows;
    if (id !== undefined)  {
        [rows] = await connection.execute('SELECT * FROM postagem WHERE id = ?',  [id]);
       await connection;end();
       return rows.length > 0  ? rows[0] : null;
        } else {
            [rows] = await connection.execute('SELECT *  FROM postagem');
    await connection.end();
    return rows;
    }
}

export async function postPostagem(postagem) {
    const connection = await getConnection();
    if (postagem.id !== undefined) {
      if(await getPostagem(postagem.id)){
        await connection.query('UPDATE postagem SET titulo = ?, descricao = ? WHERE id = ?', [postagem.titulo, postagem.descricao, postagem.id],);
      }else{
         throw error;
      }
    }else{
      await connection.query('INSERT INTO postagem (titulo, descricao) VALUES(?, ?)',[postagem.titulo, postagem.descricao]);
    }
}