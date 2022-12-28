const Category = require('../models/category')
const categoriesCtrl = {}

categoriesCtrl.list = (req,res) => {
    Category.find({userId: req.tokenData.id})
        .then((categories) => {
            res.json(categories)
        })
        .catch((err) => {
            res.json(err)
        })
}

categoriesCtrl.create = (req,res) => {
    const body = req.body
    body.userId = req.tokenData.id
    const category = new Category(body)

    category.save()
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}

categoriesCtrl.delete = (req,res) => {
    const id = req.params.id
    const task = req.query.task

    if(task === 'delete'){
       Category.deleteById(id)
            .then(() => {
                Category.findOne({_id: id, userId: req.tokenData.id})
                    .then((category) => {
                        res.json(category)
                    })
                    .catch((err) => {
                        res.json(err)
                    })
            })
            .catch((err) => {
                res.json(err)
            })
    }else if (task === 'undo'){
        Category.findOne({_id: id, userId: req.tokenData.id})
            .then((category) => {
                category.restore()
                res.json(category)
            })
            .catch((err) => {
                res.json(err)
            })
    }
}

module.exports = categoriesCtrl