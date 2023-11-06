import { pool } from "../db.js";

export const createCart = async (req, res) => {
  const {
    userId,
    sessionId,
    token,
    status,
    firstName,
    middleName,
    lastName,
    mobile,
    email,
    line1,
    line2,
    city,
    province,
    country,
    updatedAt,
    content,
  } = req.body;
  const [result] = await pool.query(
    "INSERT INTO `cart` (userId, sessionId, token, status, firstName, middleName, lastName, mobile, email, line1, line2, city, province, country, updatedAt, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      userId,
      sessionId,
      token,
      status,
      firstName,
      middleName,
      lastName,
      mobile,
      email,
      line1,
      line2,
      city,
      province,
      country,
      updatedAt,
      content,
    ]
  );
  res.json({
    id: result.insertId,
    userId,
    sessionId,
    token,
    status,
    firstName,
    middleName,
    lastName,
    mobile,
    email,
    line1,
    line2,
    city,
    province,
    country,
    updatedAt,
    content,
  });
};

export const getCarts = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `cart`");
  res.json(result);
};

export const getCart = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `cart` WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  res.json(result[0]);
};

export const updateCart = async (req, res) => {
  const [result] = await pool.query("UPDATE `cart` SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Orden no encontrada" });
  }

  return res.sendStatus(204);
};

export const deleteCart = async (req, res) => {
  const [result] = await pool.query("DELETE FROM `cart` WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Orden no encontrada" });
  }

  return res.sendStatus(204);
};
