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

router.post('/user/register', postRegister)
router.post('/user/login', postLogin)
router.get('/user/getUserInfo', auth, getUserDetails)
router.patch('/user/updateUserInfo', auth, updateUserDetails)
router.delete('/user/deleteUser', auth, deleteUser)

module.exports = router