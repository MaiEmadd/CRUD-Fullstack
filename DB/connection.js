import mysql2 from 'mysql2'
const sql = mysql2.createConnection({
    host: '127.0.0.1',//'localhost'
    user: 'root',
    password: '',
    database: 'week2'
})


export default sql
