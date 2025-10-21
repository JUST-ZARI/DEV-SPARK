const express=require("express");
//to define routes separately from the main app
const router=express.Router();
const app=express();
const db = require('../database');

// ===============================
//        ROUTES FOR USERS
// ===============================

//new user registrations from the frontend form
router.post("/register",(req,res)=>{
    //get users data from form
    const {first_name,last_name,email,password,skill_level}=req.body;
    //insert users data to users table columns
    const sql=`INSERT INTO users (first_name,last_name,email,password,skill_level)
    VALUES(?,?,?,?,?)`;
    //you're storing data, but using the query() method to execute the SQL command.
    //passing values(specific data in that array format) as an array to prevent SQL injection
    db.query(sql,[first_name, last_name, email, password, skill_level],(err,result)=>{
        if (err){
            console.error("Error inserting data to users table",err);
             return res.status(500).json({ message: 'Error inserting user data' });
        }
        return res.status(200).json({message:"User registered successfully!"});
    })

})
module.exports=router;
