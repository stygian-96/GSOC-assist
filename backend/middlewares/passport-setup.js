const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;
const User = require('../models/user');
require('dotenv').config();

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GithubStrategy({
        clientID : process.env.CLIENT_ID,
        clientSecret : process.env.CLIENT_SECRET,
        callbackURL : '/auth/github/callback'
    },(acessToken, refreshToken, profile, done) => {

        User.findOne({githubId : profile.id}).then((currentUser) => {
            if(currentUser){
                console.log(`User is: ${currentUser}`);
                done(null, currentUser);
            } else {
                new User({
                    name: profile.displayName,
                    githubId: profile.id,
                    profile_avatar: profile._json.avatar_url,
                    username: profile.username
                }).save().then((newUser) => {
                    console.log(`New user created: ${newUser}`);
                    done(null, newUser);
                });
            }
        })
    })
)