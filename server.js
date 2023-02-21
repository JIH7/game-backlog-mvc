const express = require('express')
const app = express();
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const homeRoutes = require('./routers/home')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view-engine', 'ejs')

app.use('/', homeRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})