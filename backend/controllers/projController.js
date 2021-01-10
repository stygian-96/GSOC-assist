const Project = require('../models/proj')

exports.createProjects = async(req,res) => {
    try{
        const proj = Project({
            title: req.body.title,
            description: req.body.description,
            getTheCode: req.body.getTheCode,
            projLink: req.body.projLink
        })
        await proj.save((err, newProj) => {
            if(err){
                res.json({success: false, msg: "Failed to create", err})
            } else{
                res.json({success: true, msg: "Successfully saved", newProj})
            }
        })
    } catch(err){
        req.json({success: false, msg: "Server error", err})
    }
}

exports.getAllProjects = async(req,res) => {
    try{
        const proj = Project.find()
        res.json({
            proj
        })
    } catch(err) {
        res.json({
            err
        })
    }
}

exports.getProjOfOrg = async(req, res) => {
    try {
        const proj = Project.findById(req.params.id)
        res.json({
            proj
        })
    } catch(err) {
        res.json({
            err
        })
    }
}