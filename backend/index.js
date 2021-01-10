const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDb = require('./configs/dbConfig')
const passport = require('passport')
const User = require('./models/user')
const passportSetup = require('./middlewares/passport-setup');
const cookieSession = require('cookie-session')

const app = express();
require('dotenv').config();

// Requiring routes
const authRoutes = require('./routes/authRoutes')
const orgRoutes= require('./routes/orgRoutes')
const projRoutes = require('./routes/projRoutes')
const profileRoutes = require('./routes/profileRoutes')

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
}));

app.use(passport.initialize())
app.use(passport.session())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

connectDb();

// Use routes
app.use('/profile', profileRoutes);
app.use('/auth',authRoutes);
app.use('/org', orgRoutes)
app.use('/proj', projRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`)
})