import { pool } from "../db.js";

export const createCartItem = async (req, res) => {
  const {
    productId,
    userId,
  } = req.body;


  const [result] = await pool.query(
    "INSERT INTO `cart_item` (productId, userId) VALUES (?, ?)",
    [
      productId,
      userId
    ]
  );
  res.json({
    id: result.insertId,
    productId,
    userId
  });
};

export const getCartItems = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `cart_item`");
  res.json(result);
};

export const getCartItemsByUserId = async (req, res) => {
  var [result] = await pool.query(
    "SELECT p.title, p.price, p.summary FROM `cart_item` ci INNER JOIN `cart` c ON ci.cartId = c.id INNER JOIN `product` p ON p.id = ci.productId WHERE c.userId = ? AND c.status = 1;",
    [req.query.userId]
  );

  if (result.length === 0) {
    return res.status(404).json({ message: "Imagenes no encontradas" });
  }

  if (req.query.productId === "null") {
    res.json(imagenDir);
  } else {
    const imageDirByProductId = imagenDir.filter((image) =>
      image.startsWith(req.query.productId + "-")
    );
    res.json(imageDirByProductId);
  }
};

export const getCartItem = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `cart_item` WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0) {
    return res.status(404).json({ message: "Item no encontrado" });
  }

  res.json(result[0]);
};

export const updateCartItem = async (req, res) => {
  const [result] = await pool.query("UPDATE `cart_item` SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Item no encontrado" });
  }

  return res.sendStatus(204);
};

export const deleteCartItem = async (req, res) => {
  const [result] = await pool.query("DELETE FROM `cart_item` WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Item no encontrado" });
  }

  return res.sendStatus(204);
};

export const deleteAllCartProduct = async (req, res) => {


  const [result] = await pool.query("DELETE FROM `cart_item`")

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Item no encontrado" });
  }
  res.sendStatus(204)
}
