const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    expenseDate: {
        type: Date,
        default: Date.now
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true})

expenseSchema.plugin(mongoose_delete)

const Expense = mongoose.model('Expense', expenseSchema)


module.exports = Expense