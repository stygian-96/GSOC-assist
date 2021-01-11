const express = require('express')
const router = express.Router()
const {
    create2020Orgs,
    get2020OrgsList,
    create2019Orgs,
    get2019OrgsList,
    create2018Orgs,
    get2018OrgsList,
    create2017Orgs,
    get2017OrgsList,
    create2016Orgs,
    get2016OrgsList
} = require('../controllers/orgControllers.js')

router.post('/create2020', create2020Orgs)
router.get('/2020', get2020OrgsList)

router.post('/create2019', create2019Orgs)
router.get('/2019', get2019OrgsList)

router.post('/create2018', create2018Orgs)
router.get('/2018', get2018OrgsList)

router.post('/create2017', create2017Orgs)
router.get('/2017', get2017OrgsList)

router.post('/create2016', create2016Orgs)
router.get('/2016', get2016OrgsList)

module.exports = router
