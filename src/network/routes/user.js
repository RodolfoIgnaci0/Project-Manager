const { Router } = require('express')
const UserRouter = Router()

UserRouter.get('/users', (req, res) =>{
    res.send('users paginaasd')
})

module.exports = UserRouter