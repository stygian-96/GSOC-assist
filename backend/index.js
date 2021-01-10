const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDb = require('./configs/dbConfig')
const User = require('./models/user')

// Requiring routes
const authRoutes = require('./routes/authRoutes')
const orgRoutes= require('./routes/orgRoutes')
const projRoutes = require('./routes/projRoutes')

const app = express()

require('dotenv').config()

connectDb()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Use routes
app.use('/user', authRoutes)
app.use('/org', orgRoutes)
app.use('/proj', projRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`)
})