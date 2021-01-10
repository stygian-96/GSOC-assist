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

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
}));

// Requiring routes
const profileRoutes = require('./routes/profileRoutes')
const authRoutes = require('./routes/authRoutes')

app.use(passport.initialize())
app.use(passport.session())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Use routes
app.use('/profile', profileRoutes);
app.use('/auth',authRoutes);

connectDb();

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`)
})