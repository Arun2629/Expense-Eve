const Profile = require('../models/profile')
const profileCtrl = {}

profileCtrl.list = (req, res) => {
    Profile.findOne({user: req.tokenData.id})
        .then((profile) => {
            if(profile){
                res.json(profile)
            }else{
                res.json({})
            }
            
        })
        .catch((err) => {
            res.json(err)
        })
}

profileCtrl.create = (req, res) => {
    const body = req.body
    body.user = req.tokenData.id
    const url = req.protocol + "://" + req.get('host')

    const profile = new Profile({
        name: body.name,
        avatar: url + "/uploads/" + req.file.filename,
        occupation: body.occupation,
        user: body.user
    })

    profile.save()
        .then((profile) => {
            res.json(profile)
        })
        .catch((err) => {
            res.json(err)
        })
}

profileCtrl.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    body.user = req.tokenData.id
    const url = req.protocol + "://" + req.get('host')
    body.avatar =  url + "/uploads/" + req.file.filename

    Profile.findOneAndUpdate({user: body.user, _id: id}, body, {new:true, runValidators: true})
        .then((profile) => {
            res.json(profile)
        })
        .catch((err) => {
            res.json(err)
        })
    
}



module.exports = profileCtrl