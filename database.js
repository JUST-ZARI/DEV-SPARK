const mysql=require("mysql2");

// Create a connection to the MySQL server
let db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Zarian",
    port:3307,
    database: "devspark" 

});
//actually connecting to mysql server
db.connect(err =>{
    if (err) throw err;
    console.log("Connected to MySql server");
/*
db.query("CREATE DATABASE IF NOT EXISTS devspark",err => {
     if (err) throw err;
        console.log("Database created successfully");
 db.end();
}); */
let createTable=`
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    skill_level ENUM('beginner', 'intermediate', 'advanced') DEFAULT 'beginner',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

)`

db.query(createTable,(err)=>{
    if (err) throw error;
    console.log("User table created successfully");
})


});
module.exports = db;