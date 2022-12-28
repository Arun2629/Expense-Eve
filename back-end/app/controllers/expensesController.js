const Expense = require('../models/expense')
const expensesCtrl = {}

expensesCtrl.list = (req,res) => {
    Expense.find({userId: req.tokenData.id}).populate('category')
        .then((expenses) => {
            res.json(expenses)
        })
        .catch((err) => {
            res.json(err)
        })
}

expensesCtrl.create = (req,res) => {
    const body = req.body
    body.userId = req.tokenData.id
    const expense = new Expense(body)
    expense.populate('category')

    expense.save()
        .then((expense) => {
            res.json(expense)
        })
        .catch((err) => {
            res.json(err)
        })
}

expensesCtrl.update = (req,res) => {
    const body = req.body
    body.userId = req.tokenData.id
    const id = req.params.id

    Expense.findOneAndUpdate({_id: id, userId: req.tokenData.id}, body, {new: true, runValidators: true}).populate('category')
        .then((expense) => {
            res.json(expense)
        })
        .catch((err) => {
            res.json(err)
        })
}

expensesCtrl.delete = (req,res) => {
    const id = req.params.id
    const task = req.query.task

    if(task === 'delete'){
       Expense.deleteById(id)
            .then(() => {
                Expense.findOne({_id: id, userId: req.tokenData.id}).populate('category')
                    .then((expense) => {
                        res.json(expense)
                    })
                    .catch((err) => {
                        res.json(err)
                    })
            })
            .catch((err) => {
                res.json(err)
            })
    }else if (task === 'undo'){
        Expense.findOne({_id: id, userId: req.tokenData.id}).populate('category')
            .then((expense) => {
                expense.restore()
                res.json(expense)
            })
            .catch((err) => {
                res.json(err)
            })
    }

       
}
module.exports = expensesCtrl