const { Pool } = require('pg')

const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'pm_db',
    password: '123456',
    port: 5432,
  }
  
  const pool = new Pool(connectionData)

/*ejemplo query
const insertUser = async () => (
    try{
        const text = 'INSERT INTO USER (username, password) VALUES ($1, $2)
        const values = ['nombre', 'password']
        const res = await client.query(text, values)
        console.log(res)
    } catch ( e ) {
        console.log(e)
    }

)
*/
  module.exports =  pool 
