const express = require('express')
const app = express();
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const flash = require('express-flash')
const logger = require('morgan')
const MongoStore = require('connect-mongo')(session)
const connectDB = require('./config/database')
const indexRoutes = require('./routers/index')
const homeRoutes = require('./routers/home')
const gamePageRoutes = require('./routers/gamePage')

require('dotenv').config({path: './config/.env'})

require('./config/passport')(passport)

connectDB()

app.set('view-engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(logger('dev'))

//Sessions
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({mongooseConnection: mongoose.connection}),
    })
)

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', indexRoutes)
app.use('/home', homeRoutes)
app.use('/game', gamePageRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})