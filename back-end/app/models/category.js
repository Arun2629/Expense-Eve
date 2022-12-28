const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    userId : {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {timestamps: true})

categorySchema.plugin(mongoose_delete)

const Category = mongoose.model('Category', categorySchema)



module.exports = Category