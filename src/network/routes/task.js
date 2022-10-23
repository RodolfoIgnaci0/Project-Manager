const { Router } = require('express')
const { TaskService } = require('../../services')
const TaskRouter = Router()
const response = require('./response')

TaskRouter.route('/task')
 .get( async (req, res, next) => {
    try {
        const taskService = new TaskService()
        
        response({
            error: false,
            message: await taskService.getTasks(),
            res,
            status: 200
          })
          
    } catch (error) {
        next(error)
    }

   
})

module.exports = TaskRouter
