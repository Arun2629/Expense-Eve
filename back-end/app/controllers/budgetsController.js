const Budget = require('../models/budget')
const budgetsCtrl = {}

budgetsCtrl.show = (req,res) => {

    Budget.find({userId: req.tokenData.id})
        .then((budget) => {
            res.json(budget)
        })
        .catch((err) => {
            res.json(err)
        })
}



budgetsCtrl.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    body.amount = Number(body.amount)
    body.userId = req.tokenData.id
    

    Budget.findOneAndUpdate({_id: id, userId: body.userId}, body, {new: true, runValidators: true})
        .then((budget) => {
            res.json(budget)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = budgetsCtrl