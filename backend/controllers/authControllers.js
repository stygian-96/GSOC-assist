const User = require('../models/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Register User
exports.postRegister = async (req, res) => {
    try {
        if(!req.body.name || !req.body.password || !req.body.email) {
            res.json({success: false, msg: 'Not all fields are filled'})
        } else{
            var newUser = User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                techStack: req.body.techStack
            })
            await newUser.save( (err, newUser) => {
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully registered'})
                }
            })
        }
    } catch(err) {
        res.json({success: false, msg: 'Some error occured'})
    }
}

// Login User
exports.postLogin = (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if(err) throw err
        if(!user) {
            res.status(403).send({success: false, msg: 'Authentication Failed, User not found'})
        }
        else{
            user.comparePassword(req.bdy.password, (err, isMatch) => {
                if (isMatch && !err) {
                    const token = jwt.sign({user}, process.env.SECRET_KEY, (err, toen) => {
                        res.json({
                            token
                        })
                    })
                }
                else{ 
                    return res.status(403).send({success: false, msg: 'Authentication failed, wrong password'})
                }
            })
        }
    })
}

// Get User Details
exports.getUserDetails = (req,res) => {
    const user = req.user // User details thorugh auth middleware
    res.json({user})
}

// Update User Details
exports.updateUserDetails = (req, res) => {
    try {
        const updatedDetails = await User.updateOne(
            {
                _id: req.user._id
            },
            {
                $set: {
                    name: req.body.name,
                    techStack: req.body.techStack
                }
            }
        )
        res.json({success: true, updatedDetails})
    } catch(err) {
        res.json({success: false, msg: err})
    }
}

// Delete User
exports.deleteUser = async(req, res) => {
    try {
        const deletedItem = await User.remove({
            id: req.user_id
        })
        res.json({success: true, deletedItem})
    } catch(err) {
        res.json({success: false, msg: err})
    }
}
