import { pool } from "../db.js";

export const userLogeado = async(req,res)=>{
  const {userID} = req.body;
  const [result] = await pool.query("INSERT INTO logueado(userID) VALUES(?)",[userID])
  res.json({id:result.insertId,userID})
}

export const getUserLogeado = async(req,res)=>{
  const [result] = await pool.query("SELECT* FROM `logueado`ORDER BY id DESC LIMIT 1;")
  res.json(result);
}