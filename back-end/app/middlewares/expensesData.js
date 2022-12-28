const Expense = require('../models/expense')

const deletedExpenses = (req, res, next) => {
    Expense.find({userId: req.tokenData.id, deleted: true}).populate('category')
        .then((expenses) => {
            res.json(expenses)
        })
        .catch((err) => {
            res.json((err))
        })
}

const activeExpenses = (req,res,next) => {
    Expense.find({userId: req.tokenData.id, deleted: false}).populate('category')
        .then((expenses) => {
            res.json(expenses)
        })
        .catch((err) => {
            res.json(err)
        })
}


module.exports = {
    deletedExpenses,
    activeExpenses
}