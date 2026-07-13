const express = require("express")
const app = express()
require('dotenv').config()
const db = require("./db/config")

// import files 
const userRoutes = require("./routes/userRoutes")
const {Proper , CheckUrlMethod} = require("./utils/Proper")

// middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json());


// middleware to log requests
app.use(CheckUrlMethod);
// databse connection

// routes
app.use("/api/users",userRoutes)


// error handling middleware
app.use(Proper);


// server
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})


