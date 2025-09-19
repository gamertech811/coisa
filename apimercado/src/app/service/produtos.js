import { getConnection } from "../db/connection";

// Buscar produtos (um ou todos)
export async function getPostagem(id) {
  const connection = await getConnection();
  let rows;

  if (id !== undefined) {
    [rows] = await connection.execute(
      "SELECT * FROM produtos WHERE id = ?",
      [id]
    );
    await connection.end();
    return rows.length > 0 ? rows[0] : null;
  } else {
    [rows] = await connection.execute("SELECT * FROM produtos");
    await connection.end();
    return rows;
  }
}

// Inserir ou atualizar produto
export async function postPostagem(produto) {
  const connection = await getConnection();

  if (produto.id !== undefined) {
    // Verifica se o produto existe antes de atualizar
    if (await getPostagem(produto.id)) {
      await connection.query(
        "UPDATE produtos SET title = ?, price = ?, description = ?, category = ?, image = ?, rating = ? WHERE id = ?",
        [
          produto.title,
          produto.price,
          produto.description,
          produto.category,
          produto.image,
          produto.rating,
          produto.id,
        ]
      );
    } else {
      throw new Error("Produto não encontrado para atualizar.");
    }
  } else {
    // Inserir novo produto
    await connection.query(
      "INSERT INTO produtos (title, price, description, category, image, rating) VALUES (?, ?, ?, ?, ?, ?)",
      [
        produto.title,
        produto.price,
        produto.description,
        produto.category,
        produto.image,
        produto.rating,
      ]
    );
  }

  await connection.end();
}

// Deletar produto
export async function deletePostagem(id) {
  const connection = await getConnection();
  try {
    await connection.execute("DELETE FROM produtos WHERE id = ?", [id]);
    return true;
  } catch (error) {
    return false;
  } finally {
    await connection.end();
  }
}
