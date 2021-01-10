const express = require('express')
const router = express.Router()
const { 
    postLogin,
    postRegister,
    getUserDetails,
    updateUserDetails,
    deleteUser
} = require('../controllers/authControllers')
const auth = require('../middlewares/auth')

router.post('/register', postRegister)
router.post('/login', postLogin)
router.get('/getUserInfo', auth, getUserDetails)
router.patch('/updateUserInfo', auth, updateUserDetails)
router.delete('/deleteUser', auth, deleteUser)

module.exports = router