const express = require('express')
const router = express.Router()
const {
    createProjects,
    getAllProjects,
    getProjOfOrg
} = require('../controllers/projController')

router.post('/create', createProjects)
router.get('/', getAllProjects)
router.get('/:orgs_id', getProjOfOrg)

module.exports = router