const express=require("express");
const app=express();
const path=require("path");
require('dotenv').config();


// Static folders
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));
// Middleware to parse JSON
app.use(express.json());

//API ROUTES



app.listen(port,()=>{
    console.log(`Server is listening on port ${port}` );
})