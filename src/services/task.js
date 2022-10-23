const { pg: { queries }} = require('../database')
const { task: { getTasks }} = queries

class TaskService {
    #id
    #title
    #description
    #status
  
    /**
     * @param {Object} args
     * @param {String} args.userId
     * @param {String} args.title
     * @param {String} args.description
     * @param {String} args.status
     */
    constructor(args = {}) {
      const {
        id = '',
        title = '',
        description = '',
        status = '',
      } = args
  
      this.#id = id
      this.#title = title
      this.#description = description
      this.#status = status
    }

    async getTasks() {
        const allTasks = await getTasks()
    
        if (!allTasks)
          throw new Error('Tasks not found')
    
        return allTasks
      }

  }


module.exports = TaskService