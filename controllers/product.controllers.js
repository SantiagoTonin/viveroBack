import { pool } from "../db.js";
// import { obetenerID } from "./image.controllers.js";
import { v4 as uuidv4 } from 'uuid';

export const createProduct = async (req, res) => {
  const {
    userId = 1,
    title,
    metaTitle,
    slug = uuidv4(),
    summary,
    type = 123,
    sku = uuidv4(),
    price,
    discount,
    quantity,
    shop = 1,
    updatedAt,
    publishedAt = new Date(),
    startsAt = new Date(),
    endsAt,
    content,
  } = req.body;
  const [result] = await pool.query(
    "INSERT INTO product (userId, title, metaTitle, slug, summary, type, sku, price, discount, quantity, shop, updatedAt, publishedAt, startsAt, endsAt, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      userId,
      title,
      metaTitle,
      slug,
      summary,
      type,
      sku,
      price,
      discount,
      quantity,
      shop,
      updatedAt,
      publishedAt,
      startsAt,
      endsAt,
      content,
    ]
  );
  res.json({ id: result.insertId, userId, title, summary, slug, sku });
};


export const getProducts = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM product ORDER BY createdAt ASC"
  );
  res.json(result);
};

export const getProduct = async (req, res) => {
  const [result] = await pool.query("SELECT p.id, p.title, p.summary, p.price, p.content, i.data FROM product p INNER JOIN image i ON p.id = i.productId  WHERE p.id = ? GROUP BY p.id" , [
    req.params.id,
  ] );

  
  let aux = 0;
  result.map(()=>{
    const imageBuffer =  result[aux].data;
    const imageUrl = `data:image/png;base64,${imageBuffer.toString('base64')}`;
    result[aux].data = imageUrl
    aux++;

  })

  if (result.length === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(result[0]);
};

export const getCustomProducts = async (req, res) => {
  const [result] = await pool.query("SELECT p.id, p.title, p.summary, p.price, p.content, i.data FROM product p INNER JOIN image i ON p.id = i.productId  GROUP BY p.id");

  let aux = 0;
  result.map(()=>{
    const imageBuffer =  result[aux].data;
    const imageUrl = `data:image/png;base64,${imageBuffer.toString('base64')}`;
    result[aux].data = imageUrl
    aux++;

  })
  res.json(result);

}

export const getProductUserCart = async(req,res)=>{
const [result] = await pool.query(`SELECT c.id as idCart,p.id, p.title,p.content, p.summary,p.price, i.data, COUNT(p.id) as count
FROM cart_item c
JOIN product p ON p.id = c.productId
JOIN (SELECT productId, MIN(data) as data FROM image GROUP BY productId) as i ON i.productId = p.id
WHERE c.userId = ?
GROUP BY p.title;`,[req.params.id]);

let aux = 0;
result.map(()=>{
  const imageBuffer =  result[aux].data;
  const imageUrl = `data:image/png;base64,${imageBuffer.toString('base64')}`;
  result[aux].data = imageUrl
  aux++;

})
res.json(result);
}

export const updateProduct = async (req, res) => {
  const [result] = await pool.query("UPDATE product SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);


  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.sendStatus(204);
};

export const deleteProduct = async (req, res) => {
  const [result] = await pool.query("DELETE FROM product WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.sendStatus(204);

};