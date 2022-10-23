const pool = require('../connection')

const getTasks = async () => {
    const tasks = await pool.query('SELECT * FROM TASK')
    return tasks.rows
  }


module.exports = { getTasks }