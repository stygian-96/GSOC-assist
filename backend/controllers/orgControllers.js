const Organisation = require('../models/org')

exports.createOrgs = async (req, res) => {
    try{
        var newOrg = Organisation({
            title: req.body.title,
            description: req.body.description,
            orgLink: req.body.orgLink,
            orgGsocLink: req.body.orgGsocLink,
            noOfAppearance: req.body.noOfAppearance,
            yearsOfAppearance: req.body.yearsOfAppearance,
            techStack: req.body.techStack,
            noOfProjects: req.body.noOfProjects
        })
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

exports.getOrgsList = async (req, res) => {
    try{
        const orgs = await Organisation.find()
        res.json({
            orgs
        })
    } catch(err){
        res.json({
            err
        })
    }
}