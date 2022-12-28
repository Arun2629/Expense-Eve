const express = require('express')
const cors = require('cors')
const multer = require('multer')
const configureDb = require('./config/database')
require('dotenv').config()
const app = express()
const port = 3055

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'uploads')
    },
    filename: (req,file,cb) => {
        cb(null, file.fieldname + "_" + Date.now() + file.originalname.toLowerCase().split(" ").join("-"))
    }
})

const upload = multer({storage: storage,
fileFilter: (req,file,cb) => {
    if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true)
    }else {
        cb(null, false)
        return cb(new Error("Only png, jpg or jpeg format allowed!!"))
    }
}})

configureDb()

app.use(express.json())
app.use(cors())
app.use("/uploads", express.static('uploads'))

const usersCtrl = require('./app/controllers/usersController')
const categoriesCtrl = require('./app/controllers/categoriesController')
const budgetsCtrl = require('./app/controllers/budgetsController')
const expensesCtrl = require('./app/controllers/expensesController')
const profileCtrl = require('./app/controllers/profilesController')
const {authenticateUser} = require('./app/middlewares/authentication')
const {deletedExpenses, activeExpenses} = require('./app/middlewares/expensesData')


//user authentication and registration
app.post('/users/register', usersCtrl.register)
app.post('/users/login', usersCtrl.login)
app.get('/users/account', authenticateUser, usersCtrl.account)

//profile api
app.post('/users/profile', authenticateUser, upload.single('avatar'), profileCtrl.create)
app.get('/users/profile', authenticateUser, profileCtrl.list)
app.put('/users/profile/:id', authenticateUser, upload.single('avatar'), profileCtrl.update)

//categories api
app.get('/categories', authenticateUser, categoriesCtrl.list)
app.post('/categories', authenticateUser, categoriesCtrl.create)
app.delete('/categories/:id', authenticateUser, categoriesCtrl.delete)

//budgets api
app.get('/budgets', authenticateUser, budgetsCtrl.show)
app.put('/budgets/:id', authenticateUser, budgetsCtrl.update)

//expenses api
app.get('/expenses', authenticateUser, expensesCtrl.list)
app.post('/expenses', authenticateUser, expensesCtrl.create)
app.put('/expenses/:id', authenticateUser, expensesCtrl.update)
app.delete('/expenses/:id', authenticateUser, expensesCtrl.delete)

//expenses data
app.get('/expenses/deleted', authenticateUser, deletedExpenses)
app.get('/expenses/active', authenticateUser, activeExpenses)

app.listen(port, () => {
    console.log('server is now running on port', port)
})