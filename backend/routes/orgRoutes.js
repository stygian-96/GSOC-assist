const express = require('express')
const router = express.Router()
const {
    create2020Orgs,
    get2020OrgsList
} = require('../controllers/orgControllers.js')

router.post('/create2020', create2020Orgs)
router.get('/2020', get2020OrgsList)

router.post('/create2019', create2020Orgs)
router.get('/2019', get2020OrgsList)

router.post('/create2018', create2020Orgs)
router.get('/2018', get2020OrgsList)

router.post('/create2017', create2020Orgs)
router.get('/2017', get2020OrgsList)

router.post('/create2016', create2020Orgs)
router.get('/2016', get2020OrgsList)

module.exports = router
