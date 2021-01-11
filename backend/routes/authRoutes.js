const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    if(!req.user){
        res.send({message: "Not loggedIn"});
    }
    else{
        res.send({message: "Already LoggedIn"});
    }
});

//auth logout
router.get('/logout', (req,res) => {
    req.logout();
    res.send({message: "LoggedOut Sucessfully"});
})

router.get('/github', passport.authenticate('github', {
    scope: ['profile']
}));

router.get('/github/callback', passport.authenticate('github'), (req,res) => {
    res.redirect('http://localhost:3000/profile');
});

module.exports = router;