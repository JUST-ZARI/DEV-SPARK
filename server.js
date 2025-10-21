const express=require("express");
const app=express();
const path=require("path");
require('dotenv').config();


// Import custom route files
const userRoutes=require("./routes/userRoutes");

// ===============================
//  MIDDLEWARE CONFIGURATION
// ===============================

// Middleware to parse JSON
app.use(express.json());

// Static folders
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));


// ===============================
//  ROUTES
// ===============================

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

// POST /api/users/register
app.use("/api/users", userRoutes);


const port = process.env.PORT || 3004;
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}` );
})