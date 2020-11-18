const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {
    // Get token from header
    const bearerHeader = req.header('authorization');
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];

    if(!bearerHeader) {
        return res.status(401).json({success: false, msg: 'No headers, authorization deinied'})
    }
    else{
        // Check if note token
        if(!token) {
            return res.status(401).json({msg: 'No token, authorization denied'})
        }
    }
    try {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({success: false, msg: 'Token is not valid'})
            } else {
                req.user = decoded.user
                next()
            }
        })
    } catch (err) {
        res.status(500).json({success: true, msg: 'Server Error! Something went wrong with auth middleware'})
    }
}