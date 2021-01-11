const {
    orgList2016,
    orgList2017,
    orgList2018,
    orgList2019,
    orgList2020
} = require('../models/org')

const objectBody = (req) => {
    return {
        title: req.body.title,
        description: req.body.description,
        orgLink: req.body.orgLink,
        orgGsocLink: req.body.orgGsocLink,
        noOfAppearance: req.body.noOfAppearance,
        yearsOfAppearance: req.body.yearsOfAppearance,
        techStack: req.body.techStack,
        noOfProjects: req.body.noOfProjects
    }
}

exports.create2016Orgs = async (req, res) => {
    try{
        var newOrg = orgList2016(objectBody(req))
        await newOrg.save((err, newOrg) => {
            if (err) {
                res.json({success: false, msg: 'Failed to save', err})
            }
            else {
                res.json({success: true, msg: 'Successfully saved', newOrg})
            }
        })
    } catch(err) {
        res.json({success: false, msg: 'Some error occured'})
    }
}

exports.create2017Orgs = async (req, res) => {
    try{
        var newOrg = orgList2017(objectBody(req))
        await newOrg.save((err, newOrg) => {
            if (err) {
                res.json({success: false, msg: 'Failed to save', err})
            }
            else {
                res.json({success: true, msg: 'Successfully saved', newOrg})
            }
        })
    } catch(err) {
        res.json({success: false, msg: 'Some error occured'})
    }
}

exports.create2018Orgs = async (req, res) => {
    try{
        var newOrg = orgList2018(objectBody(req))
        await newOrg.save((err, newOrg) => {
            if (err) {
                res.json({success: false, msg: 'Failed to save', err})
            }
            else {
                res.json({success: true, msg: 'Successfully saved', newOrg})
            }
        })
    } catch(err) {
        res.json({success: false, msg: 'Some error occured'})
    }
}

exports.create2019Orgs = async (req, res) => {
    try{
        var newOrg = orgList2019(objectBody(req))
        await newOrg.save((err, newOrg) => {
            if (err) {
                res.json({success: false, msg: 'Failed to save', err})
            }
            else {
                res.json({success: true, msg: 'Successfully saved', newOrg})
            }
        })
    } catch(err) {
        res.json({success: false, msg: 'Some error occured'})
    }
}

exports.create2020Orgs = async (req, res) => {
    try{
        var newOrg = orgList2020(objectBody(req))
        await newOrg.save((err, newOrg) => {
            if (err) {
                res.json({success: false, msg: 'Failed to save', err})
            }
            else {
                res.json({success: true, msg: 'Successfully saved', newOrg})
            }
        })
    } catch(err) {
        res.json({success: false, msg: 'Some error occured'})
    }
}

exports.get2016OrgsList = async (req, res) => {
    try{
        const orgs = await orgList2016.find()
        res.json({
            orgs
        })
    } catch(err){
        res.json({
            err
        })
    }
}

exports.get2017OrgsList = async (req, res) => {
    try{
        const orgs = await orgList2017.find()
        res.json({
            orgs
        })
    } catch(err){
        res.json({
            err
        })
    }
}

exports.get2018OrgsList = async (req, res) => {
    try{
        const orgs = await orgList2018.find()
        res.json({
            orgs
        })
    } catch(err){
        res.json({
            err
        })
    }
}

exports.get2019OrgsList = async (req, res) => {
    try{
        const orgs = await orgList2019.find()
        res.json({
            orgs
        })
    } catch(err){
        res.json({
            err
        })
    }
}

exports.get2020OrgsList = async (req, res) => {
    try{
        const orgs = await orgList2020.find()
        res.json({
            orgs
        })
    } catch(err){
        res.json({
            err
        })
    }
}