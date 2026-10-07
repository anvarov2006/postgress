import { pool } from "../config/db.js";
import { sendMessageEmail } from "../helpers/emailer.js";
import { getData, setData } from "../helpers/fileData.js";
import { compareHashedPassword, hashPassword } from "../helpers/hashing.js";

const withoutPassword=({password,...user})=>user
class UserController {
  async getAll(req, res) {
try{
const users=await pool.query('SELECT *  FROM oquvchilar');
res.status(200).json({
  success:true,
  data:users.rows
})
}catch(err){
  console.error(`Error is on getAll function error ${err}`)
}
  }
  async getId(req, res) {
  try{
const {rows}=await pool.query('SELECT *  FROM oquvchilar WHERE id= $1',[req.params.id]);
res.status(200).json({
  success:true,
  data:rows[0]
})
}catch(err){
  console.error(`Error is on getId function error ${err}`)
}
  }
  async createUser(req, res) {
   try{
const {first_name,last_name,email}=req.body
if(!first_name || !last_name || !email){
  return res.status(400).json({
    success:false,
    message:"Barcha malumotlarni toliq kiriting"
  })
}
const newUser=await pool.query('INSERT INTO oquvchilar (first_name,last_name,email) VALUES ($1,$2,$3) RETURNING *', [first_name,last_name,email])
res.status(201).json({
  success:true,
  message:"Foydalanuvchi toliq qoshildi",
  data:newUser.rows[0]
})
}catch(err){
  res.status(500).json({
    success:false,
    message:err.message
  })
  console.error(`Error is on createUser function error ${err}`)
}
  }
  async updateUser(req, res) {
try {
      const { id } = req.params;
      const { first_name, last_name, email } = req.body;

      if (!first_name || !last_name || !email) {
        return res.status(400).json({
          success: false,
          message: "Yangilash uchun barcha malumotlarni kiriting"
        });
      }

      const updatedUser = await pool.query(
        'UPDATE oquvchilar SET first_name = $1, last_name = $2, email = $3 WHERE id = $4 RETURNING *',
        [first_name, last_name, email, id]
      );
      if (updatedUser.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Yangilash uchun foydalanuvchi topilmadi"
        });
      }
      res.status(200).json({
        success: true,
        message: "Foydalanuvchi muvaffaqiyatli yangilandi",
        data: updatedUser.rows[0]
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message
      });
      console.error(`Error is on updateUser function error ${err}`);
    }
  }
  async deleteUser(req, res) {
      try {
      const { id } = req.params;

      const deletedUser = await pool.query(
        'DELETE FROM oquvchilar WHERE id = $1 RETURNING *',
        [id]
      );

      if (deletedUser.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "O'chirish uchun foydalanuvchi topilmadi"
        });
      }
      res.status(200).json({
        success: true,
        message: "Foydalanuvchi muvaffaqiyatli o'chirildi",
        data: deletedUser.rows[0]
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message
      });
      console.error(`Error is on deleteUser function error ${err}`);
    }
  }

  async  login(req,res) {
    const {email,password} = req.body;
    const users=await getData();
    const user=users.find((el)=>el.email===email);
    if(!user || !(await compareHashedPassword(password,user.password))){
     return res.status(400).json({
      success:false,
      message:`Email yoki parol xato`
     });
    }
    return res.status(200).json({
      success:true,
      message:`Muvaffaqiyayli kirdingiz`
    })
  }
}
export default new UserController();
