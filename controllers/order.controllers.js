import { pool } from "../db.js";

export const createOrder = async (req, res) => {
  const {
    userId,
    sessionId,
    token,
    status,
    subTotal,
    itemDiscount,
    tax,
    shipping,
    total,
    promo,
    discount,
    grandTotal,
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
    "INSERT INTO `order` (userId, sessionId, token, status, subTotal, itemDiscount, tax, shipping, total, promo, discount, grandTotal, firstName, middleName, lastName, mobile, email, line1, line2, city, province, country, updatedAt, content) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      userId,
      sessionId,
      token,
      status,
      subTotal,
      itemDiscount,
      tax,
      shipping,
      total,
      promo,
      discount,
      grandTotal,
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
    subTotal,
    itemDiscount,
    tax,
    shipping,
    total,
    promo,
    discount,
    grandTotal,
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

export const getOrders = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `order`");
  res.json(result);
};

export const getOrder = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `order` WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  res.json(result[0]);
};

export const updateOrder = async (req, res) => {
  const [result] = await pool.query("UPDATE `order` SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Orden no encontrada" });
  }

  return res.sendStatus(204);
};

export const deleteOrder = async (req, res) => {
  const [result] = await pool.query("DELETE FROM `order` WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Orden no encontrada" });
  }

  return res.sendStatus(204);
};
