const express = require('express')
const router = express.Router()
const {
    createOrgs,
    getOrgsList
} = require('../controllers/orgControllers.js')

router.post('/create', createOrgs)
router.get('/', getOrgsList)

module.exports = router
